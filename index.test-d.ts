import {expectType} from 'tsd';
import driveUrl from './index.js';

expectType<string>(driveUrl('https://drive.google.com/file/d/1Px8bePd7pFSz5r6bTA7GKN9HloCzMfFk/view?usp=sharing'));
expectType<string>(driveUrl('https://drive.google.com/file/d/1Px8bePd7pFSz5r6bTA7GKN9HloCzMfFk/view?usp=sharing', {
	apiKey: 'foo',
}));
