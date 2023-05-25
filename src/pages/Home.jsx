import ImageProduct from "../components/ImageProduct";
import Description from "../components/Description";
import QtyBtn from "../components/QtyBtn";
import './Home.scss';


function Home() {
  const product = {
    name: 'Spring Limited Edition Sneakers',
    description: "The radiance lives on in the Nike Air Force 1 ’07 Next Nature—the b-ball original that lets you do good by looking good. Made from at least 20% recycled materials by weight, it keeps everything you love best: tried and true AF1 style and comfortable cushioning.",
    price: 100,
  }
    return(
    <div id="product-content">
    <div>
      <ImageProduct/>
    </div>
    <div>
      <Description item={product} />
      <QtyBtn product={product} />
    </div>

    </div>
    );
  }

  
export default Home;