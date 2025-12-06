import React from 'react';

class Page extends React.Component {
  render() {
    const { children } = this.props;
    return <div className="flex flex-col flex-1 mx-4">{children}</div>;
  }
}

export { Page };
