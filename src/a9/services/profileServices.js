const PROFILE_API = 'https://lit-ridge-22629.herokuapp.com/api/profile';
// const PROFILE_API = 'http://localhost:4000/api/profile';
export const fetchAllProfiles = (dispatch) => {
  // console.log('fetching profiles...');
  fetch(PROFILE_API)
  .then(response => response.json())
  .then(profiles =>
      dispatch({
        type: 'fetch-all-profiles',
        profiles
      })
  )
}

export const findProfileById = (profile) => {
  fetch(`${PROFILE_API}/${profile._id}`)
  .then(response => response.json())
}

export const saveProfile = (dispatch, profile) => {
  fetch(PROFILE_API, {
    method: 'PUT',
    body: JSON.stringify(profile),
    headers: {
      'Content-Type':'application/json'
    }
  })
  .then(response => dispatch({
        type: 'save-profile',
        profile
      })
  )
}

export default {
  fetchAllProfiles,
  saveProfile,
  findProfileById
}