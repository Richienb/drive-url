const { test } = require("uvu")
const { is, throws } = require("uvu/assert")
const driveURL = require(".")

test("main", () => {
	is(
		driveURL(
			"https://drive.google.com/file/d/1Px8bePd7pFSz5r6bTA7GKN9HloCzMfFk/view?usp=sharing",
		),
		"https://drive.google.com/uc?export=download&id=1Px8bePd7pFSz5r6bTA7GKN9HloCzMfFk",
	)
	is(
		driveURL(
			"https://drive.google.com/file/d/1Px8bePd7pFSz5r6bTA7GKN9HloCzMfFk/view?usp=sharing",
			"foo",
		),
		"https://www.googleapis.com/drive/v3/files/1Px8bePd7pFSz5r6bTA7GKN9HloCzMfFk?alt=media&key=foo",
	)
})

test("errors", () => {
	throws(() => driveURL(null), ({ message }) => message === "Invalid URL provided.")
	throws(() => driveURL(""), ({ message }) => message === "Invalid URL provided.")

	throws(() => driveURL("url", ""), ({ message }) => message === "Invalid api key provided.")
	throws(() => driveURL("url", "$$$"), ({ message }) => message === "Invalid api key provided.")
})

test.run()
