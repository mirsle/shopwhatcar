
const defaultState = {
    token: [],
    count:1,
    name:"",
    id:"",
    storeid:""
  }
  
  const reducer = (state = defaultState, action) => {
    switch (action.type) {
      case "SET_STATE": {
        let newState = JSON.parse(JSON.stringify(state))
        newState[action.key] = action.value
        return newState
      }
      default:
        return state
    }
  }
  
  export default reducer