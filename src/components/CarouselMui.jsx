import Carousel from 'react-material-ui-carousel'
import './CarouselMui.scss'

function CarouselMui({images}) {
  return (
    <Carousel
      height={'480px'}
      autoPlay={false}
      navButtonsAlwaysVisible={true}
    >
      {images.map((srcImg, index) => <div key={index}><img className="slider-img" src={srcImg} alt="product images" /></div> )}
    </Carousel>
      
  )
}

export default CarouselMui;