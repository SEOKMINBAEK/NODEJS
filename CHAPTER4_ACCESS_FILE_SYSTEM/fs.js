// 파일 읽기
// callback 형식
let fs = require('fs');

fs.readFile('./readme.txt', (err, data) => {
  if(err) {
    throw err;
  }

  console.log(data);
  console.log(data.toString());
})

// promise 형식
fs = require('fs').promises;

fs.readFile('./readme.txt')
  .then(data => {
    console.log(data);
    console.log(data.toString());
  })
  .catch(err => console.error(err));

  // 파일 생성
fs.writeFile('./writeme.txt', '글이 입력됩니다.')
  .then(() => fs.readFile('./writeme.txt'))
  .then(data => console.log(data.toString()))
  .catch(err => console.error(err));

//
// 동기적으로 파일 읽기
fs = require('fs');

console.log('시작');

let data = fs.readFileSync('./readme2.txt');
console.log('1번', data.toString());

data = fs.readFileSync('./readme2.txt');
console.log('2번', data.toString());

data = fs.readFileSync('./readme2.txt');
console.log('3번', data.toString());

console.log('끝');

// 비동기 방식으로 순서 유지
fs = require('fs').promises;

console.log('시작');

fs.readFile('./readme2.txt')
  .then(data => {
    console.log('1번', data.toString());
    return fs.readFile('./readme2.txt');
  })
  .then(data => {
    console.log('2번', data.toString());
    return fs.readFile('./readme2.txt');
  })
  .then(data => {
    console.log('3번', data.toString());
    console.log('끝');
  })
  .catch(err => console.error(err));