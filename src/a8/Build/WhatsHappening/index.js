import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {postNewTweet} from "../../../../services/twitterService";

const WhatsHappening = () => {
    let [whatsHappening, setWhatsHappening] = useState('');

    const dispatch = useDispatch();
    const tweetClickHandler = () => {
        // console.log('whats happenging: ', whatsHappening)
        // dispatch({type: 'create-tweet',
        //     content: whatsHappening
        // })
        postNewTweet(dispatch, {content: whatsHappening});
    }
    return (
        <>
            <div className="row mt-2">
                <div className="col-1">
                    <img src="/images/elon.jpeg" alt="" className="wd-avatar"/>
                </div>
                <div className="col-10">
                <textarea value={whatsHappening}
                          onChange={(event) =>
                              setWhatsHappening(event.target.value)}
                          placeholder="What's Happening?"
                          className="wd-dark-mode w-100 rounded-2 mx-1">
                </textarea>
                </div>
            </div>
            <div className="row mt-2">
                <div className="col-1"></div>
                <div className="col-8">
                    <i className="fas fa-image mx-2 text-primary"></i>
                    <i className="fas fa-poll mx-2 text-primary"></i>
                    <i className="fas fa-smile mx-2 text-primary"></i>
                    <i className="far fa-sticky-note mx-2 text-primary"></i>
                </div>
                <div className="col-2">
                    <button onClick={tweetClickHandler}
                            className="btn btn-primary rounded-pill ">Tweet
                    </button>
                </div>
            </div>

        </>


    );
};
export default WhatsHappening;