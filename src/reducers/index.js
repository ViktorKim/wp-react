import { combineReducers } from 'redux';

import navMenuReducer from './navMenuReducer';

/**
 * Reducer
 *
 * @param state|Object
 *
 * @return state|Object
 */

export default combineReducers({
    navMenuReducer,
});
