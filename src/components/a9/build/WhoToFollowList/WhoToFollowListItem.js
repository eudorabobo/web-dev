import React from "react";
const WhoToFollowListItem = (
    {
      who = {
        avatarIcon: "../../images/nasa.png",
        userName: 'NASA',
        handle: 'NASA',
      }
    }) => {
  return (
      <>
        <li className="list-group-item" key={who._id}>
          <div className="row">
            <div className="col-2">
              <img src={who.avatarIcon} alt="" className="rounded-circle"
                   width="48" height="48"/>
            </div>
            <div className="col-7">
              {who.userName} <i className="fas fa-check-circle"></i>
              <div>@{who.handle}</div>
            </div>
            <div className="col-3">
              <button className="btn btn-primary rounded-pill">Follow</button>
            </div>
          </div>
        </li>
      </>
  )
};
export default WhoToFollowListItem;