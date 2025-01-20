import React,{useEffect} from 'react'
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import mobile from '../../images/mobile.png'
import LeftButton from './LeftButton';
import RightButton from './RightButton';
import {GetOneProduct} from '../../reduxtoolkit/requests/GetOneProduct'
import { useSelector,useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom'


const ProductGallery = () => {
    const{id}=useParams()
    
    const dispatch=useDispatch();

    useEffect(()=>{
        dispatch(GetOneProduct(id))
        },[])


    const Images=useSelector((state)=>state.OneProduct.Product.images)

    let images=[]
    if(Images)
    {
        images= Images.map((item)=>{return {original:item}})
    }
    else{
         images=[{original:`${mobile}`}]
    }
    

    return (
        <div className="product-gallary-card d-flex justfiy-content-center  align-items-center
        pt-2">
            <ImageGallery items={images}
                defaultImage={mobile}
                showFullscreenButton={false}
                isRTL={true}
                showPlayButton={false}
                showThumbnails={false}
                renderRightNav={RightButton}
                renderLeftNav={LeftButton}
            />
        </div>
    )
}

export default ProductGallery
