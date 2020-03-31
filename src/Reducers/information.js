import C from '../constants';

const initialState = {
    title: 'Please log in to continue working',
    hintForNumber: 'Enter telephone number in the format +XXX (XX) XXXXXXX',
    hintForCode: ''
};

export const information = (state = initialState, action) => {

    switch (action.type) {

        case C.INVALID_NUMBER:
            return ({
                ...state,
                hintForNumber: 'Enter the correct telephone number'
            });

        case C.SENDING_NUMBER:
            return ({
                ...state,
                hintForNumber: 'Please wait. Sending a number to the server...'
            });

        case C.SENDING_ERROR:
            return({
                ...state,
                hintForNumber: 'No connection to the server'
            });

        case C.NUMBER_SENT:

            return({
                ...state,
                hintForNumber: '',
                hintForCode: 'Enter the code sent by SMS(1234)',
                SMS: action.payload
            });

        case C.SUBMIT_CODE:
           return +action.payload === state.SMS ?
               { ...state, authorization: true} :
               {
                   ...state,
                   hintForCode: 'Invalid code'
               };

        default:
            return state
    }
};