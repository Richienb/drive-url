"use strict"

const formats = [/https:\/\/drive\.google\.com\/file\/d\/(?<id>.*?)\/(?:edit|view)\?usp=sharing/, /https:\/\/drive\.google\.com\/open\?id=(?<id>.*?)$/]

const alphanumeric = /^[a-zA-Z0-9\-_]+$/

module.exports = (url, apiKey) => {
	if (typeof url !== "string") throw new Error("Invalid URL provided.")
	if (typeof apiKey === "string" && !alphanumeric.test(apiKey)) throw new Error("Invalid api key provided.")

	url = url.trim()

	let id

	formats.forEach((regex) => {
		const matches = url.match(regex)
		if (matches && matches.groups && matches.groups.id) id = matches.groups.id
	})

	if (!id) {
		if (alphanumeric.test(url)) id = url
		else throw new Error("Invalid URL provided.")
	}

	if (apiKey) return "https://www.googleapis.com/drive/v3/files/" + id + "?alt=media&key=" + apiKey.trim()
	return "https://drive.google.com/uc?export=download&id=" + id
}
