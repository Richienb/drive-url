const { test } = require("uvu")
const { is } = require("uvu/assert")
const driveURL = require(".")

test("main", () => {
	is(driveURL("https://drive.google.com/file/d/1Px8bePd7pFSz5r6bTA7GKN9HloCzMfFk/view?usp=sharing"), "https://drive.google.com/uc?export=download&id=1Px8bePd7pFSz5r6bTA7GKN9HloCzMfFk")
	is(driveURL("https://drive.google.com/file/d/1Px8bePd7pFSz5r6bTA7GKN9HloCzMfFk/view?usp=sharing", "supersecretkey"), "https://www.googleapis.com/drive/v3/files/1Px8bePd7pFSz5r6bTA7GKN9HloCzMfFk?alt=media&key=supersecretkey")
})

test("errors", () => {
	try {
		driveURL(null)
	} catch (error) {
		is(error.message, "Invalid URL provided.")
	}

	try {
		driveURL("")
	} catch (error) {
		is(error.message, "Invalid URL provided.")
	}

	try {
		driveURL("url", "")
	} catch (error) {
		is(error.message, "Invalid api key provided.")
	}

	try {
		driveURL("url", "$$$")
	} catch (error) {
		is(error.message, "Invalid api key provided.")
	}
})

test.run()
