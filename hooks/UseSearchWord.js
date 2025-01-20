import { useState } from "react";

const UseSearchWord = () => {

    const [SearchWord,setSearchWord]=useState(""); // handle search word 
    console.log(SearchWord);
    

  return [SearchWord,setSearchWord]
}

export default UseSearchWord