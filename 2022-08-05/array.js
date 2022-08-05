//배열은 여러개의 항목이 들어있는 리스트.

const array = [1,2,3,4,5];
console.log(array[4]);

const objects = [
    {name: '멍멍이'}, 
    {name: '야옹이'}
];

console.log(objects);

objects.push({ //배열에 새로운 항목 추가
    name: '멍뭉이'
});

console.log(objects);

//배열의 크기를 조회한다. = 배열에 몇개의 항목이 있는지 알아낸다.

console.log(objects.length);

