import { SEARCH_NAME_FILTER, STATUS_NAME_FILTER } from "redux/actions"

const initState = {
  search: "",
  status: "All"
}

const filtersReducer = (state = initState, action) => {
  switch (action.type) {
    case SEARCH_NAME_FILTER:
      return {
        ...state,
        search: action.payload
      }
    case STATUS_NAME_FILTER:
      return {
        ...state,
        status: action.payload
      }
    default:
      return state
  }
}

export default filtersReducer
