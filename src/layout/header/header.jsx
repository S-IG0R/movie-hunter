import React from 'react';
import { Logo } from '../../components/Logo/Logo';

class Header extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <header className="flex justify-center bg-[#101010] py-10 bg">
        <Logo />
      </header>
    );
  }
}

export { Header };
