const dao = require("../../../../../../../../Desktop/a9-node-on-heroku-main/db/who/who-dao");

module.exports = (app) => {
    const findAllWho = (req, res) =>
        dao.findAllWho()
            .then(who => res.json(who));
    app.get("/rest/who", findAllWho);

    const createWho = (req, res) =>{
        const newWho = {
            "avatarIcon": "/images/java.png",
            "userName": "Java",
            "handle": "Java",
            ...req.body,
        };

        dao.createWho(newWho)
            .then((insertedWho) => res.json(insertedWho));
    }






};
