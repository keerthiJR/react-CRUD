import {ADD_USER} from '../actions/types'

export const AddReducer = (state={},action) => {
    switch(action.type){
        case ADD_USER:
           // console.log('reducer',action.payload)
            return{...state,post: action.payload}
        default:
            return state
    }

}