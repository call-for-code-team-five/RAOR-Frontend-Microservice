const express = require('express')
const session = require('express-session')
const passport = require('passport')
const app = express()
const WebAppStrategy = require('ibmcloud-appid').WebAppStrategy
const CALLBACK_URL = "/ibm/cloud/appid/callback"

app.use(session({
  secret: "123456",
  resave: true,
  saveUninitialized: true
}))

app.use(passport.initialize())
app.use(passport.session())

passport.use(new WebAppStrategy({
  tenantId: "44516919-34fa-4e47-a1de-9e0462e11af4",
  clientId: "4aff0bc4-2465-4564-af0c-dc37cd9833eb",
  secret: "Nzk1MjYyNmEtOGNiNy00NzMxLTllMWYtYTIxYTE3YTllODQw",
  oauthServerUrl: "https://eu-gb.appid.cloud.ibm.com/oauth/v4/44516919-34fa-4e47-a1de-9e0462e11af4",
  redirectUri: "http://raor-frontend-git-dev-raor.workshop-team-five-bb0dafd08526894d1a8ae848e8bd8099-0000.eu-gb.containers.appdomain.cloud" + CALLBACK_URL
}))

passport.serializeUser(function (user, cb) {
  cb(null, user);
});

passport.deserializeUser(function (obj, cb) {
  cb(null, obj);
});

app.get(CALLBACK_URL, passport.authenticate(WebAppStrategy.STRATEGY_NAME));

app.get("/protected_resource", passport.authenticate(WebAppStrategy.STRATEGY_NAME), (req, res) => {
  res.json(req.user); 
});

app.get('/', passport.authenticate(WebAppStrategy.STRATEGY_NAME), (req, res) => {
  res.sendFile("public/index.html");
})

app.listen(9000, () => {
    console.log("React App is running in Node Port 9000")
})