import React from 'react'
import { Row } from 'react-bootstrap'
import AdminAllProductsCard from './AdminAllProductsCard'

const AdminAllProducts = ({prod}) => {
    
console.log(prod);

    return (
        <div>
            <div className='admin-content-text'>ادارة جميع المنتجات</div>
            <Row className='justify-content-start'>
               
               {
                prod? (
                    prod.map((item)=> <AdminAllProductsCard  product={item}/> )
                ): null
               }
               
            </Row>
            
        </div>
    )
}

export default AdminAllProducts
