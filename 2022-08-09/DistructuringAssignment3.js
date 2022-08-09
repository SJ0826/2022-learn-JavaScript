// 객체에 깊숙한 곳에 있는 값 꺼내오기.

const deepObject = {
  state : {
    information: {
      name: 'sujin',
      languages : ['korean', 'english', 'chinese']
    }
  },
  value: 5
}

 //방법 1: 비구조화 할당 두번 사용하기
const { name, languages} = deepObject.state.information;
const { value } = deepObject;

const extracted = {
  name, // 객체의 키를 정할 때, 이미 있는 값이라면 값을 정해주는 것을 생략해도 된다.
  languages,
  value
};

console.log(extracted);

// 방법2. 비구조화할당을 한번하면서 여러값 빼오기
/*
const {
  state: {
    information {
      name, languages: [firstLang, secondLang]
    }
  },
  value
} = deepObject;

const extracted = {
  name, // 객체의 키를 정할 때, 이미 있는 값이라면 값을 정해주는 것을 생략해도 된다.
  firstLang, secondLang,
  value
};

console.log(extracted);
*/