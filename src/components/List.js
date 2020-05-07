import React, {Component} from 'react';
import ListCard from './card';
import AddButton from './addButton';

class List extends Component {
    render() {
        return(
            <div style={styles.cardContainer}>
                <h4>{this.props.title}</h4>
                {this.props.cards.map(card => <ListCard key={card.id} listId={this.props.listId} cardId={card.id} text={card.text}/>)}
                <AddButton listId={this.props.listId}/>
            </div>
        )
    }
}

const styles = {
    cardContainer:{
      backgroundColor: '#d3d3d3',
      borderRadius: 4,
      width: 200,
      padding: 10,
      margin: 10,
      height: '100%',
    },
}

export default List;