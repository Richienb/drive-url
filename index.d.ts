/**
 * Generate a Google Drive direct download link based on the URL or ID.
 * @param url The url or id of the drive content.
 * @param apiKey A drive api key that can be used to exceed the download limit of 100MB.
 * @example
 * ```
 * const driveURL = require("drive-url");
 *
 * driveURL("https://drive.google.com/file/d/1Px8bePd7pFSz5r6bTA7GKN9HloCzMfFk/view?usp=sharing");
 * //=> 'https://drive.google.com/uc?export=download&id=1Px8bePd7pFSz5r6bTA7GKN9HloCzMfFk'
 * ```
*/
declare function driveURL(url: string, apikey?: string): string;

export = driveURL;
