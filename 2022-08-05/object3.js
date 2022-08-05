// 비구조화 할당 = 객체 구조 분해
//ESC6이상 문법
// 객체에서 특정값을 추출하는 것. 특정값들을 객체에서 뺴온다.

const ironMan = {
    name: '토니 스타크',
    actor: '로버트 다우니 주니어',
    alias: '아이언맨',
};

const { name } = ironMan;
console.log(name);

const captainAmerica = {
    name: '스티븐 로저스',
    actor: '크리스 에반스',
    alias: '캡틴 아메리카'
};

function print({ alias, name, actor}) {
    
    const text = `${alias}(${name})역할을 맡은 배우는 ${actor}입니다.`;
    console.log(text);
}

print(ironMan);
print(captainAmerica);