const express = require("express");
const router = express.Router();
const admin = require('firebase-admin');
const db = admin.firestore();
router.get("/", async (req, res) => {
    res.send({
        message: 'Hello World'
    })
})


module.exports = router;