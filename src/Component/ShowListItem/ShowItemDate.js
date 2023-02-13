import style from "./ShowItemDate.module.css"
import Card from "../Card/Card"
const ShowListDate = (props)=>{
    const date = props.date.toLocaleString("en-US",{day: "2-digit"})
    const month = props.date.toLocaleString("en-US",{month: "long"})
    const year = props.date.getFullYear()
        return(
            <Card className={style.date}>
                <Card>{date}</Card>
                <Card>{month}</Card>
                <Card>{year}</Card>
            </Card>
        )
    }
    
    export default ShowListDate