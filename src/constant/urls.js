let SOCKET_IO_URLS = 'http://localhost:3030';

if(process.env.NODE_ENV === 'production') {
  SOCKET_IO_URLS = 'https://chat-online-16clc.herokuapp.com/';
}

export {
  SOCKET_IO_URLS
}