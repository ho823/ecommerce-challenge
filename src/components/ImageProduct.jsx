import GalleryImg from './GalleryImg';
import CarouselMui from './CarouselMui';

import backSide  from '../images/nike-back.png'
import frontSide  from '../images/nike-front.png'
import underneathSide  from '../images/nike-dessous.png'
import aboveSide  from '../images/nike-dessus.png'
import detail  from '../images/nike-detail.png'
import side  from '../images/nike-side.png'
import './ImageProduct.scss';


function ImageProduct() {
  const imagesProduct = [
    frontSide,
    side,
    backSide,
    aboveSide,
    underneathSide,
    detail,
  ]

    return(
    <>
    <div id="carousel-mobile">
      <CarouselMui images={imagesProduct} />
    </div>

    <div id="lightbox">
      <GalleryImg arrayImg={imagesProduct} />
    </div>
    </>
    );
  }

  
export default ImageProduct;