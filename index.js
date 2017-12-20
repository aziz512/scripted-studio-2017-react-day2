/*global React*/
/*global ReactDOM*/

//Part Two: Add a delete button to each list element.

function List(props) {
    //TODO: Create list from props.
    return (<ul>
    {
      props.items.map(function(x, i){return <li key={i}>{x} <button onClick={() => {props.delete(i)}}>Delete</button></li>})
    }
    </ul>);
};

var App = React.createClass({
  getInitialState: function() {
    //TODO: Set the initial state.
    return {
        current:'',
        items:[]
    };
  },
  onChange: function(event) {
    this.setState({...this.state, current:event.target.value});
  },
  onSubmit: function(event) {
    event.nativeEvent.preventDefault();
    let items = [...this.state.items, this.state.current];
    this.setState({
      current:'',
      items:[...items]
    });
    console.log(this.state);
  },
  onDelete: function(index){
    this.setState({
      ...this.state,
      items:[
        ...this.state.items.filter((x, i) => { return i != index })
      ]
    });
  },
  render: function() {
    //TODO: Add event handlers to input and button.
    return (
      <div>
        <h2>Todo List</h2>
        <form className="App">
          <input onChange={this.onChange} value={this.state.current}/>
          <button onClick={this.onSubmit}>Add</button>
        </form>
        <List items={this.state.items} delete={this.onDelete}/>
      </div>
    );
  }
});

ReactDOM.render(
  <App/>,
  document.getElementById('container')
);