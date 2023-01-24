import React from 'react';
import s from './header.module.css';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div className={s.header}>
      <nav>
        <ul>
          <li><Link to='/'>Создать Тест</Link></li>
          <li><Link to='/test'>Пройти Тест</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;