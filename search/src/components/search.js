import React from 'react';

export default class Search extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      value: '',
      list: '',
      messageLinear: '',
      messageBinary: ''
    };
  }

  handleSubmit(e){
    e.preventDefault();
    let value = this.value.value.toString();
    let list = this.list.value.split(' ');
    let messageLinear = linearSearch(list, value);
    let messageBinary = binarySearch(list, value);
    this.setState({
      value, list, messageLinear, messageBinary
    });
  }
  
  render(){
    return (
      <main>
        <h1>Linear and Binary Search Comparison</h1>

        <p>{this.state.messageLinear? `Linear: ${this.state.messageLinear}`: ''}</p>
        <p>{this.state.messageLinear? `Binary: ${this.state.messageBinary}`: ''}</p>

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

function binarySearch(array, value, start, end, count=1){
  start= start === undefined ? 0: start;
  end = end === undefined ? array.length-1 : end;
  if(start>end){
    return `item not found, count: ${count}`;;
  }

  let mid= Math.floor((start + end) / 2);
  let item = array[mid];

  if(item === value){
    return `index: ${mid}, count: ${count}`;
  }
  else if(item < value){
    return binarySearch(array, value, mid+1, end, count+1);
  }
  else if(item> value){
    return binarySearch(array, value, start, mid - 1, count+1);
  }
}