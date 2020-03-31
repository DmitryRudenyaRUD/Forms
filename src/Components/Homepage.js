import React from 'react';
import {useHistory} from 'react-router-dom';

export const Homepage = (props) => {
    let history = useHistory();

    if(!props.information.authorization) {   // Чтобы не происходило перехода без авторизации
        history.push('/')
    }
    return (
        <div>
            <h1>Homepage</h1>
        </div>
    )
};