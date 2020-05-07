import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import { Icon, Button } from '@material-ui/core';
import {connect} from 'react-redux';
import {deleteCard} from '../Actions';


class ListCard extends Component {

    deleteCardHandler = (event) => {
        alert('delete');
        const {dispatch, listId, cardId} = this.props;
        dispatch(deleteCard(listId, cardId));
    }

    render() {
        return (
            <div>
                <Card style={styles.cardContainer}>
                    <CardContent>
                        <Typography gutterBottom>
                            {this.props.text}
                        </Typography>
                        <CardActions style={styles.button}>
                            <Button onClick={this.deleteCardHandler} size="small"><Icon>delete</Icon></Button>
                        </CardActions>
                    </CardContent>
                </Card>
            </div>
        );
    }
}

const styles = {
    cardContainer:{
        marginBottom: 10,
    },
    button:{
        marginLeft: 110,
    }
}

export default connect()(ListCard);