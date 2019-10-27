const express = require('express');
const router = express.Router();

//
// ─── CONTROLLERS ─────────────────────────────────────────────────────────────────
//  
const clientControllers = require('../controllers/client');


router.get('/', clientControllers.getIndex);

router.post('/sms-sender', clientControllers.postSms);
// router.get('/order', clientControllers.getIndex);



// router.get('/', clientControllers.getIndex);



module.exports = router; 