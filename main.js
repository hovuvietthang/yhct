
var postAPI = "https://script.googleusercontent.com/macros/echo?user_content_key=U7emLlpq-nyfkZIY4bo3VH0MiMuGp81i0mfSK369IbvN9Thryd-EZNYVK1fuZdCd05zc3deE0gHMG7zHs_C025YpOhJJeiiwm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnNGU-sj347DIBRgHjav8Uz2176JU3OjCKmJrwgEst_7WGkCNFRaFhbhx0bULdAlXnq27pYNheb4bhxscSsaTQCiUl5bkwRZ_jw&lib=M1hRS8xOOozOolIIl5vg0BF47xHerzBZE";
fetch(postAPI)
  .then(function (response) {
    return response.json();
  })
  .then(function (post) {
    $(document).ready(function () {
      $("circle").click(function () {
        var Id = $(this).attr("id");
        //  console.log("Lấy ID khi Click vào : "+Id);
        var Idslice = Id.slice(6, 9)
        //  console.log("Sau kh đã cắt Id: "+ Idslice)
        var IdNum = Number(Idslice) - 1;
        //  console.log("Sau kh đã ép dữ liệu: "+ Idslice + "| kiểu dữ liệu : " + typeof IdNum)
        var urlCmt = $(".fb-comments").attr("data-href")
        var idRange =  Number(Idslice)+1;
      // var urlCmt1 = urlCmt + post[IdNum].ky_hieu;
        console.log("linkcmt : "+ urlCmt + post[IdNum].ky_hieu);
        $("#cmt-fb").attr({"data-href": urlCmt})

        $("#c-name").html(post[IdNum].ten_huyet);
        $("#c-sign").html(post[IdNum].ky_hieu);
        $("#c-mean").html(post[IdNum].y_nghia);
        $("#c-cachxacdinh").html(post[IdNum].vi_tri);
        $("#c-way").html(post[IdNum].duong_kinh);
        $("#c-tacdung").html(post[IdNum].tac_dung);
        $("#c-chutri").html(post[IdNum].chu_tri);
        $("#c-info").html(
          "Thông tin này được đóng góp bởi : " + post[IdNum].info_1 +" "+post[IdNum].info_2+" "+post[IdNum].info_3+" "+post[IdNum].info_4
        )
        $("#imgHuyet").attr({
          "title": "Ảnh huyệt " + post[IdNum].ten_huyet,
          "src": post[IdNum].link_img,
        })
        $("#c-xacminh").text("Xác minh thông tin đóng góp : "+post[IdNum].xac_minh_thong_tin);
        //  Thông tin người đóng góp
        $("#c-mean").attr({
          "title": "Thông tin được đóng góp bởi : " + post[IdNum].info_1
        });
        $("#c-dactinh").attr({
          "title": "Thông tin được đóng góp bởi : " + post[IdNum].info_2
        });

        $("#c-cachxacdinh").attr({
          "title": "Thông tin được đóng góp bởi : " + post[IdNum].info_3
        });

        $("#c-tacdung").attr({
          "title": "Thông tin được đóng góp bởi : " + post[IdNum].info_4
        });

        $("#c-chutri").attr({
          "title": "Thông tin được đóng góp bởi : " + post[IdNum].info_5
        });
        $("#btn-edit").attr({
          "href" : "https://docs.google.com/spreadsheets/d/1mvSsYcNhQuBFjfJLy3fTSYts72Ng_TBMCtXso8DJrgY/edit#gid=0&range="+ idRange +":"+idRange
        })  
        
      });
    });


  })

// Tọa độ mặt trước
// Lấy tọa độ mặt bên
$('#toa_do_mat_ben').click(function (e) {
  let posX = $(this).position().left, posY = $(this).position().top;
  $("#toadoX").text("Tọa độ X : " + Math.round((e.pageX - posX) / (557 / 195)));
  $("#toadoY").text("Tọa độ Y : " + Math.round((e.pageY - posY) / (415 / 146)))

  // alert("Tọa độ X : "+ (e.pageX - posX)/(727.5/242) + ' | '+ "Tọa độ Y : " + (e.pageY - posY)/(452/151));
});
// lấy tọa độ mặt sau
$('#toa_do_mat_sau').click(function (e) {
  let posX = $(this).position().left, posY = $(this).position().top;
  $("#toadoX").text("Tọa độ X : " + Math.round((e.pageX - posX) / (757 / 266)));
  $("#toadoY").text("Tọa độ Y : " + Math.round((e.pageY - posY) / (444 / 156)))

  // alert("Tọa độ X : "+ (e.pageX - posX)/(727.5/242) + ' | '+ "Tọa độ Y : " + (e.pageY - posY)/(452/151));
});

 
