var configVals = require("./config.json");
module.exports = {
    getDbConnectionString: function(){
        return `mongodb://${configVals.userName}:${configVals.password}@ds137141.mlab.com:37141/nodetododb`;
    }
}