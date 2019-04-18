import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import {thunkFunction} from './redux/action';

class App extends Component {
 
  componentDidMount(){
    this.props.dispatch(thunkFunction());
    
  }

  render() {
    return (
      <div className="App"> 
        {this.props.loading && <h1>Loading....</h1>}
        {this.props.error && <h1 className="error">Some Error occured. Try after sometime</h1>}
        {this.props.data.items && <div className="repository__container">
        {this.props.data.items.map((e,i) => {
          return(
            <div  className="repository_individual_container" key={i} >
              <div><b>Repository Name:</b>&nbsp;{e.name},&nbsp;</div> 
              <div><h3>Repository Image:</h3> <img  src= {e.owner.avatar_url} alt="imageprofile" width="100" height="100"/></div>
              <div className="forks"><b>Forks:</b><span>{e.forks}</span></div>
              <div className="open_issues"><b>No of open issues:</b>{e.open_issues}</div>
              <div className="rep_description"><b>Repository Descriptions:</b>{e.description}</div>
              <div><button className="button"><a href={e.html_url}>View profile</a></button></div>
            </div>
          )
        })}
        </div>}
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    data : store.thunkReducer.data,
    loading : store.LoaderReducer.loading,
    error : store.thunkReducer.error
  }
};
export default connect(mapStateToProps)(App);
