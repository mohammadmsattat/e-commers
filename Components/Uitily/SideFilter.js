import React, { useEffect, useState } from 'react'
import { Row } from 'react-bootstrap'
import { CategoryForSerach } from '../../reduxtoolkit/requests/CategoryForSearch'
import { useDispatch, useSelector } from 'react-redux'
import UseSearch from '../../hooks/UseSearch'


const SideFilter = () => {

        const  [SearchWord ,setSearchWord,handlePage,sortdata,Catfilter,pricefrom,priceto]=UseSearch();

        const Category=useSelector((state)=>state.SearchCategory.data) //category store values
        const [Selected,SetSelected]=useState([]);
  
   // fetch category
      const dispatch=useDispatch();
      useEffect(()=>{
        dispatch(CategoryForSerach());
      },[]) 
      
      //set selsct category
      const catselected =(e)=>{
        
        if(e.target.checked)
        SetSelected([...Selected,e.target.value])
       
        else {
          const newarray= Selected.filter((i)=> i!==e.target.value)
          SetSelected(newarray)
       }
       console.log(Selected);

        }
          
      //set category query
      useEffect(()=>{
          const ArrayQuery=Selected.map((i)=> "category[in][]="+i).join("&")
          localStorage.setItem("categoryfilter",ArrayQuery)
          Catfilter()

          console.log(ArrayQuery);
          
      },[Selected])

      const PriceFrom=(e)=>{
        localStorage.setItem("pricefrom",e.target.value)
        pricefrom()
        console.log(e.target.value);
        
      }

      const PriceTo=(e)=>{
        localStorage.setItem("priceto",e.target.value)
        priceto()
        console.log(e.target.value);
        
      }

    return (
        <div className="mt-3">
        <Row>
          <div className="d-flex flex-column mt-2">
            <div className="filter-title">الفئة</div>
            <div className="d-flex mt-3">
              <input type="checkbox" value="0" />
              <div className="filter-sub me-2 ">الكل</div>
            </div>
            {
              Category.data? (Category.data.map((item,index)=>{
               return <div  key={index} className="d-flex mt-2">
              <input type="checkbox" value={item._id} 
                      onChange={catselected}
              />
              <div className="filter-sub me-2 "> {item.name}</div>
            </div>
              })):null
            }
            
          </div>
  
          <div className="d-flex flex-column mt-2">
            <div className="filter-title mt-3">الماركة</div>
            <div className="d-flex mt-3">
              <input type="checkbox" value="" />
              <div className="filter-sub me-2 ">الكل</div>
            </div>
            <div className="d-flex mt-2">
              <input type="checkbox" value="" />
              <div className="filter-sub me-2 ">ابل</div>
            </div>
            <div className="d-flex mt-2">
              <input type="checkbox" value="" />
              <div className="filter-sub me-2 ">سامسونج</div>
            </div>
          </div>
  
          <div className="filter-title my-3">السعر</div>
          <div className="d-flex">
            <p className="filter-sub my-2">من:</p>
            <input
              className="m-2 text-center"
              type="number"
              onChange={PriceFrom}
              style={{ width: "50px", height: "25px" }}
            />
          </div>
          <div className="d-flex">
            <p className="filter-sub my-2">الي:</p>
            <input
              className="m-2 text-center"
              type="number"
              onChange={PriceTo}
              style={{ width: "50px", height: "25px" }}
            />
          </div>
        </Row>
      </div>
    )
}

export default SideFilter
