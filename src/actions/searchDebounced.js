import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';


var handleVideoSearchDebounced = (q) => {
  //TODO:  Write an asynchronous action to handle a video search!
  return _.debounce(((dispatch) => {
    searchYouTube({
      key: YOUTUBE_API_KEY,
      query: q
    }, (videos) => {
      dispatch(changeVideoList(videos));
      dispatch(changeVideo(videos[0]));
    });
  }), 1000);
};

// debugger;
export default handleVideoSearchDebounced;
// export default debouncedHandleVideoSearch;