

function ItemImg({items}) {
  return (
    <div style={{width:'50%', height: '40%'}}>{items.map((srcImg, i) =>  <img className="slider-img" key={i} src={srcImg} alt="" />)}</div> 
  )
}

export default ItemImg;