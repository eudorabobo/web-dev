const WHO_API = 'https://lit-ridge-22629.herokuapp.com/rest/who';
export const fetchAllWho = (dispatch) => {
  console.log('A9 fetch from server for who...')
  fetch(WHO_API)
  .then(response => response.json())
  .then(whos =>
      dispatch({
        type: 'fetch-all-whos',
        whos
      })
  )
}

export default {
  fetchAllWho
}