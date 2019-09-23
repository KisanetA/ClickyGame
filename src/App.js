import React, { Component } from "react";
import PictureCard from "./components/PictureCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends
  };



  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
  
        <Title>
          <div className="jumbotron jumbotron-fluid">
            <div className="container">
              <h1 className="display-4">Clicky Game!</h1>
              <p className="lead">Click on an image to earn points, but don't click on any more than once!</p>
            </div>
          </div>
        </Title>

        {this.state.friends.map(friend => (
          <PictureCard
            id={friend.id}
            image={friend.image}

          />
        ))}

      </Wrapper>

    )
  }
}
export default App;
