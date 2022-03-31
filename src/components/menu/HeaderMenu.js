import classes from './HeaderMenu.module.css';
import Cart from './Cart';
import Profile from './Profile';

const HeaderMenu = (props)=>{
    return (<div>
        <Cart/>
        <Profile/>
    </div>);
};

export default HeaderMenu;