const jwt = require('jsonwebtoken');

const auth = async (req, res, next) => {
    try {
        const token = req.header('x-auth-token');

        if (!token) {
            return res.status(400).json({ msg: "No auth token, access denied" });
        }
        const verified = jwt.verify(token, "passwordKey");
        if (!verified) {
            return res.status(401).json({ msg: "Verification failed" });
        }
        req.user = verified.id;
        req.token = token;
        next();
    } catch (e) {
        res.status(500).json({error: e.mesaage })
    }

};

module.exports = auth;