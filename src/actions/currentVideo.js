
// export function changeVideo(state = null, action) {
//   switch (action.type) {
//     case 'CHANGE_VIDEO':
//       return action.changeVideo;
//     default:
//       return state;
//   }
// }


var changeVideo = (action) => (
  //TODO:  Return some action object to change the currently playing video.

   {
    type: 'CHANGE_VIDEO',
    video: action
   }
);

export default changeVideo;
