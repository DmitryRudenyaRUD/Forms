import React from 'react';
import style from './Styles.module.scss';
import PropTypes from "prop-types";
import {Input} from './Components/Input';
import {Title} from './Components/Title';
import {useHistory} from 'react-router-dom';

export const App = (props) => {
    const {title, hintForNumber, hintForCode} = props.information;
    const {inputNumber, inputCode, isDisabled, isHidden} = props.textInputs;
    let history = useHistory();

    if(props.information.authorization) history.push('/homepage');


    return (
        <div className={style.App}>
            <Title title={title}/>
            <Input
                id={1}
                isDisabled={isDisabled}
                text={inputNumber}
                onChange={props.onChange}
                onSubmit={props.onSubmit}
            />
            <span>{hintForNumber}</span>
            <Input
                id={2}
                isHidden={isHidden}
                text={inputCode}
                onChange={props.onChange}
                onSubmit={props.onSubmit}
            />
            <span>{hintForCode}</span>
        </div>
    )
};

App.propTypes = {
    textInputs: PropTypes.object,
    information: PropTypes.object
};