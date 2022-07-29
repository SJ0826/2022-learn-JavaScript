//블럭
{
    const name = "Mark";
    console.log(name);
 }

 // console. log(name)name; 블럭 밖에서 출력 코드를 작성하면 출력되지 않음.
 
 // 밖에서 안으로는 사용 가능.

 let age = 37;

 {
    age++;
    console.log(age); //안에서는 밖에 있는 변수를 알 수 있음.
 }

 console.log(age);

 // 블럭은 중첩도 가능하다.

// var 함수 스코프

var a =0;

(function() {
   a++;
   console.log(a);
})();

console.log(a);
 