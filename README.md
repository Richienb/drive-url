# Drive URL [![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/drive-url/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/drive-url)

Generate a Google Drive direct download link based on the URL or ID.

[![NPM Badge](https://nodei.co/npm/drive-url.png)](https://npmjs.com/package/drive-url)

## Install

```sh
npm install drive-url
```

## Usage

```js
const driveURL = require("drive-url");

driveURL("https://drive.google.com/file/d/1Px8bePd7pFSz5r6bTA7GKN9HloCzMfFk/view?usp=sharing");
//=> 'https://drive.google.com/uc?export=download&id=1Px8bePd7pFSz5r6bTA7GKN9HloCzMfFk'
```

## API

### driveURL(url, apiKey?)

#### url

Type: `string`

The url or id of the drive content.

#### apiKey

Type: `string`

A drive api key that can be used to exceed the download limit of 100MB.
