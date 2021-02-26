const passport = require('passport')
const GoogleStrategy =require('passport-google-oauth20')
passport.serializeUser((user,done)=>{
  done(null,user)  
})
passport.deserializeUser((user,done)=>{
    done(null,user)
})
passport.use(new GoogleStrategy({
    callbackURL:'/auth/google/redirect',
    clientID: '617480612022-njni9a126a4hjrhpsvjkgnn5uoki639t.apps.googleusercontent.com',
    clientSecret:'SElZ30ZqDa8NagmWyk8Uq1h1' ,
},(accsessToken,refreshToken,profile,done)=>{
    done(null,profile)
}))
