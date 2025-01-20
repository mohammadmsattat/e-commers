import React, { useState } from 'react'
import { Col,Card,Row, Modal, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import prod1 from '../../images/prod1.png'
import {DeleteProduct} from '../../reduxtoolkit/requests/DeleteProduct'
import { useDispatch ,useSelector} from 'react-redux'

const AdminAllProductsCard = ({product}) => {
        const dispatch=useDispatch();

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const HandelDelete=()=>{
        dispatch(DeleteProduct(product._id));
        setShow(false);
        window.location.reload();

    }

    return (
        
        <Col xs="12" sm="6" md="5" lg="4" className="d-flex">
        <Modal show={show} onHide={handleClose}>
        <Modal.Header >
          <Modal.Title>delete product</Modal.Title>
        </Modal.Header>
        <Modal.Body>are sure for delete</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={HandelDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
            <Card
                className="my-2"
                style={{
                    width: "100%",
                    height: "350px",
                    borderRadius: "8px",
                    border: "none",
                    backgroundColor: "#FFFFFF",
                }}>
                <Row className="d-flex justify-content-center px-2">
                    <Col className=" d-flex justify-content-between">
                        <div onClick={handleShow} className="d-inline item-delete-edit">ازاله</div>
                        <Link to={`/admin/products/${product._id}`} style={{ textDecoration: "none" }}>
                        <div className="d-inline item-delete-edit">تعديل</div></Link>
                    </Col>
                </Row>
                <Link to={`/products/${product._id}`} style={{ textDecoration: "none" }}>
                    <Card.Img style={{ height: "228px", width: "100%" }} src={product.imageCover} />
                    <Card.Body>
                        <Card.Title>
                            <div className="card-title">
                                {product.title}
                            </div>
                        </Card.Title>
                        <Card.Text>
                            <div className="d-flex justify-content-between">
                                <div className="card-rate">4.5</div>
                                <div className="d-flex">
                                    <div className="card-currency mx-1">جنيه</div>
                                    <div className="card-price">{product.price}</div>
                                </div>
                            </div>
                        </Card.Text>
                    </Card.Body>
                </Link>
            </Card>
        </Col>
    )
}

export default AdminAllProductsCard
