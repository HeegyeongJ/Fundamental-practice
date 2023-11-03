// 계산기 만들기
const calculator = {
    plus : (a, b) => {
        return a + b;
    },
    minus : function(a, b){
        return a - b;
    },
    div : function(a, b){
        return a / b;
    }
}

console.log(calculator.plus(30, 30)); // 60
const plusVal = calculator.plus(50, 250);
console.log(plusVal); // 300
calculator.div(20, 2); // 10
calculator.minus(30, 3); // 27



const dc_price = (device, price) => {
    if(device === 'mac'){
        return price * 0.8 // 20%할인
    }else if(device === 'iPhone'){
        return prcie * 0.5; //50%할인
    }else{
        return price * 0.9; // 10%할인
    }
}
console.log(dc_price('appleWatch', 800)); // 720


// 반복문
for(let i=0; i<10; i++){
    console.log(i); // 0~9까지 각자 console에 출력
}