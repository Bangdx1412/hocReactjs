function ProductItem(props){
    console.log(props);
     const {item} = props
    return (
        <>
          <div className="product__item">
            <img style={{width:"100px"}} src={item.image} alt="" />
            <h3>Title: {item.title}</h3>
            <p>Price: {item.price} d</p>
          </div>
        </>
    )
}
export default ProductItem;