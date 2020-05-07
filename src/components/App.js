import React, {Component} from 'react';
import {connect} from 'react-redux';
//Components
import List from './List';
import AddButton from './addButton';

//styles
import '../styles/App.css';



class App extends Component {
  render(){
    const {lists} = this.props;
    return (
      <div className="App">
        <div className='Header'>Trello Clone</div>
        <div style={styles.listContainer}>
          {lists.map(lists => <List listId={lists.id} key={lists.id} title={lists.title} cards={lists.cards} />)}
          <div style={styles.button}>
            <AddButton list />
          </div>
        </div>        
      </div>
    );
  }
}

const styles = {
  listContainer: {
    display: 'flex',
    flexDirection: 'row'
  },
  button: {
    width: 250,
    margin: 10,
  }
}
const mapStateToProps = state =>({
  lists: state.lists,
})

export default connect(mapStateToProps)(App);
