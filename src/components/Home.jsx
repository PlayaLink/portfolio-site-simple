import React from 'react'
import { Link } from 'react-router-dom';

class Home extends React.Component {
  constructor (props){
    super(props);
  }
  render () {
    return (
      <div>
        Jordan England-Nelson
        <Link to='/timeline'>Timeline</Link>
      </div>
    )
  }
}

export default Home


