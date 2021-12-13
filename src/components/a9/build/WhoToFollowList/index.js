import React, {useEffect} from "react";
import WhoToFollowListItem from "./WhoToFollowListItem";
import {useDispatch, useSelector} from "react-redux";
import service from "../../services/whoService";
const WhoToFollowList = () => {
  const who = useSelector((state) => state.who);
  const dispatch = useDispatch();
  useEffect(() => {
    service.fetchAllWho(dispatch);
  }, [])

  // console.log('who from who to follow list: ', who);
  return (
      <>
        <ul className="list-group">
          <li className="list-group-item" key={who._id}>What's Happening</li>
          {
            who.map(who => {
              return(<WhoToFollowListItem who={who}/>);
            })
          }
        </ul>
      </>
  )
};
export default WhoToFollowList;