const fs = require('fs');

// 파일 읽기
const readStream = fs.createReadStream('./readme3.txt', {highWaterMark: 16});
const data = [];

readStream.on('data', chunk => {
  data.push(chunk);
  console.log('data', chunk, chunk.length);
});

readStream.on('end', () => {
  console.log('end', Buffer.concat(data).toString());
});

readStream.on('error', err => console.log('error', err));


// 파일 쓰기
const writeStream = fs.createWriteStream('./writeme2.txt');

writeStream.on('finish', () => {
  console.log('파일 쓰기 완료');
});

writeStream.write('이 글을 씁니다.\n');
writeStream.write('한 번 더 씁니다.');
writeStream.end();


// 스트림 파이핑 (piping)
const readStream2 = fs.createReadStream('readme4.txt');
const writeStream2 = fs.createWriteStream('writeme3.txt');
readStream2.pipe(writeStream2);