import SystemTime from './SystemTime';
import React from 'react';
import './navbar.css';
import { Link } from "react-router-dom";

function Navbar(props) {
  const h = (<header className="Navbar-header">

    <div className="Navbar-clock" >
      <Clock />
      <div>
        <li>
          <Link to="/">Dogs</Link>
        </li>
        <li>
          <Link to="/cats">Cats</Link>
        </li>
        <li>
          <Link to="/sheeps">Sheeps</Link>
        </li>
        <li>
          <Link to="/goats">Goats</Link>
        </li>
      </div>
    </div>

  </header>)
  return h;
};

class Clock extends React.Component {

  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  //lifecycle start
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  //lifecycle end
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        {this.state.date.toLocaleTimeString()}
      </div>
    );
  }
}


export default Navbar;
