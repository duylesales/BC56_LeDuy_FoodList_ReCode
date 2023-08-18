// đặt hằng mặc định cho URL
const BASE_URL = "https://64cc765e2eafdcdc8519da0a.mockapi.io/food";

let getList = () => {
  return axios({
    url: BASE_URL,
    method: "GET",
  });
};

let deleteFood = (id) => {
  return axios({
    url: `${BASE_URL}/${id}`,
    method: "DELETE",
  });
};
let addFood = (food) => {
  return axios({
    url: BASE_URL,
    method: "POST",
    data: food,
  });
};
let foodServ = {
  getList,
  deleteFood,
  addFood,
};

export default foodServ;
