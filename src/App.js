import { BrowserRouter,Route, } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Cart from "./components/Cart";

function App() {
  return (
    <BrowserRouter>
          <Header/>
          <Route path='/' exact> 
<Home/>
          </Route>
          <Route path='/cart' exact >
            <Cart/>
          </Route> 
    </BrowserRouter>
  );
}

export default App;
