const functions = require('../../../config/functions')

class PingHook {
    async pingHook(req, res, next){
        functions.changeIp("246383638868918282")
        functions.createLisense("246383638868918282")
        functions.deleteLisense("246383638868918282")
        functions.suspicios("{INFORMÇÕES IMPORTANTES}")
        return res.status(200).send('webhooks testadas.');
      }
}

module.exports = new PingHook();