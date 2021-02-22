
import './App.css';
import CartContainer from './components/CartContainer';
import Navbar from './components/Navbar';
import cartItems from "./cart-items";

function App() {
  return (
    <>
      <Navbar />
      <CartContainer cart={cartItems} />
    </>
  );
}

export default App;
