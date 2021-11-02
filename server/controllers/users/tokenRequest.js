const { isAuthorized } = require('../tokenFunctions');

module.exports = (req, res) => {
  const accessTokenData = isAuthorized(req);
  if (!accessTokenData) {
    return res.status(403).json({
      message: "access token does not exist, you've never logged in before"
    });
  }
  res.json({ data: { userInfo: accessTokenData }, message: 'ok' }); //return 지움
};
