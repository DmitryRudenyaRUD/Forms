import React from 'react';
import style from '../Styles.module.scss';

export class Input extends React.Component {
    constructor(props) {
        super(props);
        this.input = React.createRef();
    }

    componentDidMount(){
        this.input.current.focus()
    }
    componentDidUpdate() {
        this.input.current.focus();
    }

    render() {
        const {id, onChange, onSubmit, text} =this.props;

        return (
            <div className={style.inputContainer}>
                <form
                    onSubmit={e => {
                        e.preventDefault();
                        onSubmit(id, text)
                    }}
                >
                    <input
                        onChange={e => onChange(id, e.target.value)}
                        value={text}
                        ref={this.input}
                        className={style.input}
                        hidden={this.props.isHidden}
                        disabled={this.props.isDisabled}
                    />
                </form>
            </div>
        )
    }
}