import { createStore} from 'redux';
import { Reducers } from '../reducers/Reducers';
import { Reducers2 } from '../reducers/Reducers2';
import { AddressReducers} from '../reducers/AddressReducers';
import { OrderReducers} from '../reducers/OrderReducers';
import { combineReducers } from 'redux';
const routeReducer = combineReducers({ Reducers, Reducers2, AddressReducers, OrderReducers});
const store = createStore(routeReducer);
export default store;