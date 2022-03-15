import {combineReducers} from 'redux'
import { GetUser } from './User'
import {AddReducer} from './AddReducer'
import { UpdateUser } from './Update'
import {DeleteReducer} from './DeleteReducer'

const rootReducer = combineReducers({
    GetUser,
    AddReducer,
    UpdateUser,
    DeleteReducer
     
})

export default rootReducer