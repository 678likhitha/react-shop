import React, { useEffect, useState } from 'react'
import Filter from './Filter'
import { getProducts,getsubProducts,getProductsBySubId } from '../context/cardService';
import { Card, Row, Container ,Col}  from 'react-bootstrap';
import '../App.css'
import SingleProduct from '../SingleProduct';
const Home = () => {
  const [products, setProducts] = useState([]);
  const [subProducts, setSubProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [subAllprodcuts, setsubAllProducts]  = useState([]);
  useEffect(()=>{
    getProducts().then((res)=>{
setProducts(res.data.result);
    })
  },[subProducts]);
  const changeToggle = (item) => {
getsubProducts(item.categoryId).then((res)=>{
  setSubProducts(res.data.result);
})
  }
  const changeSubProducts = (item) => {
    getProductsBySubId(item.subCategoryId).then((res)=> {
      setAllProducts(res.data.result);
    })

  }
  const getProductsSubcards = (item) => {
    setsubAllProducts([]);
    setsubAllProducts(item.variants);
  }
  return (
    <>
    <div className='home'>
      <Filter/>
      <div className="productContainer">
      <div className="products">
     {products && products.map((item) => (
    <Card onClick={()=>{changeToggle(item)}} className='product' style={{cursor:'pointer'}} key={item.categoryId}>
        <Card.Img variant="top" src={item.categoryImageURL} alt={item.categoryName} className='product' style={{cursor:'pointer'}}  />
      </Card>
     ))}
    </div>
    <div className="products">
     {subProducts && subProducts.map((item) => (
    <Card onClick={()=>{changeSubProducts(item)}} className='product'>
        <Card.Img variant="top" src={item.subCategoryImageURL} alt={item.subCategoryName} className='product' />
      </Card>
     ))}
    </div>
    <Container>
    {allProducts.length>0&&allProducts.map((item) => (
                    <Row xs={1} md={4} className='g-4' key={item.categoryId}>
 <Col>
 <Card onClick={() => getProductsSubcards(item)}  >
<Card.Body>
<Card.Text>
{item?.itemDescription}
</Card.Text>
</Card.Body>
</Card>
 </Col>                    
      </Row>
    ))
    }
    </Container>
    <Container>
      {subAllprodcuts.length>0 && subAllprodcuts.map((item) => (
                            <Row xs={1} md={4} className='g-4' key={item.variantId}>
                                <SingleProduct data={item}/>                              
</Row>
      ))
    

      }
    </Container>
  
      </div>
      </div>     
   </>
  )
}

export default Home