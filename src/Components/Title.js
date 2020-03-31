import React from 'react';
import style from '../Styles.module.scss';

export const Title = (props) => {
    const arrayLetters = props.title.split('') ;

    return <div className={style.title}>{

        arrayLetters.map( (item, ind) => (
            item === ' ' ? <span className={style.emptyLetter} key={ind}/>
            :
            <span
                key={ind}
                className={style[`letter${ind}`]}
            >{item}</span>
        ))
    }</div>
};