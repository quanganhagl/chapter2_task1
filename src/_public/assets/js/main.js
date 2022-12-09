// align link1 elem: logo, link 1, breadcrumb header home
// ***************************************************************
var logo = document.querySelector(".c-header__img");
var home = document.querySelector(".c-header__1");

var link1 = document.querySelector(".c-header__2");
var link2 = document.querySelector(".c-header__3");

var headerBreadcrumbHome = document.querySelector(".c-header__home");
// var headerBreadcrumbHomeLogo = document.querySelector(".c-header__home::before");

if (document.title == "Link 1") {
  // logo.style.transform = "translate(0, 1px)";
  link1.style.transform = "translate(3px, 0px)";
  // headerBreadcrumbHome.style.transform = "translate(-1px, 2px)";
  // headerBreadcrumbHome.style.fontWeight = "500";
  // headerBreadcrumbHomeLogo.style.transform = "translate()";
}

if (document.title == "Link 2") {
  home.style.transform = "translate(-2px, 0px);";
  // headerBreadcrumbHomeLogo.style.transform = "translate()";
}

// Đường link in đậm khi truy cập trang nhất định
// ***************************************************************

if (document.title == "Home page") {
  home.classList.add("c-header__link--bold");
  link1.classList.remove("c-header__link--bold");
  link2.classList.remove("c-header__link--bold");
}
if (document.title == "Link 1") {
  home.classList.remove("c-header__link--bold");
  link1.classList.add("c-header__link--bold");
  link2.classList.remove("c-header__link--bold");
}
if (document.title == "Link 2") {
  home.classList.remove("c-header__link--bold");
  link1.classList.remove("c-header__link--bold");
  link2.classList.add("c-header__link--bold");
}

// breadcrumb thay đổi khi truy cập link nhất định

//breadcrumb header

var headerBreadcrumbLink1 = document.querySelector(".c-header__link1");
var headerBreadcrumbLink2 = document.querySelector(".c-header__link2");

if (document.title == "Home page") {
  headerBreadcrumbHome.style.textDecoration = "none";
  headerBreadcrumbLink1.classList.remove("c-header__link--displayed");
  headerBreadcrumbLink2.classList.remove("c-header__link--displayed");
}
if (document.title == "Link 1") {
  headerBreadcrumbLink1.classList.add("c-header__link--displayed");
  headerBreadcrumbLink2.classList.remove("c-header__link--displayed");
}
if (document.title == "Link 2") {
  headerBreadcrumbLink1.classList.remove("c-header__link--displayed");
  headerBreadcrumbLink2.classList.add("c-header__link--displayed");
}

//breadcrumb footer

var footerBreadcrumbHome = document.querySelector(".c-footer__home");
var footerBreadcrumbLink1 = document.querySelector(".c-footer__link1");
var footerBreadcrumbLink2 = document.querySelector(".c-footer__link2");
// if (document.title == "Home page") {
//   footerBreadcrumbLink1.classList.remove("c-footer__link--displayed");
// } else if (document.title == "Link 1") {
//   footerBreadcrumbLink1.classList.add("c-footer__link--displayed");
// }

if (document.title == "Home page") {
  footerBreadcrumbHome.style.textDecoration = "none";
  footerBreadcrumbLink1.classList.remove("c-footer__link--displayed");
  footerBreadcrumbLink2.classList.remove("c-footer__link--displayed");
}
if (document.title == "Link 1") {
  footerBreadcrumbLink1.classList.add("c-footer__link--displayed");
  footerBreadcrumbLink2.classList.remove("c-footer__link--displayed");
}
if (document.title == "Link 2") {
  footerBreadcrumbLink1.classList.remove("c-footer__link--displayed");
  footerBreadcrumbLink2.classList.add("c-footer__link--displayed");
}
