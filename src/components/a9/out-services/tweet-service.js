//let tweets = require('../reducers/data/tweets.json');
const dao = require('../../../../../../../../Desktop/a9-node-on-heroku-main/db/tweets/tweet-dao');

module.exports = (app) => {
    const findAllTweets = (req, res) =>
        dao.findAllTweets()
            .then(tweets => res.json(tweets));

    const postNewTweet = (req, res) =>{
            const newTweet = {
                "topic": "Web Development",
                "userName": "ReactJS",
                "verified": false,
                "handle": "ReactJS",
                "time": "2h",
                "avatar-image": "/images/react.png",
                "logo-image": "/images/react.png",
                "stats": {
                    "comments": 123,
                    "retweets": 234,
                    "likes": 345
                },
                ...req.body,
            };

        dao.createTweet(newTweet)
        .then((insertedTweet) => res.json(insertedTweet));
    }



    const deleteTweet = (req, res) =>
        dao.deleteTweet(req.params.id)
        .then((status) => res.send(status));

    const likeTweet = (req, res) => {
        const id = req.params['id'];
        //console.log("like function")
        // let tweet = req.body;
        //
        //     if (tweet.liked === true) {
        //         tweet.liked = false;
        //         tweet.stats.likes--;
        //     } else {
        //         tweet.liked = true;
        //         tweet.stats.likes++;
        //     }
        //
        //
        // dao.updateTweet(req.params.id, tweet)
        // .then(status => res.send(tweet));
        //console.log("tweet send from frontend")
        //console.log(id)
        const tweet = dao.findTweetById(id)
            .then((tweet) => {
                if (tweet.liked === true) {
                    //console.log("if condition")
                    tweet.liked = false;
                    tweet.stats.likes--;
                } else {
                    //console.log("else condition")
                    tweet.liked = true;
                    tweet.stats.likes++;
                }
               // console.log("updating tweet")
                //console.log(tweet)
                dao.updateTweet(id, tweet)
                    .then(status => res.send(status));
            });
        //console.log("tweet updated")
    }

    //
    //
    //
    // const likeTweet = (req, res) => {
    //     const id = req.params['id'];
    //     tweets = tweets.map(tweet => {
    //         if (tweet._id === id) {
    //             if (tweet.liked === true) {
    //                 tweet.liked = false;
    //                 tweet.stats.likes--;
    //             } else {
    //                 tweet.liked = true;
    //                 tweet.stats.likes++;
    //             }
    //             return tweet;
    //         } else {
    //             return tweet;
    //         }
    //     });
    //     res.sendStatus(200);
    // }
    // app.put('/api/tweets/:id/like', likeTweet);
    //
    //
    // // const findAllTweets = (req, res) => {
    // //     res.json(tweets);
    // // }
    //
    //
    // const postNewTweet = (req, res) => {
    //     const newTweet = {
    //         _id: (new Date()).getTime() + '',
    //         "topic": "Web Development",
    //         "userName": "ReactJS",
    //         "verified": false,
    //         "handle": "ReactJS",
    //         "time": "2h",
    //         "avatar-image": "/images/react-blue.png",
    //         "logo-image": "/images/react-blue.png",
    //         "stats": {
    //             "comments": 123,
    //             "retweets": 234,
    //             "likes": 345
    //         },
    //         ...req.body,
    //     };
    //     tweets = [
    //         newTweet,
    //         ...tweets
    //     ];
    //     res.json(tweets);
    // }
    //


    app.put('/api/tweets/:id/like', likeTweet);
    app.delete('/api/tweets/:id', deleteTweet);
    app.post('/api/tweets', postNewTweet);
    app.get('/api/tweets', findAllTweets);

};


