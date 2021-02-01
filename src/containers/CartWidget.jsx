import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import CartIcon from '../img/favorite-cart.png';

const CartWidgetComponent = () => {
    return(
    <>
      <img src={CartIcon} className="CartIcon" alt="logo" />
      </>
    );
}


export default CartWidgetComponent;