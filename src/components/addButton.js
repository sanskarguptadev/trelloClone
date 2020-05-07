import React, { Component } from 'react';
import { Icon, Button } from '@material-ui/core';
import TextareaAutosize from 'react-textarea-autosize';
import Card from '@material-ui/core/Card';
import {connect} from 'react-redux';
import {addList, addCard} from '../Actions';

class AddButton extends Component{
    state = {
        open : false,
        text: '',
    }

    openForm = () => {
        this.setState({
            open: true,
        })
    }

    closeForm = (event) => {
        this.setState({
            open: false,
            text: '',
        })
    }

    handleInputChange = (event) => {
        this.setState({
            text: event.target.value,
        })
    }

    handleAddList = () => {
        const {dispatch} = this.props;
        const {text} = this.state;
        if(text){
            dispatch(addList(text));
        }
        return;
    }

    handleAddCard = () => {
        const {dispatch, listId} = this.props;
        const {text} = this.state;
        if(text){
            dispatch(addCard(listId,text));
        }
        return;
    }

    renderAddButton = () =>{
        const {list} = this.props;
        const buttonText = list? 'Add another list': 'Add another card';
        const opacity = list ? 1 : 0.5;
        const color = list ? 'white':'inherit';
        const backgroud = list?'rgba(0,0,0,0.15)': "inherit";
        return(
            <div
            onClick={this.openForm}
            style={{...styles.button ,opacity: opacity, color: color, background: backgroud}}>
                <Icon>add</Icon>
                <p>{buttonText}</p>
            </div>
        )
    }

    renderForm = () => {
        const {list} = this.props;
        const placeholder = list? 'Enter list title':'Enter title for this card';
        const button = list? 'Add list': 'Add card';

        return (
            <div>
                <Card style={{
                    overflow: 'visible',
                    minHeight: 60,
                    minwidth: 272,
                    padding: '6px 8px 2px'
                }}>
                    <TextareaAutosize 
                    placeholder={placeholder}
                    onBlur={this.closeForm}
                    autoFocus
                    value={this.state.text}
                    onChange={this.handleInputChange}
                    style={{
                        resize: 'none',
                        width: '100%',
                        outline: 'none',
                        border:'none',
                    }}/>
                </Card>
                <div style={styles.formButton}>
                    <Button 
                    onMouseDown= {list?this.handleAddList: this.handleAddCard}
                    variant='contained' style={{color: 'white', background: '#32CD32'}}>{button}</Button>
                    <Icon style={{marginLeft: 0, cursor: 'pointer'}}>close</Icon>
                </div>
            </div>
        )
    }
    render() {
        return this.state.open?this.renderForm():this.renderAddButton();
    }
}

const styles = {
    button : {
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        borderRadius: 3,
        height: 36,
        paddingLeft: 10,
    },
    formButton: {
        display: 'flex',
        alignItems: 'center',
        marginTop: 7,
    }
}


export default connect()(AddButton);