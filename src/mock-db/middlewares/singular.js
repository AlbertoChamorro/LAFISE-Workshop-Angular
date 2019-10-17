'use strict'
module.exports = (req, res, next) => {
    const _send = res.send
    res.send = function (body) {
        let isUnique = require('url').parse(req.originalUrl, true).query['is_unique']
        const json = JSON.parse(body)
        if (isUnique === 'true') {
            try {
                if (Array.isArray(json)) {
                    if (json.length === 1) {
                        return _send.call(this, JSON.stringify({ data: json[0] }))
                    } else if (json.length === 0) {
                        // return _send.call(this, '{}', 404)
                        return _send.call(this, '{ "data": null }');
                    }
                }
            } catch (e) { }
        }
        return _send.call(this, JSON.stringify({ data: json }))
    }
    next()
}