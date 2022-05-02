const subscriptionModel = require('../models/subscriptionModel')
const websiteModel = require("../models/websiteModel")

const validator = require("../validator/validator")

const createSubscription = async function(req,res)
{
    try{
       const requestBody = req.body
       let {email,website}  = requestBody
       if(!validator.isValidRequestBody(
           requestBody))
       {
           return res.status(400).send({status:false, msg:"plz provide valid request body"})
       }
       if(!validator.isValid(email))
       {
        return res.status(400).send({status:false, msg:"plz provide  email address"})
       }
       if(!validator.validateEmail(email))
       {
        return res.status(400).send({status:false, msg:"plz provide valid email address"})
       }


       if(!validator.isValid(website))
       {
        return res.status(400).send({status:false, msg:"plz provide valid website"})
       }
    //    if(!validator.isValidObjectId(website)){
    //        res.status(400).send({status:false,msg:"object Id is not valid"})
    //    }
      
       let check = await websiteModel.findOne({website:website})
       if(!check)
       {
           return res.status(400).send({status:false,msg:"plz provide valid website id"})
       }
       else{
           
       Data ={
        email:email,
        website:website,
        
    }
          let createSubscriptionData =  await subscriptionModel.create(Data)
            {
            res.status(201).send({status:true, msg:createSubscriptionData})
        }
    }

      
    }
    catch(err){
        res.status(500).send({status:false,msg:err.msg})
    }
}

const subscribersList = async function(req,res){
    const websiteId = req.params.websiteId
    if(!validator.isValid(websiteId)){
        return res.status(400).send({status:flase,msg:"plz provide correct websiteId"})
    }
    const website = await subscriptionModel.findOne({websiteId:websiteId})
    if(!website){
        return res.status(400).send({status:false,msg:"invalid website id"})
    }
    else  {
        return res.status(200).send({status:true,data:website})
      }
}


    module.exports = {createSubscription,subscribersList}