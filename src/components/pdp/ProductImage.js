import classes from './ProductImage.module.css';
const ProductImage = (props) => {
  const imgPath = "images/" + props.imageName;
  
  return (
    <div className={classes['main-image']}>
      <img src={imgPath} alt=""/>
    </div>
  );
};

export default ProductImage;
