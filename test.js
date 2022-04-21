import test from 'ava';
import driveUrl from './index.js';

test('main', t => {
	t.is(
		driveUrl(
			'https://drive.google.com/file/d/1Px8bePd7pFSz5r6bTA7GKN9HloCzMfFk/view?usp=sharing',
		),
		'https://drive.google.com/uc?export=download&id=1Px8bePd7pFSz5r6bTA7GKN9HloCzMfFk',
	);
	t.is(
		driveUrl(
			'https://drive.google.com/file/d/1Px8bePd7pFSz5r6bTA7GKN9HloCzMfFk/view?usp=sharing',
			{apiKey: 'foo'},
		),
		'https://www.googleapis.com/drive/v3/files/1Px8bePd7pFSz5r6bTA7GKN9HloCzMfFk?alt=media&key=foo',
	);
});

test('errors', t => {
	t.throws(() => driveUrl(null), {message: 'Invalid URL provided.'});
	t.throws(() => driveUrl(''), {message: 'Invalid URL provided.'});

	t.throws(() => driveUrl('url', {apiKey: ''}), {message: 'Invalid api key provided.'});
	t.throws(() => driveUrl('url', {apiKey: '$$$'}), {message: 'Invalid api key provided.'});
});
