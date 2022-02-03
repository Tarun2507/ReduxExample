
import './App.css';
import {useDispatch,useSelector} from 'react-redux'
import { cartActions } from './store/cart';
function App() {
  const dispatch = useDispatch()
  const cart = useSelector((state) => state.cart.items)
  function getcartItems() {
    console.log(cart)
  }
  function addToCart() {
    dispatch(cartActions.addToCart('Apple'))
  }
  return (
    <>
    <button onClick={addToCart}> Add to cart</button>
   <button onClick={getcartItems}>Click to get</button>
   </>
  )
}

export default App;
