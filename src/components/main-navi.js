import { Link } from 'react-router-dom';

import classes from './main-navi.module.css';

function MainNavi() {
    return (
        <header className={classes.header}>
          <nav>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/products'>Products</Link>
              </li>
            </ul>
          </nav>
        </header>
      );
    };

export default MainNavi;