import { combineReducers } from 'redux';
import calculation from './redux/Calculator/reducer';


const rootReducer = combineReducers({
    total:calculation,  
})

export default rootReducer