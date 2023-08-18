import { renderFoodList } from "./controller-v2.js";
import foodServ from "../../service/service.js";
import { layThongTin } from "../v1/controller-v1.js";

// đặt hằng mặc định cho URL

// render food list
let fetchFoodList = () => {
  foodServ
    .getList()
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
  foodServ
    .deleteFood(id)
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

window.addFood = () => {
  console.log("ok");
  let data = layThongTin();
  foodServ
    .addFood(data)
    .then((res) => {
      fetchFoodList();
    })
    .catch((err) => {
      console.log(err);
    });
};
