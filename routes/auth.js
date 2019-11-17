const express = require('express');
const router = express.Router();

//
// ─── CONSTLLERS ─────────────────────────────────────────────────────────────────
//
const authControllers = require("../controllers/auth")


router.post('/token', authControllers.token); 



module.exports = router; 
