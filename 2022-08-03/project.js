/*
[Login Promise]
로그인은 axios를 사용했다.
axios는 http 프로토콜을 이용해서 데이터를 요청하고 받아올 수 있는 라이브러리.
axios는 모든 메소드들이 프로미스 형태로 지원된다.
then을 통해서 서버로부터 정상적인 데이터를 가져오게 되면 resolve되서 res라고 하는 데이터가 넘어온다.
*/
axios.post('http://api.marktube.tv/v1/me', {
    email,
    password,
}). then(res => {});

/*
[Login Async-Await]
aync await를 사용해서 API를 활용한다.
axios.post를 통해서 email과 password를 보내고 리턴되어 resolve된 값이 넘어오게 된다.
await를 통한 처리는 async 함수 안에 있어야 한다.
*/

const res = await axios.post('http://api.marktube.tv/v1/me', {
    email,
    password,
});

/* 
axios
브라우저 환경이나 node.j환경에서 똑같은 api로 클라이언트의 역할을 할 수 있게 도와주는 라이브러리.
게다가 프로미스를 베이스로 하고있다.
많은 개발자들이 사용한다.
*/
/*
DOMContentLoaded
최초 HTML문서가 완전히 로드 및 파싱되었을때 발생한다.
스타일시트나 이미지 및 서프브레임 로드가 끝나기를 기다리지 않는다.
*/
/*
localStorage
브라우저에 구현되어 있다.
스토리지 객체에 접근하게 해준다.
*/
/*
Window.location
페이지를 이동한다.
다른 주소를 assign해서 처리한다.
*/

function bindLogoutButton() {
    const bindLogout = document.querySelector('#btn_logout;');
    btnLogout.addEventListener('click', logout);
}

function getToken() {
    return localStorage.getItem('token');
}

async function getUserByToken(token) {
    try {
        const res = await axios.get('http://api.marktube.tv/v1/me', {
            header: {
            Authorization : 'Bearer ${token},'
            },
        });
        return res.data;
    }   catch(error) {
        console.log('getUserByToken error', error);
        return null;
    }
}

async function getBooks(token) {
    try {
        const res = await axios.get('http://api.marktube.tv/v1/book', {
            header: { // request 헤더
                Authorization: 'Bearer ${token}',
            },
        });
        return res.data; //data는 book목록
    } catch (error) {
        console.log('getBooks error', error);
        return null; // 책이 없다는 뜻.
    }
}

async function main() {
    // 버튼에 이벤트 알림
    bindLogoutButton(); // documnet의 querySelector함수로부터 아이디가 btn_logout인 dom을 얻어온다.

    // 로그인을 위해 토큰 체크
    const token = getToken();
    if (token === null) { // 값이 없다면 로그아웃시키고 로그인화면으로 변경.
        location.assign('/login');
        return;
    }
    // 토큰으로 서버에서 나의 정보 받아오기
    const user = await getUserByToken(token);
    if(user === null)  { // 사용자 정보가 없다면
        localStorage.clear(); // 로그아웃시키고
        location.assign('/login'); // 로그인화면으로 변경
        return;
    }

    // 나의 책을 서버에서 받아오기
    const books = await getBooks(token);
    if (books === null) {
        return;
    }

    // 받아온 책을 그리기

}

document.addEventListener('DOMContentLoaded', main); // main 함수는 async함수. dom의 모든 코드가 다 실행된 후에 실행되는 함수