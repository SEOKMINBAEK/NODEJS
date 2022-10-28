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