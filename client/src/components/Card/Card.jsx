import { Link } from "react-router-dom";

export default function Card ({address, price , garage ,id, images}){
console.log(address)
    return(
        <div>
    <img className="max-w-lg h-auto rounded-lg" src={images} alt="imagen" />        
    <p>{address}</p>  
    <p>{price}</p>
    <p>{garage}</p>

<Link to ={`/properties/findById/${id}`}><button>Mas Detalle</button></Link>
        </div>
    )
}