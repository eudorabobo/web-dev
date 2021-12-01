import PostItem from "./PostItem.js";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchAllTweets} from "../../../../services/twitterService";

const selectAllTweets = (state) => state.posts;
const PostList = () => {
    const tweets = useSelector(selectAllTweets);
    const dispatch = useDispatch();
    useEffect(() => fetchAllTweets(dispatch), []);
    // console.log(JSON.stringify(tweets))
  return (
      tweets.map(post => {
      return (<PostItem post={post}/>);
    })
  )
}
export default PostList;