/* 
MAIN.JS 
-> This file contains the script for behaviors that are shared between all pages
*/


// this will highlight the currently active page
function currentPageHighlighter()
{
    const navigationElement = document.querySelectorAll('nav > div');
    let currentPage;
    if (document.URL.includes("about.html"))
        currentPage = navigationElement[1];
    else if (document.URL.includes("works.html"))
        currentPage = navigationElement[2];
    currentPage.classList.add('selected');
}

function main()
{
    currentPageHighlighter();
}

main();