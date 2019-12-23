document.getElementById("formdk").onsubmit = function () {

    var ten = document.getElementById("form-name").nodeValue;

    var r = /^[a-z0-9]{3,8}$/ig;

    if (r.test(ten) == false) {
        alert("ten dang nhap ko hop le")
        return false; //ko loat lai trang => ko chuyen den trang web actions
    }

    var a = [];
    a.push("Thanks you.");

    alert(a.join("\n"));
    return false;
}