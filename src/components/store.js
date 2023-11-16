import {createStore} from 'redux'
import rootReducer from './reducers' // will create this next

const store = createStore(rootReducer)

export default store;