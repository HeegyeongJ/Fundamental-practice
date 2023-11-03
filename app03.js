function sayHello(){
    console.log('안녕하세요')
}
setInterval(sayHello, 1000) // 1초마다 함수 호출
setTimeout(sayHello, 1000) // 1초뒤 함수 1회 호출



// function setTime(){
//     const time = new Date();
//     const min = time.getMinutes().toString().padStart(2, '0');
//     const sec = time.getSeconds().toString().padStart(2, '0');
//     const timeH1 = document.querySelector('.time');
//     timeH1.innerText = `${min}:${sec}`;
// }
// setInterval(setTime, 1000);


const start_time = new Date();
function timer(){
    const current_time = new Date();
    const passed_time = new Date(current_time - start_time);
    const min = passed_time.getMinutes().toString().padStart(2, '0');
    const sec = passed_time.getSeconds().toString().padStart(2, '0');
    const timeH1 = document.querySelector('.time');
    timeH1.innerText = `${min}:${sec}`
}
setInterval(timer, 1000);