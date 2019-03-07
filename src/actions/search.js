import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';
import thunk from "redux-thunk";

var handleVideoSearch = (q) => {
  return function(dispatch) {
    let searches;
    searchYouTube({key: YOUTUBE_API_KEY, query: q, max: 5}, (items) => {searches = items;
      dispatch(changeVideo(searches[0]))
      dispatch(changeVideoList(searches))
    });
  }
}

export default handleVideoSearch;
