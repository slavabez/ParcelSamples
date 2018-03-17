import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  render(){
    return <div>I'm the React App </div>
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

