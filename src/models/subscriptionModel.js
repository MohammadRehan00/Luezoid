const mongoose = require('mongoose')
const ObjectId= mongoose.Schema.Types.ObjectId;
const subscriptionSchema = new mongoose.Schema({
   email:{
       type: String,
        default:"admin@gmail.com"
    },
    website:{
        type: ObjectId,
        ref: 'website',
        required: true
        },
}, { timestamps: true })

module.exports = mongoose.model('subscription', subscriptionSchema)