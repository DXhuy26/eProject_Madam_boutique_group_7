 //khai báo biến slideIndex đại diện cho slide hiện tại
 var slideIndex;
 // KHai bào hàm hiển thị slide
 function showSlides() {
     var i;
     var slides = document.getElementsByClassName("ep_mySlides");
     var dots = document.getElementsByClassName("ep_dot");
     for (i = 0; i < slides.length; i++) {
         slides[i].style.display = "none";
     }
     for (i = 0; i < dots.length; i++) {
         dots[i].className = dots[i].className.replace(" active", "");
     }

     slides[slideIndex].style.display = "block";
     dots[slideIndex].className += " active";
     //chuyển đến slide tiếp theo

     //nếu đang ở slide cuối cùng thì chuyển về slide đầu
     if (slideIndex > slides.length - 1) {
         slideIndex = 0
     }
     //tự động chuyển đổi slide sau 5s
     setTimeout(showSlides, 5000);
 }
 //chạy hình ảnh khi bấm nut
 var slideIndex = 1;
 showSlides(slideIndex);

 function plusSlides(n) {
     showSlides(slideIndex += n);
 }

 function currentSlide(n) {
     showSlides(slideIndex = n);
 }

 function showSlides(n) {
     var i;
     var slides = document.getElementsByClassName("ep_mySlides");
     var dots = document.getElementsByClassName("ep_dot");
     if (n > slides.length) { slideIndex = 1 }
     if (n < 1) { slideIndex = slides.length }
     for (i = 0; i < slides.length; i++) {
         slides[i].style.display = "none";
     }
     for (i = 0; i < dots.length; i++) {
         dots[i].className = dots[i].className.replace("ep_active", "");
     }
     slides[slideIndex - 1].style.display = "block";
     dots[slideIndex - 0].className += " ep_active";
 }//chạy hình ảnh khi bấm nut
 var slideIndex = 1;
 showSlides(slideIndex);

 function plusSlides(n) {
     showSlides(slideIndex += n);
 }

 function currentSlide(n) {
     showSlides(slideIndex = n);
 }

 function showSlides(n) {
     var i;
     var slides = document.getElementsByClassName("ep_mySlides");
     var dots = document.getElementsByClassName("ep_dot");
     if (n > slides.length) { slideIndex = 1 }
     if (n < 1) { slideIndex = slides.length }
     for (i = 0; i < slides.length; i++) {
         slides[i].style.display = "none";
     }
     for (i = 0; i < dots.length; i++) {
         dots[i].className = dots[i].className.replace("ep_active", "");
     }
     slides[slideIndex - 1].style.display = "block";
     dots[slideIndex - 1].className += " ep_active";
 }