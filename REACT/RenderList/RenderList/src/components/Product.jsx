import "./product.css"

const Product = (props)=>{
    const {item, productImage, price} = props

    return(
        <>
            <div className="produc-wrap">
                <p>{item}</p>
                 <img src={productImage} alt="product-image" />
               <h6> {price}</h6>
            </div>

            
        </>
    )
}




export default Product