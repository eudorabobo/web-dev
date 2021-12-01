import posts from './data/tweets.json';
const posts = [];
const tweets = (state = posts, action) => {
  switch (action.type) {
    case 'fetch-all-tweets':
      console.log('fetched all tweets. all tweets: ', action.tweets);
      return(
          action.tweets.reverse()
      );
      break;
    case 'create-tweet':
      return ([
            action.tweet,
            ...state,
          ]
      );
      break;
    case 'delete-tweet':
      console.log('entering delete-tweet',JSON.stringify(state));
      return (
          state.filter(post => post._id !== action.tweet._id)
      )
      break;
    case 'like-tweet':
      console.log('entering like-tweet',JSON.stringify(state));
      console.log(action);
      return (
          state.map(post => {
            if (post._id === action.newTweet._id) {
              if (post.liked === true) {
                post.liked = false;
                post.like--;
              } else {
                post.liked = true;
                post.like++;
              }
              return post;
            } else {
              return post;
            }
          })
      );
      break;
    default:
      return (state);
  }
};

export default tweets;