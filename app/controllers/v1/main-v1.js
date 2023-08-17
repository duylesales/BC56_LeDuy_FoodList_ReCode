import { layThongTin, showThongTin } from "./controller-v1.js";
import MonAn from "../../models/v1/model-v1.js";

let themMon = () => {
  // lấy thông tin từ form
  let data = layThongTin();
  let { ma, ten, loai, gia, khuyenMai, tinhTrang, hinhMon, moTa } = data;
  let monAn = new MonAn(
    ma,
    ten,
    loai,
    gia,
    khuyenMai,
    tinhTrang,
    hinhMon,
    moTa
  );
  showThongTin(monAn);
};

window.addFood = themMon;
