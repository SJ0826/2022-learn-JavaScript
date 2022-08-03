/*
[Login Promise]
로그인은 axios를 사용했다.
axios는 http 프로토콜을 이용해서 데이터를 요청하고 받아올 수 있는 라이브러리.
axios는 모든 메소드들이 프로미스 형태로 지원된다.
then을 통해서 서버로부터 정상적인 데이터를 가져오게 되면 resolve되서 res라고 하는 데이터가 넘어온다.
*/
/*
[Login Async-Await]
aync await를 사용해서 API를 활용한다.
axios.post를 통해서 email과 password를 보내고 리턴되어 resolve된 값이 넘어오게 된다.
await를 통한 처리는 async 함수 안에 있어야 한다.
*/
/* 
[axios]
브라우저 환경이나 node.j환경에서 똑같은 api로 클라이언트의 역할을 할 수 있게 도와주는 라이브러리.
게다가 프로미스를 베이스로 하고있다.
많은 개발자들이 사용한다.
*/
/*
[DOMContentLoaded]
최초 HTML문서가 완전히 로드 및 파싱되었을때 발생한다.
스타일시트나 이미지 및 서프브레임 로드가 끝나기를 기다리지 않는다.
*/
/*
[localStorage]
브라우저에 구현되어 있다.
스토리지 객체에 접근하게 해준다.
*/
/*
[Window.location]
페이지를 이동한다.
다른 주소를 assign해서 처리한다.
*/
function getToken() {
    return localStorage.getItem('token');
  }
  
  async function getUserByToken(token) {
    try {
      const res = await axios.get('https://api.marktube.tv/v1/me', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return res.data;
    } catch (error) {
      console.log('getUserByToken error', error);
      return null;
    }
  }
  
  async function logout() {
    const token = getToken();
    if (token === null) {
      location = '/login';
      return;
    }
    try {
      await axios.delete('https://api.marktube.tv/v1/me', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (error) {
      console.log('logout error', error);
    } finally {
      localStorage.clear();
      window.location.href = '/login';
    }
  }
  
  async function getBook(bookId) {
    const token = getToken();
    if (token === null) {
      location.href = '/login';
      return null;
    }
    try {
      const res = await axios.get(`https://api.marktube.tv/v1/book/${bookId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return res.data;
    } catch (error) {
      console.log('getBook error', error);
      return null;
    }
  }
  
  async function deleteBook(bookId) {
    const token = getToken();
    if (token === null) {
      location = '/login';
      return;
    }
    await axios.delete(`https://api.marktube.tv/v1/book/${bookId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
  
  function bindLogoutButton() {
    const btnLogout = document.querySelector('#btn_logout');
    btnLogout.addEventListener('click', logout);
  }
  
  function render(book) {
    const detailElement = document.querySelector('#detail');
  
    detailElement.innerHTML = `<div class="card bg-light w-100">
      <div class="card-header"><h4>${book.title}</h4></div>
      <div class="card-body">
        <h5 class="card-title">"${book.message}"</h5>
        <p class="card-text">글쓴이 : ${book.author}</p>
        <p class="card-text">링크 : <a href="${
          book.url
        }" target="_BLANK">바로 가기</a></p>
        <a href="/edit?id=${book.bookId}" class="btn btn-primary btn-sm">Edit</a>
        <button type="button" class="btn btn-danger btn-sm" id="btn-delete">Delete</button>
      </div>
      <div class="card-footer">
          <small class="text-muted">작성일 : ${new Date(
            book.createdAt,
          ).toLocaleString()}</small>
        </div>
    </div>`;
  
    document.querySelector('#btn-delete').addEventListener('click', async () => {
      try {
        await deleteBook(book.bookId);
        location.href = '/';
      } catch (error) {
        console.log(error);
      }
    });
  }
  
  async function main() {
    // 버튼에 이벤트 연결
    bindLogoutButton(); // documnet의 querySelector함수로부터 아이디가 btn_logout인 dom을 얻어온다.
  
    // 브라우저에서 id 가져오기
    const bookId = new URL(location.href).searchParams.get('id');
  
    // 토큰 체크
    const token = getToken();
    if (token === null) { // 값이 없다면 로그아웃시키고 로그인화면으로 변경.
      location.href = '/login';
      return;
    }
  
    // 토큰으로 서버에서 나의 정보 받아오기
    const user = await getUserByToken(token);
    if (user === null) { // 사용자 정보가 없다면
      localStorage.clear(); // 로그아웃시키고
      location.href = '/login'; // 로그인화면으로 변경
      return;
    }
  
    // 책을 서버에서 받아오기
    const book = await getBook(bookId);
    if (book === null) {
      alert('서버에서 책 가져오기 실패');
      return;
    }
  
    // 받아온 책을 그리기
    render(book);
  }
  
  document.addEventListener('DOMContentLoaded', main); // main 함수는 async함수. dom의 모든 코드가 다 실행된 후에 실행되는 함수