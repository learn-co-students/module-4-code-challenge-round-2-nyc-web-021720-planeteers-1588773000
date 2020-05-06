import React from 'react';

class Planeteer extends React.Component {

  // set up state to toggle the bio feature 
  // make toggle function 
  // use conditional 

  state = {
    toggled: false
  }

  handleToggled = () => {
    this.setState({
      toggled: !this.state.toggled
    })
  }

  render() {
    // console.log("props check 2", this.props.planeteer)


    return (
      <li className="cards__item">
        <div className="card" onClick={this.handleToggled}>
          <img src={this.props.planeteer.pictureUrl} alt={this.props.planeteer.name} className="card__image" />
          <div className="card__content">
            <div className="card__title">{this.props.planeteer.name}</div>
            <p className="card__text">{this.state.toggled ? this.props.planeteer.quote : this.props.planeteer.bio}</p>
            <div className="card__detail">
              <p>{this.props.planeteer.twitter}</p>
              <p>{this.props.planeteer.fromUSA ? "USA-Based" : "Working overseas"}</p>
            </div>
          </div>
        </div>
      </li>
    );
  }

}

export default Planeteer;
