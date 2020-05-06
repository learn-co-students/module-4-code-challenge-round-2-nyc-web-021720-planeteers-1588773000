import React from 'react';
import './App.css';

import Header from './Components/Header'
import RandomButton from './Components/RandomButton'
import PlaneteersContainer from './Components/PlaneteersContainer'
import SearchBar from './Components/SearchBar'

class App extends React.Component {
   // show all planeteers 

   state = {
     planeteersIndex: [],
     // come back to the when doing the search feature 
     
    //  searched: []
   }

   componentDidMount(){
     fetch("http://localhost:4000/planeteers")
     .then(resp => resp.json())
     .then(data => {
       this.setState({
         planeteersIndex: data,
        //  searched: data
       })
     })
   }

  render(){
    console.log("fetch check ", this.state.planeteersIndex)
    return (
      <div>
        <Header />
        <SearchBar />
        <RandomButton/>
        <PlaneteersContainer planeteers={this.state.planeteersIndex} />
      </div>
    );
  }

}

export default App;
