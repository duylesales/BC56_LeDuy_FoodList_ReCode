export default class Food {
  constructor(ma, ten, loai, gia, khuyenMai, tinhTrang, hinhMon, moTa) {
    this.id = ma;
    this.name = ten;
    this.type = loai == "loai1" ? "Chay" : "Mặn";
    this.price = gia;
    this.discount = khuyenMai;
    this.status = tinhTrang;
    this.image = hinhMon;
    this.desc = moTa;
  }
  tinhGiaKM = function () {
    return this.price * (1 - this.discount);
  };
}
