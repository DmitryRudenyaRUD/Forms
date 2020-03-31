import {connect} from 'react-redux';
import {App} from './App';
import {Homepage} from './Components/Homepage';
import {
    actionInputValue,
    actionSubmit
} from './Actions/actions';

export const ContainerApp = connect(
    state => ({
        textInputs: state.textInputs,
        information:  state.information
    }),
    dispatch => ({
        onChange(id, text) {
            dispatch(actionInputValue(id, text))
        },
        onSubmit(id, text) {
            dispatch(actionSubmit(id, text))
        }
    })
)(App);

export const ContainerHomepage = connect(
    state => ({
        information:  state.information
    })
)(Homepage);