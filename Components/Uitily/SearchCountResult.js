import React from 'react'
import UnopDropdown from "unop-react-dropdown";
import sort from '../../images/sort.png'
const SearchCountResult = ({title,sortdata}) => {
    const handler=()=> {

    }
         const click=(s)=>{
            localStorage.setItem("SortBy",s)
            sortdata()
         }
   
    return (
        <div className="d-flex justify-content-between pt-3 px-2">
            <div className="sub-tile">{title}</div>
            <div className="search-count-text d-flex ">
                <UnopDropdown
                    onAppear={handler}
                    onDisappearStart={handler}
                    trigger={
                        <p className="mx-1">
                            <img
                                width="20px"
                                height="20px"
                                className="ms-1"
                                src={sort}
                                alt=""
                            />
                            ترتيب حسب
                        </p>
                    }
                    delay={0}
                    align="CENTER"
                    hover>
                    <div className="card-filter">
                        <div onClick={()=> click("")} className="border-bottom card-filter-item">بدون ترتيب</div>
                        <div onClick={()=> click("الاكثر مبيعا")} className="border-bottom card-filter-item">الاكثر مبيعا</div>
                        <div onClick={()=> click("الاقل سعرا")} className="border-bottom card-filter-item">الاقل سعرا</div>
                        <div onClick={()=> click("الاعلى تقييما")} className="border-bottom card-filter-item">الاعلي تقييما</div>

                        <div className=" card-filter-item">السعر من الاعلي للاقل</div>
                    </div>
                </UnopDropdown>
            </div>
        </div>
    )
}

export default SearchCountResult
