import React, { Component } from 'react';
import { graphql } from 'react-apollo'; // this is to bind apollo to react
import { getBooksQuery } from '../queries/queries';

// components
import BookDetails from './BookDetails';

class BookList extends Component {
  constructor(props){
    super(props);

    this.state = {
      selected: null
    }
  }
  //method
  displayBooks() {
      let data = this.props.data;
      if (data.loading) {
          return(<div>Loading books...</div>)
      } else {
          return data.books.map(book => {
              return(
                  <li key={book.id} onClick={() => this.setState({selected: book.id})}>{book.name}</li>
              )
          })
      }
  }

  render() {
    return (
      <div>
        <ul id='book-list'>
          {this.displayBooks()}
        </ul>
        <BookDetails bookId={this.state.selected} />
      </div>
    );
  }
}

export default graphql(getBooksQuery)(BookList); // binding query to component
