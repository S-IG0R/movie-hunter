import React from 'react';

class Footer extends React.Component {
  constructor() {
    super();
  }

  render() {
    return <footer className='flex bg-[#101010] align-center justify-center py-4' >
      <span>Copyright {new Date().getFullYear()}</span>
    </footer>;
  }
}

export { Footer };