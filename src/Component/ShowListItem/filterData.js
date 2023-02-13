 import "./FilterData.css"
import Card from "../Card/Card"
const FilterData= (props)=>{

 
const dropdownChangeHandler = (event)=>{
 
props.onfilterChangeHandler(event.target.value)
}
    return(
        <div className="filter">
        <label>Filter Data By Year From 2014-2023 <hr /></label>
        <Card>
        <select value={props.selected} onChange={dropdownChangeHandler}>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
          <option value="2017">2017</option>
          <option value="2016">2016</option>
          <option value="2015">2015</option>
          <option value="2014">2014</option>
        </select>
        </Card>
      </div>

         
    )
}

export default FilterData