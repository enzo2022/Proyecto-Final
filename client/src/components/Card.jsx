

export default function Card ({descripcion, propiedades }){
 const images = propiedades.map((el) => el.image) 
 console.log(images)
 const name = propiedades.map(el=> el.name)
    return(
        <div>
            <h1>{name}</h1>
               <div>{descripcion}</div>
               {/* <div>{propiedade}</div> */}
               <img  src={images} alt ='hola'></img>
        </div>
    )
}