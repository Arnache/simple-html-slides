// simple-html-slides
// version 1.1
// CC-By-SA 4.0 Intl
// Author: Arnaud Chéritat

let pages;
let href;
let pageName;
let pageIndex;

/* slides */

function testAndGo(newPage) {
 var req = new XMLHttpRequest();
 req.onreadystatechange = function() {
   if(this.readyState == 4) {
     if(this.status==200) {
       window.location.href = newPage;
     }
   }
 }
 req.open("HEAD", newPage);
 req.send();
}

function forward() {
  if(pageIndex < pages.length-1) testAndGo(pages[pageIndex+1]);
}

function backward() {
  if(pageIndex > 0) testAndGo(pages[pageIndex-1]);
}

function initSlides() {
  href = window.location.href;
  pageName = href.substring(href.lastIndexOf('/') + 1);

  pageIndex = pages.indexOf(pageName);
  if(pageIndex<0) pageIndex = 0;

  document.addEventListener('keydown',  e => {
    if(e.key=="PageDown") {
      forward();
    }
    else if(e.key=="PageUp") {
      backward();
    }
    else if(e.key=="Home" && pageIndex > 0 ) {
      testAndGo(pages[0]);
    }
    else if(e.key=="End" && pageIndex < pages.length-1 ) {
      testAndGo(pages[pages.length-1]);
    }
  });
}

/* reveal */

let revList;
let index;

function next() {
  if(index<revList.length) {
    revList[index].style.visibility = "visible";
    index++;
  }
  else {
    forward();
  }  
}

function prev() {
  if(index>0) {
    index--;
    revList[index].style.visibility = "hidden";
  }
  else {
    backward();
  }
}

function initReveal() {
  revList = document.querySelectorAll(".reveal");
  index = 0;

  document.addEventListener('keydown',  e => {
    if(e.key==" " || e.key=="ArrowRight")
      next();
    else if(e.key=="ArrowLeft")
      prev();
  });
}

export default function init(pageList = []) {
  pages = pageList;
  const style = document.createElement("style");
  document.head.appendChild(style);
  style.sheet.insertRule(".reveal { visibility: hidden; }");
  document.addEventListener("DOMContentLoaded", () => {
    initSlides();
    initReveal();
  });
} 
