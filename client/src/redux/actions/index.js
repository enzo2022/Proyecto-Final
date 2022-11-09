import axios from 'axios'


export function getallProperties(){
    return async function(dispatch){
const resu = await axios.get('http://localhost:3001/getHouses')
dispatch({
    type:"GET_ALL_PROPERTIES",
    payload: resu.data
})
    }
}


// export function getIdProperties(id){
//     return async function (dispatch) {
//       try {
//         var json = await axios.get(
//           "http://localhost:3001//"+id
//         );
//         return dispatch({
//           type: "GET_ID_PROPERTIES",
//           payload: json.data, 
//         });
//       }catch(err){
//         console.log(err)
//       }
        
  
//   }
//   };