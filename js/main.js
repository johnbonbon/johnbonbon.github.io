const   navMenu = document.getElementById('nav-menu'),
        navToggle = document.getElementById('nav-toggle'),
        navClose = document.getElementById('nav-close')

// SHOW MENU

if(navToggle) {
    navToggle.addEventListener('click', () => { 
        navMenu.classList.add("show-menu")
    })
}

// MENU HIDDEN

if(navClose) {
    navClose.addEventListener('click', () => { 
        navMenu.classList.remove("show-menu")
    })
}

// REMOVE MENU MOBILE

const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')

    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

// CHANGE BACKGROUND HEADER

const scrollHeader = () => {
    const header = document.getElementById('header')

    this.scrollY >= 50 ? header.classList.add('bg-header')
                       : header.classList.remove('bg-header')
}
window.addEventListener('scroll', scrollHeader)


document.addEventListener('DOMContentLoaded', function () {
    const tabs = document.querySelectorAll('.menu__tab'); // Получаем все вкладки меню
    const contents = document.querySelectorAll('.menu__content'); // Получаем все контенты меню
  
    tabs.forEach(function (tab, index) {
      tab.addEventListener('click', function () {
        // Сначала скрываем все контенты
        contents.forEach(function (content) {
          content.style.display = 'none';
        });
        // Затем показываем контент, который соответствует кликнутой вкладке
        contents[index].style.display = 'block';
      });
    });
  });



  document.addEventListener('DOMContentLoaded', function() {
    const menuTabs = document.querySelectorAll('.menu__tabs .menu__tab');
    menuTabs.forEach(tab => {
      tab.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.querySelector('a').getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        targetElement.scrollIntoView({ 
          behavior: 'smooth' 
        });
      });
    });
  });
  
  
  