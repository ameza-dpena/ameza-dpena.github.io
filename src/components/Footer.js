import React from 'react';
import config from '../../config';
export default function Footer() {
  return (
    <footer id="footer">
      <ul className="icons">
        {config.socialLinks.map(social => {
          const { style, icon, name, url } = social;
          return (
            <li key={url}>
              <a href={url} target="_blank" className={`icon ${style} ${icon}`}>
              </a>
              <span className="label"> {name}</span>
            </li>
          );
        })}
      </ul>
      <ul className="copyright" style={{fontSize: '0.6em'}}>
        <li>&copy; DIFEZ</li>
        <li>
          Design: <a href="http://html5up.net" target="_blank" >HTML5 UP</a>
        </li>
      </ul>
    </footer>
  );
}
