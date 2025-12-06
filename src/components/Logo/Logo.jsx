import React from 'react';
import logo from '../../images/logo.png'

class Logo extends React.Component {
  render() {
    return <img className='w-[150px]' src={logo} alt='movie hunter logo'></img>
  }
}

export { Logo };