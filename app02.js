// 태그 가져오는 방법 2가지
// const timeElement = document.getElementById('time');
const timeElement = document.querySelector('h1'); 
// querySelector는 id나 calss(css선택자)로 사용가능

// function clickEvt(){
//     timeElement.style.color = 'tomato';
//     timeElement.style.backgroundColor = '#eee';
//     timeElement.innerText = '12:00'
// }

// timeElement.addEventListener('click', clickEvt); // 여기서 호출 시 클릭전에 실행됨
// timeElement.addEventListener('mouseover', clickEvt) // 마우스 갖다댔을 때
// window.addEventListener('copy', clickEvt); // 복사 사용시
// window.addEventListener('resize', clickEvt); // 창 크기 변경시


document.title = '♥♥♥♥♥♥♥♥♥' 


// function colorChange(){
//     if(timeElement.style.color === 'tomato'){
//         timeElement.style.color = 'blue';
//     }else{
//         timeElement.style.color = 'tomato';
//     }
// }
// timeElement.addEventListener('click', colorChange);


function numChange(){
    timeElement.innerText = "12:00";
}
timeElement.addEventListener('click', numChange);