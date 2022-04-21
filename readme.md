# drive-url

Generate a Google Drive direct download link based on the URL or ID.

## Install

```sh
npm install drive-url
```

## Usage

```js
import driveUrl from 'drive-url';

driveUrl('https://drive.google.com/file/d/1Px8bePd7pFSz5r6bTA7GKN9HloCzMfFk/view?usp=sharing');
//=> 'https://drive.google.com/uc?export=download&id=1Px8bePd7pFSz5r6bTA7GKN9HloCzMfFk'
```

## API

### driveURL(urlOrId, apiKey?)

#### urlOrId

Type: `string`

The url or id of the drive content.

#### apiKey

Type: `string`

A drive api key that can be used to exceed the download limit of 100MB.
