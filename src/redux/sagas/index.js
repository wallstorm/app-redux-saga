import { all } from 'redux-saga/effects';

import search from './search';

export default function* rootSaga() {
    //se ejecutan todos los watchers
    yield all([
        search()
    ]);
}