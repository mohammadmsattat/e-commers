import React, { useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import rate from '../../images/rate.png'
import Pagination from '../Uitily/Pagination';
import RateItem from './RateItem';
import RatePost from './RatePost';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { GetOneProduct } from '../../reduxtoolkit/requests/GetOneProduct';

const RateContainer = () => {
    const{id}=useParams()
    
    const dispatch=useDispatch();

    useEffect(()=>{
        dispatch(GetOneProduct(id))
        },[])

    const item=useSelector((state)=>state.OneProduct.Product)

    if(item){
        var rateAvg=item.ratingsAverage
        var rateQty=item.ratingsQuantity
    }

    return (
        <Container className='rate-container'>
            <Row>
                <Col className="d-flex">
                    <div className="sub-tile d-inline p-1 ">التقيمات</div>
                    <img className="mt-2" src={rate} alt="" height="16px" width="16px" />
                    <div className="cat-rate  d-inline  p-1 pt-2">{rateAvg}</div>
                    <div className="rate-count d-inline p-1 pt-2">{rateQty}</div>
                </Col>
            </Row>
            <RatePost />
            <RateItem />
            <RateItem />
            <RateItem />
            <RateItem />

            <Pagination />
        </Container>
    )
}

export default RateContainer
