
// export function changeVideo(state = null, action) {
//   switch (action.type) {
//     case 'CHANGE_VIDEO':
//       return {};
//     default:
//       return state;
//   }
// }


var changeVideo = (video) => (
  //TODO:  Return some action object to change the currently playing video.
   {
    type: 'CHANGE_VIDEO',
    video: video
   }
);

export default changeVideo;
