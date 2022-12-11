window.alert("Selamat datang diprogram login!")
function kirim_form() {
    let inp_nama = document.getElementById("usrname").value;
    let inp_pass = document.getElementById("pswd").value;
    let form = document.getElementById("form");

    if (inp_nama == "admin" && inp_pass == "integrity") {
        form.setAttribute("action", "login.html")
        alert("Login sukses!");
    } else {
        alert("Login gagal, silakan coba lagi.");
    }
    console.log(inp_nama + inp_pass)
}
