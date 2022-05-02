const mongoose = require('mongoose')
const ObjectId= mongoose.Schema.Types.ObjectId;
const articleSchema = new mongoose.Schema({
   title:{
       type: String,
         required: true
    },
    description:{
        type: String,
            required: true
        },
    website:{
        type: ObjectId,
        ref: 'website',
        required: true
        },
    isDeleted: {
        type: Boolean,
        default: false
    }
}, { timestamps: true })

module.exports = mongoose.model('article', articleSchema)