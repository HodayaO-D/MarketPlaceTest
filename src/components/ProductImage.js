import classes from './ProductImage.module.css';
// import lenovo from 'images/lenovo.png';
const ProductImage = (props) => {
  const imgPath = "images/" + props.imageName;
  //console.log(`imagePath: ${imgPath}`);
  
  return (
    <div className={classes['main-image']}>
      <img src={imgPath} />
    </div>
  );
};

export default ProductImage;
