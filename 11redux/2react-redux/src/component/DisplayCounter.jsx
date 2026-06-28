import { useSelector } from "react-redux"
const DisplayCounter=()=>{
 const counter= useSelector(Store=>Store.counter);
return<>


<p className="lead mb-4">current counter value :{counter} </p>
</>
}
export default DisplayCounter