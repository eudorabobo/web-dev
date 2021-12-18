const dao = require('../tweets/tweet-dao')

module.exports = (app) => {
    const findAllTweets = (req, res) => {
        dao.findAllTweets()
        .then(tweets => res.json(tweets));
    }

    const postNewTweet = (req, res) => {
        let content = req.body.content;
        const newTweet = {
            // _id: (new Date()).getTime() + '',
            avatarIcon: "/images/elon.jpeg",
            userName:"Elon Musk",
            handle:"@elonmusk",
            time:"just now",
            image:"/images/cybertruck.png",
            comment: 77400,
            retweet: 40790,
            like:5432,
            share:"12k",
            link:{},
            content
        }
        dao.createTweet(newTweet)
        .then((insertedTweet) => res.json(insertedTweet));
        // tweets = [newTweet, ...tweets];
        // res.json(newTweet);
    }

    const deleteTweet = (req, res) => {

        const id = req.params['id'];
        // console.log(id);
        // tweets = tweets.filter(tweet => tweet._id !== id);
        dao.deleteTweet(id)
        .then((status) => res.send(status));

    }

    const likeTweet = (req, res) => {
        const id = req.params['id'];
        const alreadyLiked = req.body.liked;
        console.log(req.body);
        // tweets = tweets.map(tweet => {
        // if (tweet._id === id) {
        if (alreadyLiked === true) {
            dao.likeTweet(id)
            .then(tweet => res.json(tweet));
        } else {
            // tweet.liked = true;
            // tweet.like++;
            dao.dislikeTweet(id)
            .then(tweet => res.json(tweet));
        }
        // return tweet;
        // }
        // else {
        //     return tweet;
        // }
        // });
        // res.sendStatus(200);
    }

    app.put('/api/tweets/:id/like', likeTweet);
    app.delete('/api/tweets/:id', deleteTweet);
    app.post('/api/tweets', postNewTweet);
    app.get('/api/tweets', findAllTweets);
};