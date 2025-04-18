import { useContext } from "react";
import { Name } from "./A";

const C = ()=>{

    const value =useContext(Name)

    return(<div>
{value}
inside c
    </div>)
}
export default C;