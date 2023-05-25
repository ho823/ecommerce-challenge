import { useState } from 'react';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import CancelTwoToneIcon from '@mui/icons-material/CancelTwoTone';

function GalleryImg({arrayImg}) {
  const [imageToShow, setImageToShow] = useState(arrayImg[0])
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const showNext = (e) => {
    e.stopPropagation()
    let currentIndex = arrayImg.indexOf(imageToShow)
    if(currentIndex >= arrayImg.length - 1) {
      let firstImg = arrayImg[currentIndex - currentIndex]
      setImageToShow(firstImg)
    }
    else {
      let nextImage = arrayImg[currentIndex + 1]
      setImageToShow(nextImage)
    }
}

  const showPrev = (e) => {
    e.stopPropagation()
    let currentIndex = arrayImg.indexOf(imageToShow)
      if(currentIndex <= 0 ) {
        setImageToShow(arrayImg[5])
    }
    else {
      let nextImage = arrayImg[currentIndex - 1]
      setImageToShow(nextImage)
    }
  }

  const currentSlide = (n) => {
    setImageToShow(arrayImg[n])
  }

    return(
    <>
      <Button onClick={handleOpen}>
        <div id="mainContent">
          <img id="mainImg" src={imageToShow} alt="" />
        </div>
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
      >
        <Box id="gallery-box">
          <Button id="close-btn" onClick={handleClose}><CancelTwoToneIcon id="close-icon" /></Button>
            <div id="main-img-gallery">
              <img src={imageToShow} alt="" onClick={handleClose} />
            </div>
            <div id="container-btn">
              <button className="btn-gallery" onClick={showPrev}>⭠</button>
              <button className="btn-gallery" onClick={showNext}>⭢</button>
            </div>

            <div id="secondary-img-gallery">
              {arrayImg.map((image, index) => {
                return  <img key={index} onClick={() => currentSlide(index)} className='thumbnail' src={image} alt="" />
              })}
            </div>
        </Box>
      </Modal>

      <div id="secondaryContent">
        {arrayImg.map((image, index) => {
          const isActive = imageToShow === image ? true : false
          return  <img key={index} onClick={() => currentSlide(index)} className={`${isActive ? 'active-img' : 'images'}`} src={image} alt="" tabIndex={0} />
          })}
      </div>
    </>);
  }

  
export default GalleryImg;