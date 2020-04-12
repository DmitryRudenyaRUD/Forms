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
    return arrayText.reduce((str, item, i) =>
         i === 3 ? str + ' (' + item :
            i === 4 ? str + item + ') ' :
                i === 7 || i === 9 ? str + item + '-' :
                    i > 11 ? str : str + item, '+')
};

