// http 모듈을 사용한 서버 생성

const http = require('http');

http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
  res.write('<h1>Hello Node!</h1>');
  res.end('<p>Hello Server!</p>');
})
  .listen(8080, () => {
    console.log('8080번 포트에서 서버 대기 중입니다!');
  });


// 서버에 이벤트리스너 붙이기
const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
  res.write('<h1>Hello Node!</h1>');
  res.end('<p>Hello Server!</p>');
});

server.listen(8081);

server.on('listening', () => console.log('8081번 포트에서 서버 대기 중입니다!'));
server.on('error', err => console.error(err));