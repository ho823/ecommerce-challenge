import './Description.scss';

function Description({item}) {
  const {name, description, price} = item
    return(
    <div id="description-content">
      <h2 id="company-title">sneaker company</h2>
      <h3 id="shoes-name">{name}</h3>
      <p id="shoes-description">{description}</p>
      <p id="price">Prix: {price}€</p>
    </div>
    );
  }

export default Description;