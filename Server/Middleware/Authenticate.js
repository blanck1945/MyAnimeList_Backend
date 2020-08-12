const passport = require("passport")
const LocalAuth = require("passport-local").Strategy
const db = require("../models")

//Using passport
passport.use(new LocalAuth, ({
    usernameField: 'email',
}, {
    function(email, password, done) {

        const user = db.User.findOne({
            where: {
                email: email
            }
        })
        if (!user) {
            return done(null, false, { message: 'Upss something went wrong.' });
        }
        if (!user.validPassword(password)) {
            return done(null, false, { message: 'Upss something went wrong.' });
        }

        return done(null, user);
    }
}))

