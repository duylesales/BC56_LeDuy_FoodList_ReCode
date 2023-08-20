import { onSuccess, renderFoodList, showDataForm } from "./controller-v2.js";
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

let deleteFood = (id) => {
  foodServ
    .deleteFood(id)
    .then((res) => {
      console.log(res);
      onSuccess("Xoá thành công");
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
      $("#exampleModal").modal("hide");
      onSuccess("Thêm thành công");
      fetchFoodList();
    })
    .catch((err) => {
      console.log(err);
    });
};

window.editFood = (id) => {
  document.getElementById("exampleModalLabel").innerText = "Sửa Món Ăn";
  $("#exampleModal").modal("show");
  foodServ
    .getDetail(id)
    .then((res) => {
      console.log(res);
      showDataForm(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
window.updateFood = (id) => {
  let data = layThongTin(id);
  foodServ
    .updateFood(id, data)
    .then((res) => {
      fetchFoodList();
      console.log(res);
      $("#exampleModal").modal("hide");
      onSuccess("Cập nhật thành công");
    })
    .catch((err) => {
      console.log(err);
    });
};
