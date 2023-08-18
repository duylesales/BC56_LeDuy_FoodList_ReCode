import { renderFoodList } from "./controller-v2.js";

// đặt hằng mặc định cho URL
const BASE_URL = "https://64cc765e2eafdcdc8519da0a.mockapi.io/food";

// render food list
let fetchFoodList = () => {
  axios({
    url: BASE_URL,
    method: "GET",
  })
    .then((res) => {
      console.log(res);
      renderFoodList(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
fetchFoodList();
// tách service

let deleteFood = (id) => {
  axios({
    url: `${BASE_URL}/${id}`,
    method: "DELETE",
  })
    .then((res) => {
      console.log(res);
      alert("thành công");
      fetchFoodList();
    })
    .catch((err) => {
      console.log(err);
    });
};

window.deleteFood = deleteFood;
