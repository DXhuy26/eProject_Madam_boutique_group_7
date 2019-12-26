$(function () {
  /* control dropdown*/
  // Function: append product 
  function myAppend() {
      var i;
      for (i = 0; i < ds.length; ++i) {
  
          $("#showshop").append(
              '<div class="col-sm-3 image ' + ds[i].manufacturer + ' ' + ds[i].type + '" style = "margin-bottom: 2em">' +
              '<a href = "' + ds[i].id + '.html" target = "_blank"><img src="' + ds[i].link0 + '" class="img-responsive ep_fade ep_fade_0" style="width:100%" alt="Image"></a>' +
              '<p>' + ds[i].id + '</p>' +
              '<p>$' + ds[i].cost + '</p>' +
              '<input type="checkbox" class="checkbox mark" name = "product" value = "' + ds[i].id + '">' +
              '</div>'
          )
      }
  };
  // Function: compare product
  function myCompare() {
      var product = document.getElementsByName("product");
      var mark = new Array();
      for (var i = 0; i < product.length; ++i) {
          if (product[i].checked == true) {
              mark.push(product[i].value);
          }
      }

      if (mark.length < 2 || mark.length > 4) {
          alert("Please take at least 2 product and 4 at most" + "\n");
          $("#note").append(
              '<div class = "alert alert-danger"><strong>You have chosen "' + mark.length + '" product !</strong>'+
              '<p>Click RESET to COMPARE again!</p>'+
              '</div>'
          )
          $("#information, #product").hide(function () {
              $(".image").show();
              $("#showshop").fadeIn(1000);
          })
      }
      else {
          var arr = new Array();
          for (var i = 0; i < mark.length; ++i) {
              for (var j = 0; j < ds.length; ++j) {
                  if (ds[j].id == mark[i]) {
                      arr.push(ds[j]);
                      break;
                  }
              }
          }
          $("#information").append(
              '<div class="row border rowImage">' +
              '<p style="line-height:10em">Image</p>' +
              '</div>' +
              '<div class="row border">' +
              '<p>ID</p>' +
              '</div>' +
              '<div class="row border">' +
              '<p>Color</p>' +
              '</div>' +
              '<div class="row border">' +
              '<p>Size</p>' +
              '</div>' +
              '<div class="row border">' +
              '<p>Made in</p>' +
              '</div>' +
              '<div class="row border">' +
              '<p>Cost</p>' +
              '</div>'
          );
          var n = Math.floor(12 / mark.length);
          for (var i = 0; i < mark.length; ++i) {
              $("#product").append(
                  '<div class="col-xs-' + n + '">' +
                  '<div class="row border rowImage">' +
                  '<img src="' + arr[i].link0 + '" alt="img" height = "100%">' +
                  '</div>' +
                  '<div class="row border">' +
                  '<p>' + arr[i].id + '</p>' +
                  '</div>' +
                  '<div class="row border">' +
                  '<p>' + arr[i].color + '</p>' +
                  '</div>' +
                  '<div class="row border">' +
                  '<p>' + arr[i].size + '</p>' +
                  '</div>' +
                  '<div class="row border">' +
                  '<p>' + arr[i].Made + '</p>' +
                  '</div>' +
                  '<div class="row border">' +
                  '<p>$' + arr[i].cost + '</p>' +
                  '</div>' +
                  '</div>'
              );
          }
      }

  };
  // Function: reset product checkbox
  function myReset() {
      var product = document.getElementsByName("product");
      for (var i = 0; i < product.length; ++i) {
          product[i].checked = false;
      }
      $("#note").empty();
  }
  
  $(function () {

      /* append product */
      myAppend();

      /*display*/
      $('#forever21').click(function () {
          $("#information, #product").hide(function () {
              $(".image").hide();
              $(".forever21").show();
              $("#showshop").fadeIn(1000);
          })
      })
      
      $('#all').click(function () {
          $("#information, #product").hide(function () {
              $(".image").show();
              $("#showshop").fadeIn(1000);
          })
      })

     
      $("#Store_bottom").click(function(){
          $("#information, #product").hide(function () {
              $(".image").hide();
              $(".b").show();
              $("#showshop").fadeIn(1000);
          })
      })
      
     
      /* compare */
      $("#compare").click(function () {
          $("#information, #product").empty();
          $("#showshop").hide(function () {
              myCompare();
              $("#information, #product").fadeIn(1000);
          });

      })
      

      /* Reset */
      $("#reset").click(function () {
          myReset();
          $("#information, #product").fadeOut();
          $("#showshop").fadeIn(1000);
          $("#product").empty();
      })
      
  })
})