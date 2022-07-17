
var keys = $(".keysHuyet");
var lenKeys = keys.length;
var idKey;
var trimID;
var postAPI = "https://script.googleusercontent.com/macros/echo?user_content_key=U7emLlpq-nyfkZIY4bo3VH0MiMuGp81i0mfSK369IbvN9Thryd-EZNYVK1fuZdCd05zc3deE0gHMG7zHs_C025YpOhJJeiiwm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnNGU-sj347DIBRgHjav8Uz2176JU3OjCKmJrwgEst_7WGkCNFRaFhbhx0bULdAlXnq27pYNheb4bhxscSsaTQCiUl5bkwRZ_jw&lib=M1hRS8xOOozOolIIl5vg0BF47xHerzBZE";
fetch(postAPI)
  .then(function (response) {
    return response.json();
  })
  .then(function (post) {

    for (var i = 0; i <= lenKeys; i++) {
      idKey = keys[i].id; //trả về giá trị id của thẻ <circle>
      idcircle = "#" + idKey; // biến idkey thành #idkey để DOM
      // console.log(idcircle);
      //  console.log(idKey)
      trimID = idKey.slice(6, 9) - 1;
      //  console.log(trimID)
      $(idcircle).attr({
        "cx": post[Number(trimID)].toa_do_X,
        "cy": post[Number(trimID)].toa_do_Y,
        "fill": post[Number(trimID)].mau_sac,
      })
    }
  })
