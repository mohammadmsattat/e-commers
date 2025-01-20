import  {useEffect, useState} from 'react' 
import {SearchProducts} from '../reduxtoolkit/requests/SerachProducts'
import { useDispatch } from 'react-redux';
import UseSearchWord from './UseSearchWord'



const UseSearch = () => {
  
  const [SearchWord,setSearchWord]=useState(""); // handle search word 


  // for  use localstorage var 
  let word="",sort="",cat= "",pricef=0,pricet=0;

  // handle changes in serach 
  const pricefrom=()=>{getsearch()}
  const priceto=()=>{getsearch()}
  const Catfilter=()=>{getsearch();}
  const sortdata=()=>{ getsearch()}

  // move in pages
  const handlePage=(p)=>{getsearch(p); }

  // get search products with word
  const dispatch=useDispatch();
  useEffect(()=>{

    getsearch()
    
    },[SearchWord])


    // send request with handle many sort of search 
    const getsearch=(p)=>{

      let page=1
      if(p>1)
        page=p

      if(localStorage.getItem("searchWord")!=null) //hndle search box
        word =localStorage.getItem("searchWord")

      
      if(localStorage.getItem("SortBy")!=null) //handle sort type
        {
          if(localStorage.getItem("SortBy")==="الاقل سعرا")
            sort="+price"
          if(localStorage.getItem("SortBy")==="بدون ترتيب")
            sort=""
          if(localStorage.getItem("SortBy")==="الاكثر مبيعا")
            sort=""
          if(localStorage.getItem("SortBy")==="الاعلى تقييما")
            sort=""

        } 
      else
        {
          sort="";
        }
      
        cat=localStorage.getItem("categoryfilter") //filter by category

        // filter by price from
        let gte="";
        pricef=localStorage.getItem("pricefrom")
        if(pricef>0)
        gte=`&price[gte]=${pricef}`

        // filter by price to
        let lte="";
        pricet=localStorage.getItem("priceto")
        if(pricet>0)
        lte=`&price[lte]=${pricef}`




      setTimeout(() => {
        dispatch(SearchProducts(`limit=3&keyword=${word}&page=${page}&${cat}${gte}${lte}&sort=${sort}`));

      }, 500);

    }
    

  
  return [SearchWord ,setSearchWord,handlePage,sortdata,Catfilter,pricefrom,priceto]
}

export default UseSearch