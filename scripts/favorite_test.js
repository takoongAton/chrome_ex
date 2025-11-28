console.log("favorite.js");


window.addEventListener("load", function(){

/* ========== danawa(다나와) ========== */
if(url.includes("danawa.com")){
    
    /* custom css */
    let siteName = 'danawa';
    const customCss = `
        .category__list__btn {box-sizing:border-box; justify-content:space-between; width:100%; height:auto; padding-right:8px; font-size:14px; color:#fff; font-weight:600; text-indent:0; text-decoration:none; text-shadow:0 1px 2px rgba(0,0,0,0.16);}
        .category__list__row.active .category__list__btn {color:#000; text-decoration:none;}
        .aside-vs>.box__layer>.box__inner {width:270px;}
        .aside-vs>.box__layer .list__slot .box__product .box__thumbnail {width:80px;}
        // .category__list__btn:before {content:unset;}

        #brandHallArea {display:none !important;}
    `;
    insertCustomCss(customCss, siteName);
    /* // custom css */


    // 상단 서브 메뉴 (비교사이트)
    let cwGnb = this.document.querySelector(".cw-gnb");
    if(cwGnb) {
        conAreaDel(cwGnb, false);
    }
}

/* // danawa(다나와) */



/* danawa(다나와 - 상품 목록) */
if(url.includes("prod.danawa.com")){
    /* 배너 영역 삭제 관련 */
    // 선택자와 conAreaDel의 두 번째 인자를 한 번에 정의
    const danawaElementsToRemove = [
        { selector: "#main-middlebnr", removeFlag: true }, // 메인 중앙 배너 영역 삭제
        { selector: ".ttop_banner", removeFlag: false }, // 다나와 상단 광고,
        { selector: "#mainAdReader", removeFlag: true }, // 상품 목록 상단 광고 영역 애드 리더
        { selector: "#adPointArea", removeFlag: true }, // 상품 목록 중간 광고 영역 : 애드 포인트
        { selector: "#premiumBanner", removeFlag: false }, // 왼쪽 날개배너 프리미엄 배너
        { selector: "#naverPowerShoppingArea", removeFlag: true }, // 상품 목록 페이지 상단 광고 영역 : 이런 상품 어때요
        { selector: "#powerClickListArea", removeFlag: true }, // 상품 목록 페이지 하단 광고 영역 : 파워클릭
        { selector: ".aside_media", removeFlag: false, extra: () => {
            const danawaContainer = document.querySelector("#danawa_container");
            if (danawaContainer) danawaContainer.style.paddingRight = "0";
        }}, // 상품목록 우측 영역
    ];
    
    // 공통 함수로 처리
    removeElements(danawaElementsToRemove);
    





    /* 상품 비교 선택시 aside-vs 영역 간섭 수정 */
    // 감시 대상 요소 선택
    const targetElement = document.querySelector('.aside-vs');
    // padding을 변경할 컨테이너 선택
    const danawaContainer = document.querySelector("#danawa_container");
    // 화면 너비 기준점
    const breakpoint = 1520;

    if (targetElement && danawaContainer) {
        // MutationObserver 콜백 함수 정의
        const observer = new MutationObserver((mutationsList) => {
            for (const mutation of mutationsList) {
                // 클래스 속성 변경일 경우만 처리
                if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                    const hasOnClass = targetElement.classList.contains('on');

                    // 화면 너비가 breakpoint보다 작으면 padding 조정
                    if (window.innerWidth < breakpoint) {
                        danawaContainer.style.paddingRight = hasOnClass ? "280px" : "0";
                    }
                }
            }
        });

        // Observer 설정: class 속성 변경만 감지
        observer.observe(targetElement, {
            attributes: true,
            attributeFilter: ['class']
        });
    }
    /* // 상품 비교 선택시 aside-vs 영역 간섭 수정 */

}
/* // danawa(다나와 - 상품 목록) */
/* // ========== danawa(다나와) ========== */





/* ========== https://namu.wiki/ (나무위키) ========== */
if(url.includes("https://namu.wiki/w/")){
    setTimeout(() => {
        let googleAdsIframe = document.querySelectorAll("iframe");
        if(googleAdsIframe.length > 0) {
            googleAdsIframe.forEach(function(item,index){

                let iframeDiv = item.closest("div");
                let iframeDivId;
                if(iframeDiv) {
                    iframeDivId = iframeDiv.getAttribute("id");
                }
                if(iframeDivId && typeof iframeDivId === "string" && iframeDivId.includes("google_ads_iframe")) {
                    
                    let secondDivTest = iframeDiv.parentElement;
                    let thirdDivTest = secondDivTest.parentElement;
                    console.log(secondDivTest);
                    console.log(thirdDivTest);
                    fadeOutElement(thirdDivTest, true);
                    // thirdDivTest.style.display = "none";
                }
            })
        }
    }, 1000)

    setTimeout(() => {
        let divTemp = document.querySelectorAll("div");
        if(divTemp.length > 0){
            divTemp.forEach(function(item,index){
                let dddiv = item;
                let xxxdiv;
                if(dddiv) {
                    xxxdiv = dddiv.getAttribute("id");
                }
                if(xxxdiv  &&  typeof xxxdiv === "string" && xxxdiv.includes("google_ads_iframe")){
                    let firstDiv = item.parentElement;
                    let secondDivTest = firstDiv.parentElement;
                    fadeOutElement(secondDivTest, true);
                    // secondDivTest.style.display = "none";
                }
            })
        }
        
    }, 1000)

}
/* // ========== https://namu.wiki/ (나무위키) ========== */






/* ========== 네이버 ========== */
if (url.includes("naver.com/")){
    /* custom css */
    let siteName = 'naver';
    const customCss = `
        /* 메인 상단 광고영역 크기 강제 줄이기 */
        #header.type_ad .header_inner {padding-bottom:0 !important;}

        /* 뉴스 세로 구분선 삭제 */
        .ct_scroll_wrapper::after {display:none !important;}
    `;
    insertCustomCss(customCss, siteName);
    /* // custom css */
}

if (url.includes("https://www.naver.com/")){
    /* 네이버 메인 */
    let container = document.querySelector("#wrap");
    if(container) {
        console.log("네이버 메인 전용");
        setTimeout(() => {
            let searchRightFirst = document.querySelector("#search-right-first"); // 메인 검색 좌측 배너 영역
            if(searchRightFirst) {
                console.log(searchRightFirst);
                searchRightFirst.style.display = "none";
            }

            let searchRightSecond = document.querySelector("#search-right-second"); // 메인 검색 우측 배너 영역
            if(searchRightSecond) {
                console.log(searchRightSecond);
                searchRightSecond.style.display = "none";
            }


            

            // 메인 배경 광고.
            let ad_premium_area = document.querySelector("#ad_premium_area");
            if(ad_premium_area) {
                conAreaDel(ad_premium_area);
            }

            
            // 메인 검색 하단 센터 광고
            let ad_timeboard = document.querySelector("#ad_timeboard");
            if(ad_timeboard) {
                conAreaDel(ad_timeboard);
            }

            let ddss = document.querySelectorAll(".Layout-module__banner_area___CUXNe"); // 메인 로그인 하단 광고
            ddss.forEach(function(item){
                item.style.opacity = 0;
                item.style.width = 0;
                item.style.height = 0;
                // item.style.display = "none";
            })
            let diejfie = document.querySelector(".Layout-module__content_area___b_3TU + a");
            if(diejfie) {
                diejfie.style.opacity = 0;
                diejfie.style.width = 0;
                diejfie.style.height = 0;
                // diejfie.style.display = "none";
            }
            // this.document.querySelector(".Layout-module__banner_area___CUXNe").style.display = "none";
            // "#newsstand + a" // 네이버 메인 모듈 광고 Layout-module__banner_area ()
            // 로딩 후 추가 삽입으로 인해 불가.

            let newsstand = container.querySelector("#newsstand");
            if(newsstand){
                newsstand.style.marginTop = 0 + 'px';
            }

            let iframe_rightShopping = this.document.querySelectorAll("iframe");
            if(iframe_rightShopping.length > 0){
                console.log("iframe_rightShopping")
                iframe_rightShopping.forEach(function(item) {
                    // item.style.border = "1px solid #ff6600";
                    let iframeTitle = item.getAttribute("title");
                    if(iframeTitle && typeof iframeTitle === "string" && iframeTitle.includes("right-shopping")){
                        console.log("asdfasfas")
                    }
                });
            }
            
        }, 0);        
    }
    /* // 네이버 메인 */
}


// 네이버 검색 결과 화면 상단 파워링크 영역 삭제 
if(url.includes("https://search.naver.com/search.naver")){
    let ad_section = this.document.querySelector(".ad_section");
    if(ad_section){
        console.log(ad_section);
        fadeOutElement(ad_section, true)
    }
}
// 네이버 검색 결과 화면 상단 파워링크 영역 삭제


/* 네이버 뉴스 */
if (url.includes("news.naver.com")){
    let outsideArea = document.querySelector(".outside_area");
    if(outsideArea) {
        conAreaHidden(outsideArea);
    }

    let mainAside = document.querySelector("aside.main_aside");
    if(mainAside) {
        conAreaHidden(mainAside);
    }

    let newsctWrapper = document.querySelector(".newsct_wrapper");
    if(newsctWrapper) {
        newsctWrapper.style.margin = "0 auto";
        newsctWrapper.style.padding = "30px 0";
        newsctWrapper.style.zIndex = 1;
    }

    // 언론사 구독 후 기사보기
    let subscribeCtaLayer = document.querySelectorAll(".subscribe_cta_layer")
    if(subscribeCtaLayer.length > 0){
        subscribeCtaLayer.forEach(function(item){
            conAreaDel(item);
        })
    }

    let pressAside = document.querySelector("section.press_aside");
    if(pressAside) {
        conAreaDel(pressAside);
    }
    
    let adArea = this.document.querySelector(".ad_area");
    if(adArea) {
        conAreaDel(adArea);
    }
}
// 네이버 뉴스
/* // ========== 네이버 ========== */





/* ========== https://manatoki468.net/(마나토끼) ========== */
if(url.includes("manatoki")){
    
    let mainBannerView = this.document.querySelector("#main-banner-view");
    if(mainBannerView) {
        fadeOutElement(mainBannerView, true);
        // conAreaDel(mainBannerView, true);
    }

    let hd_pop = this.document.querySelector("#hd_pop"); // 메인페이지 팝업
    if(hd_pop){
        let hd_pop_btns = hd_pop.querySelectorAll("button.hd_pops_close");
        if(hd_pop_btns && hd_pop_btns.length > 0) {
            hd_pop_btns.forEach(function(item){
                item.click();
            })
        }
    }
    
    if(url.includes("comic")){ // 뷰페이지에서만 가림
        let atWrap = this.document.querySelector("#at-wrap");
        if(atWrap) {
            atWrap.style.paddingRight = "0"
        }
        
        let atRight = this.document.querySelector("#at-right");
        if(atRight) {
            conAreaDel(atRight, true);
        }
    }
} // https://manatoki468.net/


// https://manatoki468.net/
if(url.includes("manatoki")){
    /* 배너 영역 삭제 관련 */
    // 선택자와 conAreaDel의 두 번째 인자를 한 번에 정의
    const elementsToRemove = [
        { selector: "#id_mbv", removeFlag: true }, // ㅇㅇㅇ
        { selector: ".board-tail-banner", removeFlag: true }, // ㅇㅇㅇ
/*
        { selector: "ㅇㅇㅇ", removeFlag: true }, // ㅇㅇㅇ
        { selector: "ㅇㅇㅇ", removeFlag: false, extra: () => {
            const danawaContainer = document.querySelector("#danawa_container");
            if (danawaContainer) danawaContainer.style.paddingRight = "0";
        }}, // 상품목록 우측 영역
*/
    ];
    
    // 배열을 순회하며 각 객체를 처리
    elementsToRemove.forEach(item => {
        const el = document.querySelector(item.selector);
        if (el) {
            // 추가 작업이 있을 경우 실행
            if (item.extra) item.extra();
            conAreaDel(el, item.removeFlag);
        }
    });
    /* // 배너 영역 삭제 관련 */
}
// // https://manatoki468.net/
/* // ========== https://manatoki468.net/(마나토끼) ========== */





/* ========== gemini.google.com 또는 chatgpt.com 감지 ========== */
if (/(chatgpt\.com|gemini\.google\.com)/.test(url)) {
    
    // 이미 스타일이 삽입되었다면 다시 추가하지 않도록 방지
    // if (!document.getElementById("gpt-style")) {
        /* custom css */
        let siteName = 'gpt_gemini';
        const maxWidth = 1440;
        const customCss = `
            /* 컨텐츠 가로 크기 확대 */
            .conversation-container,
            .conversation-container > user-query,
            .text-base > div:first-of-type {max-width:${maxWidth}px !important;}
            .w-fit {width:auto;}
        `;
        insertCustomCss(customCss, siteName);
        /* // custom css */
    // }
}
/* // ========== gemini.google.com 또는 chatgpt.com 감지 ========== */





/* ========== utweb torrent ========== */
    if(url.includes("utweb")){

        /* custom css */
        let siteName = 'utweb';
        const customCss = `
            /* ㅇㅇㅇ */
            .card-container {display:none !important;}

            /* 상단 영역 줄이기 */
            .media-library-top-container.show-ad {top:0 !important;}
        `;
        insertCustomCss(customCss, siteName);
        /* // custom css */


        setTimeout(() => {
            /* // 왜 있는지 확인 후 삭제
            let cardContainer = this.document.querySelectorAll(".card-container");
            if(cardContainer) {
                cardContainer.forEach(function(item){
                    //item.style.display = "none";
                })
            }
            */
            let mediaLibraryTopContainer = this.document.querySelector(".media-library-top-container");
            if(mediaLibraryTopContainer) {
                mediaLibraryTopContainer.classList.remove("show-ad");
            }
        }, 100);
    }
/* // ========== utweb torrent ========== */





/* ========== coupang.com/ ========== */
    if(url.includes("https://www.coupang.com/")){

        /* custom css */
        let siteName = 'coupang';
        const customCss = `
            /* ㅇㅇㅇ */
        `;
        insertCustomCss(customCss, siteName);
        /* // custom css */

        // 쿠팡 상단 광고
        let ad_timeboard = document.querySelector("#coupang-banner");
        if(ad_timeboard) {
            conAreaDel(ad_timeboard);
        }
    }
/* // ========== coupang.com/ ========== */





/* ========== wfwf.com/ ========== */
    if(url.includes("wfwf")){

        /* custom css */
        let siteName = 'wfwf';
        const customCss = `
            /* ㅇㅇㅇ */
        `;
        insertCustomCss(customCss, siteName);
        /* // custom css */



        // 페이지 상단 광고 영역
        let ad_timeboard = document.querySelector("#ㅇㅇㅇ");
        if(ad_timeboard) {
            conAreaDel(ad_timeboard);
        }
    }
/* // ========== wfwf.com/ ========== */





    if (url.includes("daum.net")) {
        /* custom css */
        let siteName = 'daum';
        const customCss = `
            /* 다음 뉴스 중앙 정렬 */
            .conExtend {float:unset; margin:0 auto; padding:0;}
        `;
        insertCustomCss(customCss, siteName);
        /* // custom css */
    }

    
    /* 다음 메인 */
    if (url.includes("https://www.daum.net/")){
        let daumMain = document.querySelectorAll(".inner_main .board_g.board_banner");
        if(daumMain) {
            daumMain.forEach(function(item){
                conAreaDel(item);
            })
        }

        /* 메인 쇼핑 */
        let board_shopping = this.document.querySelector(".board_g.board_shopping");
        if(board_shopping) {
            board_shopping.style.display = "none";
        }
        /* // 메인 쇼핑 */

        let daumMainAsideBnr = document.querySelectorAll(".box_g.box_adgoogle");
        if(daumMainAsideBnr) {
            daumMainAsideBnr.forEach(function(item){
                conAreaDel(item);
            })
        }

        // 컨텐츠 영역 최상단 광고 영역
        let kakao_ad_area = this.document.querySelector(".kakao_ad_area");
        if(kakao_ad_area) {
            kakao_ad_area.closest(".box_g").style.display = "none";
        }


        /* 메인 추천 게임 */
        let box_game = this.document.querySelector(".box_g.box_game")
        if(box_game) {
            box_game.style.display = "none";
        }
        /* // 메인 추천 게임 */

        /* 메인 핫딜 */
        // shoppinghow-1739518615497
        let hotdeal = this.document.querySelectorAll(".box_g > iframe");
        if(hotdeal) {
            hotdeal.forEach(function(item){
                let attrrrr = item.getAttribute("id");;
                if(attrrrr.includes("shoppinghow")){
                    item.closest(".box_g").style.display = "none";
                }
            })
        }
        /* // 메인 핫딜 */

        /* 메인 aside 랭킹 */
        let box_ranking = this.document.querySelector(".box_g.box_ranking")
        if(box_ranking) {
            box_ranking.style.display = "none";
        }
        /* // 메인 aside 랭킹 */
    }
    /* // 다음 메인 */


    /* 다음 뉴스 */
    if (url.includes("v.daum.net")){
    
        /* 기사, 블로그성 기사 컨텐츠 중앙 정렬 */
        let mainContent = document.querySelector("div.main-content");
        if(mainContent) {
            conAreaExtend(mainContent);
            mainContent.classList.add("conExtend");
        }

        /* 기사 중간 광고 영역 */
        let adBody2 = document.querySelector("div.ad_body2")
        if(adBody2) {
            // conAreaHidden(adBody2);
            conAreaDel(adBody2);
        }

        /* 기사 하단 댓글 영역 */
        let ttalkView = document.querySelector("div.ttalk_view");
        if(ttalkView) {
            conAreaHidden(ttalkView);
        }

        /* 기사 우측, 블로그성 기사 우측 영역 */
        let mainEtc = this.document.querySelector(".main-etc");
        if(mainEtc) {
            conAreaDel(mainEtc);
        }
    }




    // 다음 검색 결과 화면
    if(url.includes("https://search.daum.net/")){
        /* 검색결과 화면의 파워링크, 스페셜링크, 프리미엄링크, 애드센스, 스폰서 박스(aside) 삭제 */
        // let ad_sch = this.document.querySelectorAll(".ad_sch, .content_sponso");
        // if(ad_sch.length > 0){
        //     ad_sch.forEach(function(item){
        //         let itemTest = item.parentElement;
        //         conAreaDel(itemTest);
        //     })
        // }
        const daumElementsToRemove = [
            { selector: ".ad_sch", removeFlag: false }, // 파워링크(#n0nlColl), 스페셜링크(#splinkColl), 프리미엄링크(.adLinkColl), 파워쇼핑(#n0nsColl), 애드센스(#adSenseColl)
            // { selector: "#shoppingColl", removeFlag: false }, // 쇼핑하우 (검색 쇼핑 목록)
            { selector: ".content_sponsor", removeFlag: false }, // aside 스폰서박스
        ];
        
        // 공통 함수로 처리
        removeParentElements(daumElementsToRemove, true); // 상위 태그 삭제.
        
    }
    // 다음 검색 결과 화면 (https://search.daum.net/...)

})