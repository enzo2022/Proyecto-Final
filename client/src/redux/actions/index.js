import axios from "axios";
export const ULPOAD_IMG = "ULPOAD_IMG";
const urlBase = "http://localhost:3001";

export function getallProperties() {
  return async function (dispatch) {
    const resu = await axios.get("http://localhost:3001/properties/getAll");
    dispatch({
      type: "GET_ALL_PROPERTIES",
      payload: resu.data,
    });
  };
}

//Esto sube la imagen a la tabla propertyImages
export function postImage(payload) {
  return async function (dispatch) {
    axios.post(`${urlBase}/properties/image`, payload).then((res) => {
      dispatch({
        type: ULPOAD_IMG,
        payload: res.data,
      });
    });
  };
}
