

module.exports.formatResponse = function (code, msg, data){
    return {
        "code": code,
        "msg": msg,
        "data": data
    }
}