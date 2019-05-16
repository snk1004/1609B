import React from 'react';
import './App.css';
import { inject, observer } from 'mobx-react';

// 获取根组件注入的数据，如果有多个，把模块的名字追加在后面
@inject('count', 'index')
@observer
class App extends React.Component{
  render(){
    console.log('this.props...', this.props);
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <button onClick={()=>this.props.count.autoAdd()}>+</button>
          <p>{this.props.count.count}</p>
          <button>-</button>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}


export default App;