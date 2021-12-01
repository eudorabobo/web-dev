let profiles = require("../data/profileData.json");

module.exports = (app) => {
  const getCurrentProfile = (req, res) => {
    // console.log('sending profile', profiles);
    res.json(profiles);
  }

  const updateCurrentProfile = (req, res) => {
    // console.log(req.body);
    profiles = req.body;
    res.sendStatus(200);
  }
  app.put('/api/profile', updateCurrentProfile);
  app.get('/api/profile', getCurrentProfile);
};