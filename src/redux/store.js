//El applyMiddlewares tomauna colección de middlewares, en este caso solo usaremos redux-saga
import { createStore, applyMiddleware } from 'redux';
//nos permite crear el middleware de saga para pasarselo a la applyMiddleware
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducers';
import rootSaga from './sagas';

const configureStore = () => {
    //creamos elmiddleware de saga
    const sagaMiddleware = createSagaMiddleware();
    return {
      ...createStore(rootReducer, applyMiddleware(sagaMiddleware)),
      runSaga: sagaMiddleware.run(rootSaga) //ejecutamos los sagas que hemos creado
    };
};

export default configureStore;