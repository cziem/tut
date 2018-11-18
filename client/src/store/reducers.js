import { combineReducers } from 'redux';
import { HomeReducer as home} from '../routes/Home/modules/home';

const makeRouteReducer = () => {
    return combineReducers({
        home
    })
}

export default makeRouteReducer;
