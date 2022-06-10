const debug = require('../../utils/debug');
const terminusService = require('./terminusService');

const signup = async (req, res) => {
    try {
        const tier = req.body.tier;
        const info = req.body.info;
        const recurrence = req.body.recurrence;
        const offerId = req.body.offerId;
        const response = await terminusService.signup(offerId);

        debug.info(`Sign Up Response: ${JSON.stringify(response)}`);

        if (!response.success) res.status(500).json(response);
        else res.status(200).json(response);
    } catch (error) {
        debug.error(error.stack);
        res.status(500).json({ message: error.message, error: error.stack });
    }
};

module.exports = { signup };
