/**
 * Created by Maple on 17/3/21.
 */
import { combineReducers } from 'redux-immutable';
import { selectedDefaultQuery, movieData} from './selector';

// 这种写法有一个前提，就是 State 的属性名必须与子 Reducer 同名。
const rootReducer = combineReducers({
    selectedDefaultQuery,
    movieData,
});

export default rootReducer;