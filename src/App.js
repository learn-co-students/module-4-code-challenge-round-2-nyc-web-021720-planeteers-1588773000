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
     searched: []
   }

   componentDidMount(){
     fetch("http://localhost:4000/planeteers")
     .then(resp => resp.json())
     .then(data => {
       this.setState({
         planeteersIndex: data,
         searched: data
       })
     })
   }

  handleSearch = (event) => {
    let lcBio = this.state.planeteersIndex.map(p => p.bio === p.bio.toLowerCase())
    // console.log('kdf vl', lcBio)

    const filtered = this.state.planeteersIndex.filter((p) => p.bio.includes(event.target.value))
    // const filtered = this.state.planeteersIndex.filter((p) => p.bio.includes(event.target.value.toLowerCase()))

    this.setState({
      searched: filtered
    })
  }

// handleSearch = (event) => {
//   const filtered = this.state.planeteersIndex.filter((p) => p.bio.includes(event.target.value.toLowerCase))
//   this.setState({
//     searched: filtered
//   })
// }

  render(){
    // console.log("fetch check ", this.state.planeteersIndex)
    return (
      <div>
        <Header />
        <SearchBar handleSearch={this.handleSearch}/>
        <RandomButton/>
        <PlaneteersContainer planeteers={this.state.searched} />
      </div>
    );
  }

}

export default App;
