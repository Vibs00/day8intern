import React from 'react';
//import {render} from "react-dom"

class List extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
    return(
        <li onClick={(e)=>this.setFlag(value)} className={value.styl}>
            {value.name}
        </li>);
    }

}

export default List;


/*
import React from 'react';
//import './../node_modules/bootstrap/dist/css/bootstrap.css'
import './paper.css';
import './App.css';
//import List from './Connect.js'

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {};
    this.state.detail = [];
    this.state.i = {}; //right now string will be changed to object
    this.state.detail.styl = "";
    this.getValue = this.getValue.bind(this);
    this.setValue = this.setValue.bind(this);
    //this.printValue = this.printValue.bind(this);
  }

  getValue(event){
    let k = this.state.i;
    k.name = event.target.value;
    k.flag = false;
    k.styl = "paper-btn btn-block";
    this.setState({
      i : k
    });
  }

  setValue(event){
    if(this.state.i.name.trim())
    {
        let l = this.state.detail;
      l.push(this.state.i);
      this.setState({
        detail : l,
        i : {name:"", flag:false, styl:"paper-btn btn-block"}
      });
    }
  }

  printValue = () =>{
    let arr = [];
    arr = this.state.detail.map((value) =>{
     return (
       <List detail={this.state.detail} value={value} setFlag={
          <Status value={value} detial={this.state.detail}></Status>
        }></List>)
    });
      return arr;       
    }
  
    keyPress = (e) =>{
      if(e.key == 'Enter'){
        this.setValue();
      }
    }
  
    render(){
      return (
        <div>
          <h1 className="row flex-center">Dynamic List</h1>
          <h4 className="row flex-center">Number of items: {this.state.detail.length}</h4>
          <input type="text" className="row flex-center" onChange={this.getValue} onKeyDown={this.keyPress} value={this.state.i.name}></input>
          <button className="row flex-center" onClick={this.setValue}>CLICK</button>
          <ul>
            {this.printValue()}
          </ul>
        </div>
      );
    }
  }
  
  class List extends React.Component{
  
    constructor(props){
        super(props);
    }
  
    render(){
    return(
      <div>{console.log(this.props.setFlag)}
        <li onClick={(e)=>this.props.setFlag} className={this.props.value.styl}>
            {this.props.value.name}
        </li></div>);
    }
  
  }
  
  class Status extends React.Component{
    constructor(props){
      super(props);
      this.state.detail = this.props.detail;
      this.setFlag = this.setFlag.bind(this);
      //this.val = this.props.val;
    }
  
    setFlag(val){
      let ind = this.state.detail.indexOf(this.props.val);
      let p = this.state.detail;
      p[ind].flag = !this.state.detail[ind].flag;
      this.setState({
        detail : p
      });
      this.setStatus(ind);
    }
  
    setStatus = (ind) =>{
      let h = this.state.detail;
      if(this.state.detail[ind].flag == true){
        h[ind].styl = "paper-btn btn-block alert-success";
        this.setState({
          detail : h
        })
     }
      else{
        h[ind].styl = "paper-btn btn-block";
        this.setState({
          detail : h
        })
      }
    }
  
    render(){
      return(
        <div>
          {console.log(this.state.detail)}
        {this.state.detail}
        </div>
      );
    }
  } 
  
  export default App;
*/