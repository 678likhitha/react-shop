import React, { useContext, useEffect } from 'react'
import {Card, Button, Row, Col} from 'react-bootstrap';
import { CartState } from './Context';
import './App.css'
const SingleProduct = ({data}) => {
  const {state:{
    cart
  }, dispatch} = CartState();
  useEffect(()=>{
  },[data, cart]);
 const submitCard = (item) => {
  console.log("itrm","item")
dispatch({type:'ADD_TO_CART', payload:item})
  }
  const showCardToggle = (product) => {
    var toggle = false;
    if(cart.length>0) {
      cart.forEach(element => {
       if(element.bpCatalogNumber == product.bpCatalogNumber) {
        toggle = true;
       } else {
        toggle = false;
       }
      });
    }
  return toggle
  }
  return (
        <div className="subTotalCards" >
                <Col>
                <Card  class="productactual">
        <Card.Body>
          <Card.Text>
            {data.packingDescription}
          </Card.Text>
        <Card.Text>
          {data.colorDescription}
        </Card.Text>
        <Card.Text>
          {data.grossPrice} ₹
        </Card.Text>
     {cart.length > 0 && showCardToggle(data) ? 
     <Button variant="danger" onClick={() => dispatch({type:'REMOVE_CART', payload:data})}>
     Remove From Cart
   </Button>
   : <Button  onClick={() => submitCard(data)}>
   Add To Cart
 </Button>
     }
      </Card.Body>
      </Card>
                </Col>
              
    </div>
  )
}

export default SingleProduct