const { Router } = require("express");
const path = require("path");

const router = Router();

//	React-router fallback path
router.get("/*", (req, res) => {
	res.sendFile(path.join(__dirname, "../../_client/static/index.html"));
});

module.exports = router;
