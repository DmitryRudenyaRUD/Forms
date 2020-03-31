import {takeEvery, put, call} from 'redux-saga/effects';
import C from './constants';

export function* submitAsync() {
    yield takeEvery(C.SUBMIT_NUMBER, handlerSubmitNumber);
}

function* handlerSubmitNumber(action) {
    if(!action.payload || action.payload.length < 17) {
        yield put({type: C.INVALID_NUMBER})
    } else {

        try {
            yield put({type: C.SENDING_NUMBER});
            const data = yield call(() => {
                    return (
                        fetch('http://www.mocky.io/v2/5e8264c52f00000d002fbc0e?mocky-delay=2000ms',)
                        .then(response => response.json())
                    )
                }
            );

            yield put({
                type: C.NUMBER_SENT,
                payload: data.code
            })
        } catch {
            yield put({type: C.SENDING_ERROR})
        }
    }
}
