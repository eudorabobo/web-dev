import PostItem from "./PostItem.js";
import {useSelector} from "react-redux";

const selectAllTweets = (state) => state.posts;
const PostList = () => {
  const tweets = useSelector(selectAllTweets);
  return (
      tweets.map(post => {
        return (<PostItem post={post}/>);
      })
  )
}
export default PostList;