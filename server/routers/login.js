const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser')
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({
    extended: true
}));

module.exports = (passport, csrfProtection) => {

    router.post('/', csrfProtection, (req, res, next) => {
        passport.authenticate('local-login', function(err, user) {
            if(err) {
                return res.status(400).send();
            }
            req.logIn(user, (err) => {
                if(err)  {
                    return res.status(400).send();
                }
                return res.json();
            });
          })(req, res, next);
    })

    return router;
}