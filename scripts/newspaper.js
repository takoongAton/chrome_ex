console.log("newspaper.js");




window.addEventListener("load", function(){

    /* 연합뉴스 (https://www.yna.co.kr/view) */
    if(url.includes("https://www.yna.co.kr/view")){

        /* custom css */
        let siteName = 'yna';
        const customCss = `
            .content03 .section01 {max-width:100% !important; width:100%;} // 컨텐츠 영역 확장.
        `;
        insertCustomCss(customCss, siteName);
        /* // custom css */


        // 페이지 상단 배너 
        let asideTopBnr01 = this.document.querySelector(".aside-top-bnr01");
        if(asideTopBnr01) {
            asideTopBnr01.classList.add(displayNoneImportant);
        }

        // aside 태그로 되어있는 것들 숨김 (광고영역)
        let asideBox = this.document.querySelectorAll("aside");
        if(asideBox.length > 0) {
            setTimeout(() => {
                asideBox.forEach(function(item,index){
                    item.classList.add(displayNoneImportant);
                })
            }, 0)
        }

        // 컨텐츠 우측 다른 기사 영역
        let section02 = this.document.querySelector(".section02");
        if(section02) {
            conAreaDel(section02, false);
        }
    }
    /* // 연합뉴스 (https://www.yna.co.kr/view ) */





    /* 여성신문 (https://www.womennews.co.kr/news) */
    if(url.includes("https://www.womennews.co.kr/news")){
        // 외부 광고영역 제거
        let adTemplate = this.document.querySelectorAll(".ad-template");
        if(adTemplate.length > 0) {
            setTimeout(() => {
                adTemplate.forEach(function(item,index){
                    item.classList.add(displayNoneImportant);
                })
            }, 0)
        }

        // 여성신문 자체 광고영역 제거
        let bannerBox = this.document.querySelectorAll(".banner_box");
        if(bannerBox.length > 0) {
            setTimeout(() => {
                bannerBox.forEach(function(item,index){
                    item.classList.add(displayNoneImportant);
                })
            }, 0)
        }

        // 후원하기 삭제
        let supportBox = this.document.querySelector("#support_box");
        if(supportBox) {
            supportBox.classList.add(displayNoneImportant);
        }

        // 우측 플로팅 배너 삭제
        let wpAdbnRoot = this.document.querySelector("#wp_adbn_root");
        if(wpAdbnRoot) {
            wpAdbnRoot.classList.add(displayNoneImportant);
        }
    }
    /* // 여성신문 (https://www.womennews.co.kr/news) */





    /* 이데일리 뉴스 */
    if(url.includes("edaily.co.kr")){

        /* 페이지 상단 광고 영역 */
        let special_area = this.document.querySelector(".special_area");
        if(special_area) {
            conAreaDel(special_area);
        }

        /* 페이지 우측 다른 기사 리스트 영역 */
        let aside = document.querySelector("#aside_right");
        if(aside) {
            conAreaDel(aside);
        }

        let floatingBnr = document.querySelector("section.center1080.position_r > span");
        if(floatingBnr) {
            conAreaDel(floatingBnr);
        }

        let contentBnr = document.querySelector("br + span");
        if(contentBnr) {
            conAreaDel(contentBnr);
        }

        let secondTextAD = document.querySelector(".second_textAD");
        if(secondTextAD) {
            conAreaDel(secondTextAD);
        }

        let newsDomino = document.querySelector(".news_domino");
        if(newsDomino) {
            conAreaDel(newsDomino);
        }

        let articleNewsetc = document.querySelector(".article_newsetc");
        if(articleNewsetc) {
            conAreaDel(articleNewsetc);
        }

        let newsAuthor = document.querySelector(".stiky_newscontainer");
        if(newsAuthor) {
            conAreaDel(newsAuthor);
        }

        /* Dable 광고 영역 */
        let boxshow_footer_dable = this.document.querySelector(".boxshow_footer_dable");
        if(boxshow_footer_dable) {
            conAreaDel(boxshow_footer_dable);
        }
        
        /* 오늘의 주요기사 */
        let aside_bottom = this.document.querySelector("#aside_bottom");
        if(aside_bottom) {
            conAreaDel(aside_bottom);
        }
    }





     // 한겨례 뉴스
    if(url.includes("hani.co.kr")){
        let aRight = this.document.querySelector(".a-right");
        let aLeft = this.document.querySelector(".a-left");
        if(aRight) {
            conAreaDel(aRight);
            conAreaExtend(aLeft)
            aLeft.style.margin = "0 auto";
            aLeft.style.padding = "0";
        }

        let adBox01 = this.document.querySelector("#ad_box01")
        let adBox01div = this.document.querySelector("#ad_box01 + div")
        if(adBox01) {
            conAreaStyle(adBox01div);
            conAreaDel(adBox01);
            aLeft.style.margin = "0 auto";
        }

        let articleText = this.document.querySelectorAll(".article-text ~ div")
        articleText.forEach(function(item){
            conAreaStyle(item);
        })
    }





    // etoday.co.kr/news
    if(url.includes("etoday.co.kr/news")){
        let rContentModule = this.document.querySelector(".r_content_module");
        if(rContentModule) {
            conAreaStyle(rContentModule);
        }

        let lContentModule = this.document.querySelector(".l_content_module");
        if(lContentModule) {
            conAreaExtend(lContentModule)
        }

        let quickLeft = this.document.querySelector("#quick_left");
        if(quickLeft) {
            conAreaStyle(quickLeft);
        }

        let quickRight = this.document.querySelector("article.containerWrap > span");
        if(quickRight) {
            conAreaStyle(quickRight);
        }

        let viewInnerAd = this.document.querySelector(".articleView > p + span");
        if(viewInnerAd) {
            conAreaStyle(viewInnerAd);
        }

        // 주요 뉴스
        let majListWrap = this.document.querySelector(".maj_list_wrap"); 
        if(majListWrap) {
            conAreaStyle(majListWrap);
        }
    }

});