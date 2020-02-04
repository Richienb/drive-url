/**
 * My awesome module.
 * @param input Lorem ipsum.
 * @param postfix Lorem ipsum.
 * @example
 * ```
 * const theModule = require("the-module");
 * theModule("unicorns");
 * //=> 'unicorns & rainbows'
 * ```
*/
declare function driveURL(url: string, apikey?: string): string;

export = driveURL;
