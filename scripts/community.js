console.log("community.js");





/* dcinside */
if(url.includes("dcinside.com")){

    /* custom css */
    let siteName = 'dcinside';
    const customCss = `
        .gall_list tr.thum .gall_tit {height:auto;}
        .gall_list td {padding:10px;}
    `;
    insertCustomCss(customCss, siteName);
    /* // custom css */


    const dcInsideElementsToRemove = [
        { selector: ".issue_contentbox", removeFlag: false, extra: (elements) => {
            elements.forEach(el => {
                if (el) el.classList.add(displayNoneImportant);
            });
        }}, // 갤러리 리스트 상단
        { selector: "#taboola-right-rail-thumbnails", removeFlag: false, extra: (elements) => {
            elements.forEach(el => {
                if (el) el.classList.add(displayNoneImportant);
            });
        }}, // ㅇㅇㅇㅇ
        { selector: ".rightbanner1", removeFlag: false, extra: (elements) => {
            elements.forEach(el => {
                if (el) el.classList.add(displayNoneImportant);
            });
        }}, // ㅇㅇㅇㅇ
        { selector: ".stickyunit", removeFlag: false, extra: (elements) => {
            elements.forEach(el => {
                if (el) el.classList.add(displayNoneImportant);
            });
        }}, // ㅇㅇㅇㅇ
        { selector: ".dctrend_ranking", removeFlag: false, extra: (elements) => {
            elements.forEach(el => {
                if (el) el.classList.add(displayNoneImportant);
            });
        }}, // ㅇㅇㅇㅇ
    ];

    // 공통 함수로 처리
    removeElements(dcInsideElementsToRemove);
}
/* // dcinside */
