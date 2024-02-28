import { useState } from 'react';
import './header.component.css';
import { MenuApp } from 'react-bootstrap-icons';

export function Header() {
  const [isActive, setIsActive] = useState(false);
  console.log(isActive);
  return (
    <header className={isActive ? 'active header' : 'header'}>
      <div className="header-wrap">
        <div className="logo">
          <span>Header</span>
        </div>
        <div className="menu-btn" onClick={() => setIsActive(!isActive)}>
          <MenuApp />
        </div>
      </div>
      <div className={isActive ? 'active invisible-wrap' : 'invisible-wrap'}>
        <span>Hello!</span>
      </div>
    </header>
  );
}
