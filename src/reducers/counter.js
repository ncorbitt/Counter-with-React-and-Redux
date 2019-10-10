const initialState = {
  count: 0,
  updateCount: 0,
  trackIncrementClicks: 0,
  trackDecrementClicks: 0
};

function counterReducer(state = initialState, action) {
  switch (action.type) {
    
    case 'INCREMENT':
      // console.log('INCREMENT')
      return {
        ...state,
        count: state.count + 1
      };
    
    case 'DECREMENT':
      // console.log('DECREMENT')
      return {
        ...state,
        count: state.count - 1
      };
    
    case 'KEEP_TRACK_OF_INCREMENT_CLICKS':
      console.log(`KEEP_TRACK_OF_INCREMENT_CLICKS: ${state.trackIncrementClicks}`)
      return {
        ...state,
        trackIncrementClicks: state.trackIncrementClicks + 1
      }

    case 'KEEP_TRACK_OF_DECREMENT_CLICKS':
      console.log(`KEEP_TRACK_OF_DECREMENT_CLICKS: ${state.trackDecrementClicks}`)
      return {
        ...state,
        trackDecrementClicks: state.trackDecrementClicks + 1
      }

    case 'UPDATE_COUNT':
      console.log('UPDATE_COUNT')
      return {
        ...state,
        updateCount: parseInt(action.updateCount)
      }

      case 'GET_UPDATE':
        console.log('GET_UPDATE')
        return {
          ...state,
          count: state.updateCount,
          trackDecrementClicks: 0,
          trackIncrementClicks: 0
        }

    default:
      return state;
  }
}

export default counterReducer;