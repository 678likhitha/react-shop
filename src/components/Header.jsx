import React, { useEffect } from 'react'
import { Container, FormControl, Navbar,Nav, Dropdown, Badge, Link,Button } from 'react-bootstrap'
import { AiFillDelete } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import { CartState } from '../Context';
const Header = () => {
  const {state:{
    cart
  }, dispatch} = CartState();
  useEffect(()=>{
  },[cart]);
  const decrimentHandler = (prod) => {
    if(prod.qty>0) {
      dispatch({type:'CHANGE_QTYDC', payload:prod})
    }
  }
  return (
    <div>
        <Navbar>
            <Container>
                <Navbar.Brand  bg="dark" variant="dark" style={{height:80}}>
                   <a href='/'>Shopping cart</a> 
                </Navbar.Brand>
                <Navbar.Text className='search'>
                    <FormControl
                    style={{width:500}}
                    placeholder='Search For a Product'
                    className="m-auto"
                    >
                    </FormControl>
                </Navbar.Text>
                <Nav>
          <Dropdown alignRight>
            <Dropdown.Toggle variant="success">
                <FaShoppingCart color='white' fontSize='25px' />
              <Badge color='black'>{cart.length}</Badge>
            </Dropdown.Toggle>

            <Dropdown.Menu style={{ minWidth: 370 }}>
                <Dropdown.Menu style={{ minWidth: 370 }}>
              {cart.length > 0 ? (
                <>
                  {cart.map((prod) => (
                    <span className="cartitem" key={prod.id}>

                      <div className="cartItemDetail">
                        <p>            {prod.packingDescription}
</p>
                      <span>₹ {prod.grossPrice}</span>
                     
                      </div>
                      <AiFillDelete
                        fontSize="20px"
                        style={{ cursor: "pointer" }}
                        onClick={() =>
                          dispatch({
                            type: "REMOVE_CART",
                            payload: prod,
                          })
                        }
                      />
                    </span>
                  ))}
                </>
              ) : (
                <span style={{ padding: 10 }}>Cart is Empty!</span>
              )}
            </Dropdown.Menu>
                </Dropdown.Menu>
</Dropdown>
</Nav>
            </Container>
        </Navbar>
    </div>
  )
}

export default Header