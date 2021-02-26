const express = require('express')
let cookieSession = require('cookie-session')
const authRoute = require('./routes/authRoute')
const passport = require('passport')
let app = express()
app.use(cookieSession({
    maxAge:1*10*10*1000,
    keys:['@#$%ghhjhh134456']
}))
app.use(passport.initialize())
app.use(passport.session())
app.use(express.static('public'))
app.use('/auth',authRoute)

app.get('/',(req,res)=>{
    res.sendFile('./index.html')
})
app.listen(3000,()=>console.log(`port running in 3000`))