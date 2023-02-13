import "./Card.css"
const Card = (props)=>{
    const classes = props.className + " Card"
     return <div className={classes}>{props.children}</div>
}
export default Card