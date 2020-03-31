import C from '../constants';

const initialState = {
    inputNumber: '+',
    inputCode: '',
    isHidden: true,
    isDisabled: false
};

export const textInputs = (state = initialState, action) => {

    switch (action.type) {

        case C.ENTER_INPUT_NUMBER:
            const arrayText = action.payload.match(/\d/g);

            if(!arrayText) {
                return {
                    ...state,
                    inputNumber: '+'
                }
            } else {
                return {
                    ...state,
                    inputNumber: handler(arrayText)
                }
            }

        case C.SENDING_NUMBER:
            return ({
                ...state,
                isDisabled: true
            });

        case C.NUMBER_SENT:
            return ({
                ...state,
                isHidden: false,
                isDisabled: true
            });

        case C.ENTER_INPUT_CODE:
            if(isNaN(action.payload)) {
                return state
            } else if(action.payload.length > 4) {
                return state
            } else {
                return {
                    ...state,
                    inputCode: action.payload
                }
            }

        default:
            return state
    }
};

const handler = (arrayText) => {
    const text = arrayText.reduce((str, item) => {
        str += item;
        return str
    });

    if(text.length < 4) {
        return `+${text}`
    } else if(text.length > 3 && text.length < 6) {
        return `+${text.substr(0, 3)} (${text.substr(3, 2)})`
    } else if(text.length > 5) {
        return `+${text.substr(0, 3)} (${text.substr(3, 2)}) ${text.substr(5, 7)}`
    }
};

