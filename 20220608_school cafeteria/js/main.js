// show/hide menu: toggle menu
const toggleMenu = (toggleID, navListId) => {
    //html -> js
    const toggle = document.getElementById(toggleID);
    const navList = document.getElementById(navListId);

    const clickHandler = () => {
        //show/hidde menu: .show-menu
        navList.classList.toggle('show-menu')
    }

    if(toggle && navList){
        //toggle click
        toggle.addEventListener('click', clickHandler);
        //show/hide menu : show-menu
    }
}
toggleMenu('nav-toggle', 'nav-list');
// const say = () => { //화살표함수
//     console.log("hello world4");
// }
// const say = function (){ //함수표현식
//     console.log("hello world2");
// }
// function say(){ //함수선언식
//     console.log("hello world");
// }