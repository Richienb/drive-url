const formatRegexes = new Set([
	/https:\/\/drive\.google\.com\/file\/d\/(?<id>.*?)\/(?:edit|view)/,
	/https:\/\/drive\.google\.com\/open\?id=(?<id>.*?)$/,
]);

const alphanumericRegex = /^[\w-]+$/;

function extractId(urlOrId) {
	for (const format of formatRegexes) {
		if (format.test(urlOrId)) {
			return format.exec(urlOrId).groups.id;
		}
	}

	if (alphanumericRegex.test(urlOrId)) {
		return urlOrId;
	}

	throw new Error('Invalid URL provided.');
}

export default function driveUrl(url, {apiKey} = {}) {
	if (typeof url !== 'string') {
		throw new TypeError('Invalid URL provided.');
	}

	if (typeof apiKey === 'string' && !alphanumericRegex.test(apiKey)) {
		throw new Error('Invalid api key provided.');
	}

	const id = extractId(url.trim());

	return apiKey ? `https://www.googleapis.com/drive/v3/files/${id}?alt=media&key=${apiKey.trim()}` : `https://drive.google.com/uc?export=download&id=${id}`;
}
