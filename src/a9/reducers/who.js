import whoJson from './data/who.json';
const whoJson = [];
const who = (state = whoJson, action) => {
  switch (action.type) {
    case 'fetch-all-whos':
      return (
          action.whos
      );
    default:
      return (state);
  }

}
export default who;
