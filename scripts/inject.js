/**
 * Brave 브라우저용 콘텐츠 주입 스크립트
 * 광고 제거 및 DOM 요소 조작 기능 제공
 */
/* m5 맥북에서 수정 */
console.log("inject.js");

// URL 공통 사용
const url = window.location.href;
let displayNoneImportant = "display-none-important";

// 동적으로 생성되는 삭제 대상 요소 선택자 목록
const DELETE_SELECTORS = [
    ".fc-ab-root", // 광고 차단 허용, 스크롤 강제막기 삭제
    ".fc-whitelist-root", // 광고차단 관련 요소
];





/* fadeOut animation */
function fadeOutElement(target, aniBoolean){
    let targetItem = target;
    let flag = aniBoolean;
    targetItem.style.height = targetItem.clientHeight + "px";
    targetItem.classList.add("hideDDAction");
    applyAnimationEnd(targetItem, flag);
}

/* fadeOut -> display:none */
function applyAnimationEnd(endItem, aniState){
    let aniFlag = aniState;
    if(aniFlag){
        endItem.addEventListener("animationend", function(){
            endItem.classList.add("display-none-important")
        })
    } else {
        endItem.classList.add("display-none-important")
    }
}

function removeDynamicElements(){
    document.body.style.overflow = "";
    const delList = document.querySelectorAll(delArr);
    if(delList.length > 0) {
        delList.forEach(function(item){
            if(item) {
                console.log(item);
                item.remove();
            }
        })
    }
}

function initMutationObserver(){
    const elementToObserve = document.querySelector('body');
    const observer = new MutationObserver(function(mutations) {
        console.log("est")
        mutations.forEach(function(mutation) {
            if (mutation.type == 'childList'){
                removeDynamicElements();
            }
        });
    });

    const config = {
        attributes:false, 
        childList:true, 
        characterData:false, 
        subtree:true
    };

    observer.observe(elementToObserve, config);
    
    setTimeout(() => {
        console.log("observer.disconnect();")
        observer.disconnect(); 
    }, 5000);
    // observer.disconnect();
}
// initMutationObserver();



/*
type : remove, move, hide
*/

/* 삭제불가, display:none 불가 인 경우 사용 */
/*
function conAreaStyle(item){
    if(!item) {alert("없는게 걸렸따.")}
    item.style.position = "absolute";
    item.style.top = "0px";
    item.style.left = "0px";
    item.style.width = "0px";
    item.style.minWidth = "0px";
    item.style.height = "0px";
    item.style.minHeight = "0px";
    item.style.margin = "0px";
    item.style.padding = "0px";
    item.style.opacity = "0";
    item.style.overflow = "hidden";
}
*/

/* 삭제불가, display:none 불가 인 경우 사용 */
/**
 * 대상 요소를 화면에서 사실상 숨기되, 삭제나 display:none이 불가능한 상황에서 사용합니다.
 * 
 * - 요소가 존재하지 않을 경우 경고(alert)를 띄우고 함수를 종료합니다.
 * - 요소가 존재하면 position, 크기, margin, padding, 투명도(opacity), overflow 등
 *   가능한 모든 스타일 속성을 0 또는 hidden으로 지정하여 완전히 보이지 않게 만듭니다.
 * - Object.assign을 통해 한 번에 style 속성을 적용하여 코드 가독성과 성능을 개선했습니다.
 */
function conAreaStyle(item) {
    if (!item) {
        alert("없는게 걸렸따.");
        return;
    }
    Object.assign(item.style, {
        position: "absolute",
        top: "0",
        left: "0",
        width: "0",
        minWidth: "0",
        height: "0",
        minHeight: "0",
        margin: "0",
        padding: "0",
        opacity: "0",
        overflow: "hidden"
    });
}





/* 불필요한 내용 숨기기 */
function conAreaHidden(item){
    item.style.display = "none";
}





/* 기사 본문 영역 확장 */
function conAreaExtend (item){
    item.style.float = "none";
    item.style.margin = "0 auto";
}





/* 영역 삭제, 지워짐 표시 여부 확인 */
function conAreaDel(item, flagState){
    if(flagState){ // true, false
        insertRemovalTrace(item); // 지워짐 표시
    }
    console.log(item); // 삭제된 컨텐츠
    item.remove();
}





/* 광고 지워짐 표시 */
function insertRemovalTrace(target){
    const testDiv = document.createElement("div");
    testDiv.classList.add("traceDiv")
    let tempconInner = `<div><span>광고영역 제거됨</span></div>`;
    testDiv.innerHTML = tempconInner;
    target.parentNode.insertBefore(testDiv, target.nextSibling);
}





/* css 페이지에 넣기 */
function insertCustomCss(customCss, name){
    const styleItem = customCss;
    const style = document.createElement("style");
    style.id = "custom-style-" + name; // 중복 방지용 ID
    style.textContent = styleItem;
    document.documentElement.appendChild(style);// HTML 루트에 삽입
}





/* 공통 적용 css */
function insertCommonCss(){
    /* custom css */
    let siteName = 'common';
    const customCss = `
        .traceDiv {display:flex; justify-content:center; align-items:center; margin:1px; padding:10px; background-color:#f9f9f9; color:#666; font-size:12px; line-height:1em; text-align:center;}
        .display-none-important {display:none !important;}
        .hideDDAction {animation: fadeOutElement 0.3s 1 forwards ease;}
        @keyframes fadeOutElement {
            0% {}
            100% {height:0; margin:0; padding:0; opacity:0; transform:scale(0.5); transform-origin:50% 0; z-index:0; overflow:hidden;}
        }
    `;
    insertCustomCss(customCss, siteName);
    /* // custom css */
}
insertCommonCss();





function removeElements(targets) {
    targets.forEach(item => {
        // selector는 단일 문자열로 처리 (여러 개 선택됨)
        const elements = document.querySelectorAll(item.selector);

        // 해당 selector에 매칭되는 요소가 하나도 없으면 종료
        if (elements.length === 0) return;

        if (item.extra) {
            item.extra(elements);  // elements 전달도 가능
            // return;  // elements 전달도 가능
        };

        // extra가 없으면 → 여러 요소 모두 처리
        elements.forEach(el => {
            conAreaDel(el, item.removeFlag);
        });
    });
}





function removeParentElements(targets, parentBloon) {
    targets.forEach(item => {
        // selector는 단일 문자열로 처리 (여러 개 선택됨)
        const elements = document.querySelectorAll(item.selector);

        // 해당 selector에 매칭되는 요소가 하나도 없으면 종료
        if (elements.length === 0) return;

        if (item.extra) {
            item.extra(elements);  // elements 전달도 가능
            // return;  // elements 전달도 가능
        };

        // extra가 없으면 → 여러 요소 모두 처리
        elements.forEach(el => {
            if(parentBloon){
                conAreaDel(el.parentElement, item.removeFlag);
            } else {
                conAreaDel(el, item.removeFlag);
            }
        });
    });
}





function applyElementStyle(targets, parentBloon, hideType) {
    targets.forEach(item => {
        // selector는 단일 문자열로 처리 (여러 개 선택됨)
        const elements = document.querySelectorAll(item.selector);

        // 해당 selector에 매칭되는 요소가 하나도 없으면 종료
        if (elements.length === 0) return;

        if (item.extra) {
            item.extra(elements);  // elements 전달도 가능
            // return;  // elements 전달도 가능
        };

        // extra가 없으면 → 여러 요소 모두 처리
        elements.forEach(el => {
            conAreaDel(el, item.removeFlag);
        });
    });
}








window.addEventListener("load", function(){
    console.log("load");

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
})
