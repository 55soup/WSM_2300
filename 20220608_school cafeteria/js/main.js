// show/hide menu: toggle menu
const toggleMenu = (toggleID, navListId) => {
  //html -> js
  const toggle = document.getElementById(toggleID);
  const navList = document.getElementById(navListId);
  const toggleIcon = toggle.getElementsByTagName("i")[0];

  const clickHandler = () => {
    //show/hidde menu: .show-menu
    navList.classList.toggle("show-menu");
    //change toggle icon: bx-menu <-> bx-x
    toggleIcon.classList.toggle("bx-menu"); //bx-menu클래스가 있다면 없애기, 없다면 생기기
    toggleIcon.classList.toggle("bxs-x-square");
  };

  if (toggle && navList) {
    //toggle click
    toggle.addEventListener("click", clickHandler);
    //show/hide menu : show-menu
  }
};
toggleMenu("nav-toggle", "nav-list");
// const say = () => { //화살표함수
//     console.log("hello world4");
// }
// const say = function (){ //함수표현식
//     console.log("hello world2");
// }
// function say(){ //함수선언식
//     console.log("hello world");
// }

const addNow = (mainCardId) => {
  // html -> js
  const mainCard = document.getElementById(mainCardId);
  // ex) 예시 점수 구하기
  // const score = 77;
  // result ='';
  // if(score > 90)
  //   result = 'A';
  // else if(score > 80)
  //   result = 'B';
  // else if(score > 70)
  //   result = 'C'
  // else 
  //   result = 'F'
  // console.log(result);

  // 지금 몇시? 다음 식사 -> 몇 번째 카드인지
  let today = new Date();
  let hour = today.getHours();
  let minute = today.getMinutes();
  console.log(`${hour}시 ${minute}분`);
  // 지금 시각 -> index
  /* 연습 */
  // calMinute = hour * 60 + minute; //현재 시와 분을 통해 분으로 단위 통일
  // if (calMinute >= 1090) index = 0;  // 석식 끝: 18:10 -> 0
  // else if (calMinute >= 790) index = 2; // 중식 끝: 13:10 -> 2
  // else if (calMinute >= 450) index = 1; // 조식 끝: 7:30 -> 1
  // else index = 0;

  /* 수업 */
  let minutes = hour * 60 + minute;
  let index = 0;
  if (18 * 60 + 10 <= minutes)
    index = 0;
  else if(13 * 60 + 10 <= minutes)
    index = 2;
  else if(7 * 60 + 30 <= minutes)
    index = 1;
  else
    index = 0;
  /*7:30~13:09
    점심
    13:10~18:09
    석식
    18:10~7:29
    조식*/
  let selectedCard = mainCard.getElementsByClassName("card")[index];
  // now 클래스 추가
  selectedCard.classList.add("now");
};
addNow("main-card");
