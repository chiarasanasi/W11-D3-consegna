const initialState = {
  mainResearch: {
    jobs: 0,
    likedJobs: 0,
  },
}

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_JOBS":
      return {
        ...state,
        mainResearch: {
          ...state.mainResearch,
          jobs: action.payload,
        },
      }
    case "REMOVE_FROM_PREFERITI":
      return {
        ...state,
        mainResearch: {
          ...state.mainResearch,
          jobs: [
            ...state.mainResearch.jobs.slice(0, action.payload),
            ...state.mainResearch.jobs.slice(
              action.payload + 1,
              state.mainResearch.jobs.length
            ),
          ],
        },
      }

    case "ADD_TO_PREFE":
      return {
        ...state,
        mainResearch: {
          ...state.mainResearch,
          likedJobs: [...(state.mainResearch.likedJobs + action.payload)],
        },
      }
    default:
      return state
  }
}

export default mainReducer
