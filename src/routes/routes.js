const express = require('express')
const router = express.Router()
const websiteController = require('../controllers/websiteController')
const subscriptionController = require('../controllers/subscriptionController')

router.post('/createwebsite',websiteController.createWebsite)
router.post('/createSubscription',subscriptionController.createSubscription)
router.get('/getWebsite/:websiteId',subscriptionController.subscribersList)
module.exports = router