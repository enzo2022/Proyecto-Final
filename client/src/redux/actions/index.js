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


