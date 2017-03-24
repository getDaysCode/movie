/**
 * Created by Maple on 17/3/23.
 */
import * as ActionTypes from '../../constants/ActionTypes';
import { Map, List, fromJS } from 'immutable';

const initialSelectedDefaultQuery = Map({
    type: '全部',
    country: '全部'
});

export const selectedDefaultQuery = (state = initialSelectedDefaultQuery, action) => {
    switch (action.type) {
        case ActionTypes.SELECT_DEFAULT_QUERY:
            return state.set(action.key, action.value);
            break;
        default:
            return state;
    }
};

// const fetchStatus = ($state = Map({
//                       isFetching: false,
//                       $items: List()
//                   }), action) => {
//     switch (action.type) {
//         case ActionTypes.REQUEST_MOVIE_DATA:
//             return $state.set('isFetching', true);
//             break;
//         case ActionTypes.RECEIVE_MOVIE_DATA:
//             return $state
//                 .set('isFetching',false)
//                 .set('items', fromJS(action.json));
//             break;
//         default:
//             return $state;
//     }
// };

export const movieData = (state = Map({isFetching: false}), action) => {
    switch (action.type) {
        case ActionTypes.REQUEST_MOVIE_DATA:
            return state.set('isFetching', true);
            break;
        case ActionTypes.RECEIVE_MOVIE_DATA:
            return state
                .set('isFetching', false)
                .set('$items', fromJS(action.json));

            break;
        default:
            return state;
    }
};