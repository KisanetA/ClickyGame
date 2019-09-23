import React, { Component } from "react";
import PictureCard from "./components/PictureCard";
import Wrapper from "./components/Wrapper";
// import Title from "./components/Title";
import friends from "./friends.json";
import Jumbotron from "./components/jumbotron";
import Navbar from "./components/Navbar"

class App extends Component {


  // Setting this.state.friends to the friends json array
  state = {
    friends,
    score:0,
    topscore:0
  };

  playGame = () => {
    if (this.state.score > this.state.topscore) {
      this.setState({topscore: this.state.score}, function() {
        console.log(this.state.topscore);
      });
    }
    this.state.friends.forEach(PictureCard=> {
      PictureCard.count = 0;
    });
    this.setState({score: 0});
    return true;
  }

  clickCount = id => {
    this.state.friends.find((o, i) => {
      if (o.id === id) {
        if(friends[i].count === 0){
          friends[i].count = friends[i].count + 1;
          this.setState({score : this.state.score + 1}, function(){
            console.log(this.state.score);
          });
          this.state.friends.sort(() => Math.random() - 0.5)
          return true; 
        } else {
          this.playGame();
        }
      }
    });
  }
 // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      
  <div>
        <Navbar
        score={this.state.score} topscore={this.state.topscore}>
        </Navbar>
        <Jumbotron></Jumbotron>
        <Wrapper>

        {this.state.friends.map(friend => (
          <PictureCard
            clickCount={this.clickCount}
            id={friend.id}            
            image={friend.image}
          />
        ))}
      </Wrapper>
</div>
    )
  }
}
export default App;
