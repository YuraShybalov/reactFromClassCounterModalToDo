import React from 'react';

import css from './Header.module.css';

const Header = ({ showModal }) => {
  return (
    <header className={css.headerWraper}>
      <p>Navbar</p>
      <button onClick={showModal}>Open Modal</button>
    </header>
  );
};

export default Header;
