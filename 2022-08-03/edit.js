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
  
  async function updateBook(bookId) {
    const titleElement = document.querySelector('#title');
    const messageElement = document.querySelector('#message');
    const authorElement = document.querySelector('#author');
    const urlElement = document.querySelector('#url');
  
    const title = titleElement.value;
    const message = messageElement.value;
    const author = authorElement.value;
    const url = urlElement.value;
  
    if (title === '' || message === '' || author === '' || url === '') {
      return;
    }
  
    const token = getToken();
    if (token === null) {
      location = '/login';
      return;
    }
  
    await axios.patch(
      `https://api.marktube.tv/v1/book/${bookId}`,
      {
        title,
        message,
        author,
        url,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
  }
  
  function bindLogoutButton() {
    const btnLogout = document.querySelector('#btn_logout');
    btnLogout.addEventListener('click', logout);
  }
  
  function render(book) {
    const titleElement = document.querySelector('#title');
    titleElement.value = book.title;
  
    const messageElement = document.querySelector('#message');
    messageElement.value = book.message;
  
    const authorElement = document.querySelector('#author');
    authorElement.value = book.author;
  
    const urlElement = document.querySelector('#url');
    urlElement.value = book.url;
  
    const form = document.querySelector('#form-edit-book');
    form.addEventListener('click', async event => {
      event.preventDefault();
      event.stopPropagation();
      event.target.classList.add('was-validated');
  
      try {
        await updateBook(book.bookId);
        location.href = `book?id=${book.bookId}`;
      } catch (error) {
        console.log(error);
      }
    });
  
    const cancelButtonElement = document.querySelector('#btn-cancel');
    cancelButtonElement.addEventListener('click', event => {
      event.preventDefault();
      event.stopPropagation();
  
      location.href = `book?id=${book.bookId}`;
    });
  }
  
  async function main() {
    // ?????????????????? id ????????????
    const bookId = new URL(location.href).searchParams.get('id');
  
    // ?????? ??????
    const token = getToken();
    if (token === null) {
      location.href = '/login';
      return;
    }
  
    // ???????????? ???????????? ?????? ?????? ????????????
    const user = await getUserByToken(token);
    if (user === null) {
      localStorage.clear();
      location = '/login';
      return;
    }
  
    // ?????? ???????????? ????????????
    const book = await getBook(bookId);
    if (book === null) {
      alert('???????????? ??? ???????????? ??????');
      return;
    }
  
    // ????????? ?????? ?????????
    render(book);
  }
  
  document.addEventListener('DOMContentLoaded', main);