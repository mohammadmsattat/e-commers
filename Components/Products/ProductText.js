import React, { useEffect } from 'react'
import { Row,Col } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { GetOneProduct } from '../../reduxtoolkit/requests/GetOneProduct'
import { useDispatch, useSelector } from 'react-redux'
import {GetOnecategory} from '../../reduxtoolkit/requests/GetOneCategory'


const ProductText = () => {
  const{id}=useParams()

  
  const dispatch=useDispatch();

  useEffect(()=>{
      dispatch(GetOneProduct(id))

  },[])

  

  const product=useSelector((state)=>state.OneProduct.Product)
  
  
  
  useEffect(()=>{
    if(product.category)
      dispatch(GetOnecategory(product.category))
  },[product])

 

const category=useSelector((state)=>state.Onecategory.category)


  


    return (
        <div>
      <Row className="mt-2">
        <div className="cat-text" style={{"font-size":"1.3em"}}>{product.title} :</div>
      </Row>
      <Row>
        <Col md="8">
          <div className="cat-title d-inline"
           style={{"font-size":"1.3em"}}>
          {product.description}<div className="cat-rate d-inline mx-3">4.5</div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md="8" className="mt-4">
          <div className="cat-text d-inline">الماركة :</div>
          <div className="barnd-text d-inline mx-1">{category.name} </div>
        </Col>
      </Row>
      <Row>
        <Col md="8" className="mt-1 d-flex">
        {
          product.availableColors?product.availableColors.map ((color)=>{
            return <div
            className="color ms-2 border"
            style={{ backgroundColor: {color} }}></div>

          }):<div>لا يوجد الوان أخرى</div>
        }
          
        </Col>
      </Row>

      <Row className="mt-4">
        <div className="cat-text">المواصفات :</div>
      </Row>
      <Row className="mt-2">
        <Col md="10">
          <div className="product-description d-inline"
          style={{"font-size":"1.3em"}}>
            {product.description}
          </div>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md="12">
          <div className="product-price d-inline px-3 py-3 border">{product.price} جنية</div>
          <div className="product-cart-add px-3 py-3 d-inline mx-3">اضف للعربة</div>
        </Col>
      </Row>
    </div>
    )
}

export default ProductText
