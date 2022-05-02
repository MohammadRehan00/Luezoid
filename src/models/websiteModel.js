const mongoose = require('mongoose')
const websiteSchema = new mongoose.Schema({
   websiteName:{
         type: String,
            required: true
   },
   about:{
            type: String,
            required: true
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
}, { timestamps: true })

module.exports = mongoose.model('website', websiteSchema)