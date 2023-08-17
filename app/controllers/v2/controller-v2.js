export let renderFoodList = (list) => {
  let contentHTML = "";
  list.forEach(
    ({ ma, ten, loai, gia, khuyenMai, tinhTrang, moTa, hinhAnh }) => {
      let trString = `<tr>
                  <td>${ma}</td>
                  <td>${ten}</td>
                  <td>${loai}</td>
                  <td>${gia}</td>
                  <td>${khuyenMai}</td>
                  <td>${0}</td>
                  <td>${tinhTrang}</td>
                  </tr>`;
      contentHTML += trString;
    }
  );
  document.getElementById("tbodyFood").innerHTML = contentHTML;
};
