import axios from "axios";
import {
  takeLatest,
  call,
  put
} from "redux-saga/effects";
// function GetAPI({getProducts , setGetProducts}) {

//     const url = `http://localhost:4000/api/products`
//     async function fetchData() {
//     let response = await axios(url);
//     let products = await response.data;
//     setGetProducts(products);

// }
// useEffect(() =>{
//     fetchData();
//   },[])
//     return ;
// }

// export default GetAPI;

async function fetchData() {
  let response = await axios.get(`https://639af01231877e43d67c3261.mockapi.io/api/products`);
  let products = await response.data;
  return products;
}

function* workerSaga() {
  const data = yield call(fetchData);
  yield put({
    type: "API_CALL_SUCCESS",
    payload: data
  });

}
export function* mySaga(){
  yield takeLatest('GET_API',workerSaga);
}

