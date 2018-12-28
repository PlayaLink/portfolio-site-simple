import React from 'react'
import { Link } from 'react-router-dom';
import './Home.scss';

class Home extends React.Component {
  constructor (props){
    super(props);
  }
  render () {
    return (
      <div>
        <div className="header">Jordan England-Nelson</div>
        
        <Link to={process.env.PUBLIC_URL + '/timeline'}>Timeline</Link>
      </div>
    )
  }
}

export default Home


