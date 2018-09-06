import React from 'react';

export default class Search extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      value: '',
      list: '',
      message: ''
    };
  }

  handleSubmit(e){
    e.preventDefault();
    let value = this.value.value.toString();
    let list = this.list.value.split(' ');
    let message = linearSearch(list, value);
    this.setState({
      value, list, message
    });
  }
  
  render(){
    return (
      <main>
        <h1>Linear Search</h1>

        <p>{this.state.message}</p>

        <form onSubmit={(e) => this.handleSubmit(e)}>
          <label htmlFor="value">Value: </label>
          <input ref={input => this.value = input}type="text" id="value" name="value"/>
          
          <label htmlFor='list'>List:</label> 
          <textarea ref={input => this.list = input} rows="4" cols="50" name='list' id='list'>

          </textarea>
          <br />
          <button>Submit</button>
        </form>
      </main>
    );
  }
}

function linearSearch(array, value) {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    count++;
    if (array[i] === value) {
      return `index: ${i}, count: ${count}`;
    }
  }
  return `item not found, count: ${count}`;
}