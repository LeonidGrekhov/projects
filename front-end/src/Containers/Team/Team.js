import React, { Component } from 'react';
import Generics from '../../Generics';
import '../Team/Team.css';
import members from '../About/members';

class Team extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSideBar: false,
      profiles: members.map(member => require('../About/' + member))
    };
    this.teamCards = this.teamCards.bind(this);
  }
  teamCards = () => (
    <>
      {members.map((member, i) => {
        let name = member;
        let profile = this.state.profiles[i];
        return (
          <div className="col-xl-3 col-md-6 mb-4" key={i}>
            <div className="card border-0 ">
              <img
                src={require(`./${profile.picture}`)}
                className="card-img-top cover"
                height="250"
                wdith="200"
                alt="..."
              />
              <div className="card-body text-center">
                <h5 className="card-title mb-0">{profile.name}</h5>
                <div className="card-text text-black-50">{profile.role}</div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
  render() {
    return (
      <div>
        <Generics.NavBar />

        <Generics.Header />
        <Generics.Body
          noSideBar={!this.state.showSideBar}
          content={
            <div className="container-fluid h-100 main-body d-flex align-items-center justify-content-center">
              <div className="row justify-content-center p-4">
                <div className="big-text">Who is the team?</div>
                <p>
                  We are currently preparing to work with investors so we can
                  build the future together. Hold on tight while we prepare and
                  set up and we will update this page soon.
                </p>
                {this.teamCards()}
              </div>
            </div>
          }
        />
        <Generics.Footer />
      </div>
    );
  }
}
export default Team;
