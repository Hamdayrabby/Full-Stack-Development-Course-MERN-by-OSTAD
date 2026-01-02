const express = require('express');
const HelloController = require('../controllers/hello-controller');  // Import HelloController
const router = express.Router();

router.get("/hello-get",HelloController.HelloGet); // Call hello method from HelloController
router.post("/hello-post",HelloController.HelloPost); // Call helloPost method from HelloController

module.exports = router;
// In the above code, we imported HelloController and called the Hello method from the HelloController.