import PostItem from "./PostItem.js";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import service from "../../services/twitterService";

const selectAllTweets = (state) => state.posts;
const PostList = () => {
  // const [tweets, setTweets] = useState([]);
  const tweets = useSelector(selectAllTweets);
  const dispatch = useDispatch();
  useEffect(() => {
    service.fetchAllTweets(dispatch);
    console.log('tweets: ', tweets)
  }, []);
  // console.log(JSON.stringify(tweets))
  return (
      tweets.map(post => {
        return (<PostItem post={post}/>);
      })
  )
}
export default PostList;