const mongoose = require('mongoose')
const adminSchema = new mongoose.Schema({
   Name:{
         type: String,
            required: true
   },
   email:{
       type: String,
        default:"admin@gmail.com"
    },
    password:{
        type: String,
        default:"admin@123"
        },
        role:{
            type: String,
            default:"admin"
        },
}, { timestamps: true })

module.exports = mongoose.model('admin', adminSchema)