// const TWEET_API = 'https://lit-ridge-22629.herokuapp.com/api/tweets';
const TWEET_API = 'http://localhost:4000/api/tweets';

export const fetchAllTweets = (dispatch) => {
  console.log('A9 fetching tweets...')
  fetch(TWEET_API)
  .then(response => response.json())
  .then(tweets =>
      dispatch({
        type: 'fetch-all-tweets',
        tweets
      })
  )
}

export const postNewTweet = (dispatch, newTweet) => {
  fetch(TWEET_API, {
    method: 'POST',
    body: JSON.stringify(newTweet),
    headers: {
      'Content-Type':'application/json'
    }
  })
  .then(response => response.json())
  .then(tweet => dispatch({
        type: 'create-tweet',
        tweet
      })
  );
}

export const deleteTweet = (dispatch, tweet) => {
  console.log(tweet._id);
  fetch(`${TWEET_API}/${tweet._id}`, {
    method: 'DELETE'
  })
  .then(response => dispatch({
        type: 'delete-tweet',
        tweet
      })
  )
}

export const likeTweet = (dispatch, tweet) => {
  console.log(tweet._id);
  const toggleLike = tweet.liked === true ? false : true;
  const newTweet = {...tweet, liked: toggleLike}
  // console.log(newTweet);
  fetch(`${TWEET_API}/${newTweet._id}/like`, {
    method: 'PUT',
    headers: {
      'Content-Type':'application/json'
    },
    body: JSON.stringify(newTweet)
  })
  .then(response => dispatch({
        type: 'like-tweet',
        newTweet
      })
  )
};

export default {
  fetchAllTweets,
  postNewTweet,
  deleteTweet,
  likeTweet
}