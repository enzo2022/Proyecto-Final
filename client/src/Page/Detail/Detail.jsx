// import React from "react";
// import { Link, useParams } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { getIdProperties } from "../../redux/actions";
// import { useEffect } from "react";





// export default function Details() {

//    let {id} = useParams();
//    const dispatch = useDispatch()

//     const detailProperties = useSelector((state) => state.detail)

//     useEffect(() => {
//         dispatch(getIdProperties(id));
//     }, [dispatch]);


//     return (
//         <div>
//             {
//                 detailProperties ? (
//                     <div>
//                         <div>
//                             <Link to="/home">
//                                 <button className={s.notVol}>Volver</button>
//                             </Link>
//                         </div>
//                         <div>
//                         <h3>{detail.name}</h3>
//                         </div>

//                     </div>
//                 )
//                 : 
//                 <div>
//                     <p> Propiedad inexistente</p>
//                 </div>

//             }
//         </div>
//     )
// }