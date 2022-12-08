import React, { Component } from 'react'
import Loading from '../Loading';
import PersonCard from '../PersonCard';

class PersonInfo extends Component {
  state = {
    loading: true,
    person: []
  }

  async componentDidMount() {
    const url = 'https://api.randomuser.me/';
    const res = await fetch(url);
    const data = await res.json();
    this.setState({ 
      person: data.results,
      loading: false,
    });
  }
  
  shouldComponentUpdate(_nextProps, nextState) {
    const age = 50;
    if (nextState.person[0].dob.age < age) return true;
    return false;
  }

  getUserElement = (user) => {
    return {
      name: `${user.name.first} ${user.name.last}`,
      email: user.email,
      age: user.dob.age,
      image: user.picture.thumbnail,
    };
  }

  render() {
    const { loading, person } = this.state;
    if (loading) return <Loading />;

    return (
      <PersonCard person={this.getUserElement(person[0])} />
    )
  }
}

export default PersonInfo;