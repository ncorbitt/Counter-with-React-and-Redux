

export const increment = () => ({
    type: 'INCREMENT'
});

export const decrement = () => ({
  type: 'DECREMENT'
});

export const keepTrackOfIncrementClicks = () => ({
  type: 'KEEP_TRACK_OF_INCREMENT_CLICKS'
});

export const keepTrackOfDecrementClicks = () => ({
  type: 'KEEP_TRACK_OF_DECREMENT_CLICKS'
});

export const updateCount = (updateCount) => {
  
  if( updateCount >= parseInt(10000) ) {
    updateCount = parseInt(9999)
  }

  return {
    type: 'UPDATE_COUNT',
    updateCount
  }
};

export const getUpdate = () => ({
  type: 'GET_UPDATE',
})

