console.log("adsby.js");

window.addEventListener("load", function(){
    setTimeout(() => {
        let fcAbRoot = document.querySelector(".fc-ab-root");
        if(fcAbRoot) {
            fcAbRoot.style.display = "none";
            fcAbRoot.remove();
            document.body.style.overflow = "";
        }
        if(fcAbRoot) {
            console.log("setTimeout fc-ab-root 광고 제거");
        }
    }, 10)


    
    /* ====== 기업형 광고 제거 ====== */
    
    /* 랜덤 사이트 애드오피스(https://adop.cc/) 광고 제거 */
    let insAdsbyadops = this.document.querySelectorAll("ins");
    if(insAdsbyadops.length > 0) {
        setTimeout(() => {
            insAdsbyadops.forEach(function(item,index){
                let insClass = item.getAttribute("class");
                if (insClass && typeof insClass === "string" && insClass.includes("adsbyadop")) {
                    item.style.display = "none";
                    /* 특정 페이지에서 컨텐츠가 모두 사라지는 경우가 생김. */
                    // const parentDiv = item.closest("div");
                    // if(parentDiv) {
                    //     parentDiv.style.display = "none";
                    // }
                }
            })
        }, 0)
    }
    /* // 랜덤 사이트 애드오피스(https://adop.cc/) 광고 제거 */

    /* 랜덤 사이트 구글 광고 제거 */
    let adsbygoogles = this.document.querySelectorAll(".adsbygoogle");
    if(adsbygoogles.length > 0) {
        setTimeout(() => {
            adsbygoogles.forEach(function(item,index){
                item.style.display = "none";
                /* 특정 페이지에서 컨텐츠가 모두 사라지는 경우가 생김. */
                // const parentDiv = item.closest("div");
                // if(parentDiv) {
                //     parentDiv.style.display = "none";
                // }
            })
        }, 0)
    }
    /* // 랜덤 사이트 구글 광고 제거 */

    /* iframe 에 담겨있는 구글 광고 제거 (상위 div 삭제) */
    let adsbygooglesIframe = this.document.querySelectorAll("iframe");
    if(adsbygooglesIframe.length > 0) {
        setTimeout(() => {
            adsbygooglesIframe.forEach(function(item,index){
                let iframeId = item.getAttribute("id");
                if (iframeId && typeof iframeId === "string" && iframeId.includes("google")) {
                    const parentDiv = item.closest("div");
                    const parentIns = item.closest("ins");
                    if(parentIns) {
                        parentIns.classList.add("test123");
                        console.log(parentIns);
                        parentIns.style.display = "none";
                        console.log("불특정다수의 iframe 상위 ins 삭제 / 가끔 보여야 하는게 지워지기도 함.");
                        return false;
                    }
                    if(parentDiv) {
                        parentDiv.classList.add("test123");
                        console.log(parentDiv);
                        parentDiv.style.display = "none";
                        console.log("불특정다수의 iframe 상위 div 삭제 / 가끔 보여야 하는게 지워지기도 함.");
                    }
                }
            })
        }, 0)
    }
    /* // iframe 에 담겨있는 구글 광고 제거 (상위 div 삭제) */

    /* // ====== 기업형 광고 제거 ====== */

})

