import classes from './BottomBorderDiv.module.css'

const BottomBorderDiv = props =>{
return <div className={classes.bottomBorder}>{props.children}</div>
}
export default BottomBorderDiv;