import { createStore, applyMiddleware } from 'redux';
import { save, load } from "redux-localstorage-simple";
import reducer from '../reducer';

// const store = createStore(
//     reducer,
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

const createStoreMiddleware = applyMiddleware(save({todoapp: "todo-app"}))(createStore);

const store = createStoreMiddleware(
    reducer,
    //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    load({todoapp: "todo-app"})
)

export default store;
