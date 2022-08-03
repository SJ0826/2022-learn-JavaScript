function getToken() {
    return localStorage.getItem('token');
  }
  
  async function login(event) {
    event.preventDefault(); //submit에 관련된 로직이 작성한 것 이외의 것으로 진행되지 않도록 막아준다.
    event.stopPropagation();
  
    const emailElement = document.querySelector('#email');
    const passwordElement = document.querySelector('#password');
  
    const email = emailElement.value;
    const password = passwordElement.value;
  
    console.log(email, password);
  
    try {
      const res = await axios.post('https://api.marktube.tv/v1/me', {
        email,
        password,
      });
      const { token } = res.data;
      if (token === undefined) {
        return;
      }
      localStorage.setItem('token', token);
      location = '/';
    } catch (error) {
      const data = error.response.data;
      if (data) {
        const state = data.error;
        if (state === 'USER_NOT_EXIST') {
          alert('사용자가 존재하지 않습니다.');
        } else if (state === 'PASSWORD_NOT_MATCH') {
          alert('비밀번호가 틀렸습니다.');
        }
      }
    }
  }
  
  function bindLoginButton() {
    const form = document.querySelector('#form-login'); //html페이지에서 id가 form-login인 dom을 얻어온다.
    form.addEventListener('submit', login);
  }
  
  async function main() {
    // 버튼에 이벤트 연결
    bindLoginButton();
  
    // 토큰 체크: 만약 로그인이 되어있는 상태라면 로그인페이지에서 나가도록 유도한다.
    const token = getToken();
    if (token !== null) { // 만약 토큰이 존재한다면
      location.assign('/'); // index페이지로 옮긴다.
      return;
    }
  }
  
  document.addEventListener('DOMContentLoaded', main);//DOMContent가 로드가 끝나면 스크립트를 실행한다.

