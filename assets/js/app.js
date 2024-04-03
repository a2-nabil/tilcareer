// window.addEventListener("scroll", function () {
//   const courseSidebar = document.querySelector(".a2n-course_sidebar");
//   const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

//   if (scrollTop > 100) {
//     courseSidebar.classList.add("a2n_sticky");
//   } else {
//     courseSidebar.classList.remove("a2n_sticky");
//   }
// });

document.addEventListener("DOMContentLoaded", function () {
  // common functions for tab sections
  function setupTabNavigation(
    navLinksSelector,
    tabsSelector,
    navActiveClass,
    tabsActiveClass
  ) {
    const navLinks = document.querySelectorAll(navLinksSelector);
    const tabs = document.querySelectorAll(tabsSelector);

    navLinks.forEach(function (link) {
      link.addEventListener("click", function (event) {
        event.preventDefault();
        navLinks.forEach(function (navLink) {
          if (navLink !== link) {
            navLink.classList.remove(navActiveClass);
          }
        });
        link.classList.add(navActiveClass);
        const targetTabId = this.getAttribute("href").substring(1);
        switchTab(targetTabId, tabs, tabsActiveClass);
      });
    });
  }

  function switchTab(tabId, tabs, tabsActiveClass) {
    tabs.forEach((tab) => tab.classList.remove(tabsActiveClass));
    const selectedTab = document.getElementById(tabId);
    if (selectedTab) {
      selectedTab.classList.add(tabsActiveClass);
    }
  }

  // courses tab
  setupTabNavigation(
    ".a2n_nav-list li a",
    ".a2n_course_tabs",
    "a2n_active",
    "a2n_active_tab"
  );
});
