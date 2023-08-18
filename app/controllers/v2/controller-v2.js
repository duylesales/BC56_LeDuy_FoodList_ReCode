// true = món chay, còn món

const MON_CHAY = true;
const CON_MON = true;

export let renderFoodList = (list) => {
  let contentHTML = "";
  list
    .reverse()
    .forEach(({ ma, ten, loai, gia, khuyenMai, tinhTrang, moTa, hinhAnh }) => {
      let trString = `<tr>
                  <td>${ma}</td>
                  <td>${ten}</td>
                  <td>${
                    loai == MON_CHAY
                      ? "<span class=text-success>Chay</span>"
                      : "<span class=text-danger>Mặn</span>"
                  }</td>
                  <td>${gia}</td>
                  <td>${khuyenMai}</td>
                  <td>${0}</td>
                  <td>${tinhTrang == CON_MON ? "Còn" : "Hết"}</td>
                  <td>
                  <button class='btn btn-danger' onclick='deleteFood(${ma})'>Xoá</button>
                  <button class='btn btn-primary'>Sửa</button>
                  </td>
                  </tr>`;
      contentHTML += trString;
    });
  document.getElementById("tbodyFood").innerHTML = contentHTML;
};

export let onSuccess = (message) => {
  Swal.fire(message, "", "success");
};
