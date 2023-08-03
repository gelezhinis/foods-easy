import HeaderCartButton from './HeaderCartButton';

import { GiMeal } from 'react-icons/gi';
import tableImage from '../../assets/table.webp';
import classes from './Header.module.css';

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.headerTitle}>
          <h1>F</h1>
          <GiMeal size={27} />
          <h1>odsEasy</h1>
        </div>
        <HeaderCartButton onOpenCart={props.onShowCartCard} />
      </header>
      <div className={classes.mainImage}>
        <img src={tableImage} alt="food-table" />
      </div>
    </>
  );
};

export default Header;
