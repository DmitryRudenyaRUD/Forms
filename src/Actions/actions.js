import C from '../constants';

export const actionInputValue = (id, text) => {

    switch (id) {
        case 1:
            return ({
                type: C.ENTER_INPUT_NUMBER,
                payload: text
            });
        case 2:
            return ({
                type: C.ENTER_INPUT_CODE,
                payload: text
            });
        default:
            return
    }
};

export const actionSubmit = (id, text) => {
    switch (id) {
        case 1:
            return ({
                type: C.SUBMIT_NUMBER,
                payload: text
            });
        case 2:
            return ({
                type: C.SUBMIT_CODE,
                payload: text
            });
        default:
            return
    }
};


