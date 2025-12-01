import React from 'react';
import styles from './header.module.css';

class Header extends React.Component {
  constructor() {
    super();
  }

  render() {
    return <header className={styles.header}></header>;
  }
}

export { Header };
