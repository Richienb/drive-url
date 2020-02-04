const test = require("ava")
const driveURL = require(".")

test("main", (t) => {
	t.is(driveURL("https://drive.google.com/file/d/1Px8bePd7pFSz5r6bTA7GKN9HloCzMfFk/view?usp=sharing"), "https://drive.google.com/uc?export=download&id=1Px8bePd7pFSz5r6bTA7GKN9HloCzMfFk")
})
