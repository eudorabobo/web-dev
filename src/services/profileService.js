const PROFILE_API = 'http://localhost:4000/api/profile';

export const getCurrentProfile = (dispatch) =>
    fetch(PROFILE_API)
    .then(response => response.json())
    .then(profile =>
        dispatch({
          type: 'get-current-profile',
          profile
        })
    );

export const updateCurrentProfile = (dispatch, profile) =>
    fetch(`${PROFILE_API}`, {
      method: 'PUT'
    })
    .then(response =>
        dispatch({
          type: 'update-current-profile',
          profile
        }));