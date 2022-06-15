// show/hide menu: toggle menu
const toggleMenu = (toggleID, navListId) => {
        //html -> js
        const toggle = document.getElementById(toggleID);
        const navList = document.getElementById(navListId);
        const toggleIcon = toggle.getElementsByTagName('i')[0];

        const clickHandler  = () =>{
            //show/hidde menu: .show-menu
            navList.classList.toggle('show-menu')
            //change toggle icon: bx-menu <-> bx-x
            toggleIcon.classList.toggle('bx-menu'); //bx-menu클래스가 있다면 없애기, 없다면 생기기
            toggleIcon.classList.toggle('bxs-x-square');
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