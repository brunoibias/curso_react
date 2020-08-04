import React from 'react';

export default class TodoForm extends React.Component {
    state = {
        inputValue: '',
    }

    onChangeInput(e) { // para poder editar o input

        this.setState({
            inputValue: e.target.value
        });
    }

    onClick(e) {
        const newList = this.state.inputValue
        this.props.onSaveList(newList)
        this.setState({
           
            inputValue: ''
        });
    }
    render() {
        const { inputValue } = this.state

        
        return (
            <React.Fragment>
                <div className='col s10'>
                    <input
                        value={inputValue}
                        onChange={e => this.onChangeInput(e)}
                    />
                </div>
                <div className='col s2'>
                    <button className="btn waves-effect waves-light" 
                    type="submit" name="action" onClick={e => this.onClick(e)}>
                        <i className="material-icons right">send</i>
                    </button>
                </div>
            </React.Fragment>
        )
    }
}