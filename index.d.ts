export type Options = {
	/**
	A drive api key that can be used to exceed the download limit of 100MB.
	*/
	apiKey?: string;
};

/**
Generate a Google Drive direct download link based on the URL or ID.

@param urlOrId The url or id of the drive content.

@example
```
import driveUrl from 'drive-url';

driveUrl('https://drive.google.com/file/d/1Px8bePd7pFSz5r6bTA7GKN9HloCzMfFk/view?usp=sharing');
//=> 'https://drive.google.com/uc?export=download&id=1Px8bePd7pFSz5r6bTA7GKN9HloCzMfFk'
```
*/
export default function driveUrl(urlOrId: string, options?: Options): string;
