const websiteModel = require('../models/websiteModel')
//const websiteController = require('../models/websiteModel')
const validator = require("../validator/validator")

const createWebsite = async function(req,res)
{
    try{
        const requestBody = req.body
       let {websiteName,about,isDeleted}  = requestBody
       if(!validator.isValidRequestBody(requestBody))
       {
           return res.status(400).send({status:false, msg:"plz provide valid request body"})
       }
       if(!validator.isValid(websiteName))
       {
        return res.status(400).send({status:false, msg:"plz provide valid website name"})
       }
       if(!validator.isValid(about))
       {
        return res.status(400).send({status:false, msg:"plz provide valid about filed"})
       }
    
      
       const checkWebsite = await websiteModel.findOne(requestBody)
       {
           if(checkWebsite){
               res.status(400).send({status:false,msg:"website is already registered"})
           }
       }
       let websiteData ={
        websiteName:websiteName,
        about:about,
        isDeleted:isDeleted
    }
     

       const createWebsiteData = await websiteModel.create(websiteData)
       {
           res.status(201).send({status:true, msg:createWebsiteData})
       }
    }
    catch(err){
        res.status(500).send({status:false,msg:err.msg})
    }
}
    module.exports.createWebsite = createWebsite