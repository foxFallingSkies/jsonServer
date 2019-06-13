var apiUser = require('./api/user.js');
var testMock = require('./api/testMock');
module.exports = {
    login: apiUser.login,
    testMock: testMock.testMock
};