const express = require('express')
const passport = require('passport')
require('../passport-setup')
let router = express.Router()

router.get('/google',passport.authenticate('google',{
    scope:['profile']
}),(req,res)=>{
    res.send('google')
})
router.get('/google/redirect',passport.authenticate('google'),(req,res)=>{
    res.redirect('/auth/protect')
})
router.get('/protect',(req,res)=>{
    res.send(req.user)
})
router.get('/logout',(req,res)=>{
    req.logout()
    res.redirect('/auth/google')
})
module.exports=router