
let sign_btn = document.querySelector("#sign-btn");
sign_btn.addEventListener("click", () => {
    let email = document.querySelector("#user-login-email");
    if (email.value) {
        alert("You have Succesfully logined " + email.value)
    } else {
        console.log("ghhh")
    }
})
// --------   ZIPPY LIFE SECTION

let nextBtn = document.querySelector("#nextbtn");
let prevbtn = document.querySelector("#prevbtn");
let sub_imges = document.querySelectorAll(".sub-img");
let main_blockIMG = document.querySelector("#main-blockIMG");
let current_img_no = 2

function remove_active_class() {
    sub_imges.forEach(element => {
        element.classList.remove("active");
    });
};
function add_active_class() {
    remove_active_class();
    sub_imges[current_img_no];
    let nextslide = sub_imges[current_img_no];
    nextslide.classList.add("active");
    main_blockIMG.src = nextslide.src;

};
nextBtn.addEventListener("click", () => {
    current_img_no++;
    if (current_img_no >= sub_imges.length) {
        current_img_no = 0;
        add_active_class(current_img_no);
    }
    else {
        add_active_class(current_img_no);
    }

});

prevbtn.addEventListener("click", () => {
    current_img_no--;
    if (current_img_no < 0) {
        current_img_no = sub_imges.length - 1;
        add_active_class(current_img_no);
    }
    else {
        add_active_class(current_img_no);
    }


});
sub_imges.forEach((element, index) => {
    element.addEventListener("click", () => {
        remove_active_class();
        add_active_class(current_img_no = index);
    })
});
//------------------------  LODING PAGE -------------------------------------
const preloder = document.getElementById("loading_wrap");

function preloding(){
    preloder.style.display = "none";
}
// ---------------------------------------------   AOS LIBRARY  ---------------------------------------
AOS.init();


