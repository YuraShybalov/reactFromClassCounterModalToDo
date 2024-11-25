import React from 'react';

import css from './Header.module.css';

const Header = () => {
  return (
    <header className={css.headerWraper}>
      <p>Navbar</p>
      <button>Open Modal</button>
    </header>
  );
};

export default Header;
