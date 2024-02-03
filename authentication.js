/* global WIKI */

// ------------------------------------
// Steam Account
// ------------------------------------

const SteamStrategy = require('passport-steam').Strategy
const _ = require('lodash')

module.exports = {
  init (passport, conf) {
    const strategy = new SteamStrategy({
      returnURL: conf.callbackURL,
      realm: WIKI.config.host,
      apiKey: conf.apiKey,
      passReqToCallback: true
    }, async (req, _identifier, profile, cb) => {
      try {
        const user = await WIKI.models.users.processProfile({
          providerKey: req.params.strategy,
          profile: {
            ...profile,
            email: `${profile.id}@steam.wikijs`,
            picture: _.get(profile, '_json.avatarfull', '')
          }
        })
        cb(null, user)
      } catch (err) {
        cb(err, null)
      }
    })

    passport.use(conf.key, strategy)
  },
  logout (_conf) {
    return '/'
  }
}
