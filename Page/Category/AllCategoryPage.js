import React, { useEffect } from 'react'
import CategoryContainer from '../../Components/Category/CategoryContainer'
import Pagination from '../../Components/Uitily/Pagination'
import { fetchAllCategory } from '../../reduxtoolkit/requests/CategoryRequest'
import { useDispatch, useSelector } from 'react-redux'

const AllCategoryPage = () => {

    // get the categories from the store
    const Category=useSelector((state)=>state.Category.Category)
    const loading=useSelector((state)=>state.Category.loading)
    


    // set pages count
    let pageCount = 0;
    if (Category.paginationResult)
        pageCount = Category.paginationResult.numberOfPages
    
    

    // fetch category
    const dispatch=useDispatch();
    useEffect(()=>{
      dispatch(fetchAllCategory());
    },[]) 

    
    // esnd new page reuest
    const handlePageClick=()=>{
        dispatch(fetchAllCategory())
   
        
    }

    return (
        <div style={{minHeight:'670px'}}>
        
            <CategoryContainer Category={Category} loading={loading} />
            <Pagination PageCount={pageCount} handlePageClick={handlePageClick} />
        </div>
    )
}

export default AllCategoryPage
