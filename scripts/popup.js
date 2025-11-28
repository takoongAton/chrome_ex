/* 툴바의 아이콘이 눌리면 실행 되는 스크립트 */
document.querySelector(".btn_chrome_eee").addEventListener("click", function(){
    alert("버튼 눌러도 뭐 없다");
})

// alert("popup.html alert")

let btn_dim_add = document.querySelector(".btn_dim_add");
if(btn_dim_add) {
    btn_dim_add.addEventListener("click", function(){
        let fcAbRoot = document.querySelector(".fc-ab-root");
        if(fcAbRoot) {
            fcAbRoot.style.display = "none";
            fcAbRoot.remove();
            document.body.style.overflow = "";
        }
        console.log("fcAbRoot")
        // test1234();
    })
}
