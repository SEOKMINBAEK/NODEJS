// 단방향 암호화

const crypto = require('crypto');

console.log('base64', crypto.createHash('sha512').update('비밀번호').digest('base64'));

console.log('hex', crypto.createHash('sha512').update('비밀번호').digest('hex'));

console.log('base64', crypto.createHash('sha512').update('다른 비밀번호').digest('base64'));

// pbkdf2 알고리즘
crypto.randomBytes(64, (err, buf) => {
  const salt = buf.toString('base64');
  console.log('salt', salt);
  crypto.pbkdf2('비밀번호', salt, 100000, 64, 'sha512', (err, key) => {
    console.log('password: ', key.toString('base64'));
  });
});


// 양방향 암호화

const algorithm = 'aes-256-cbc';
const key = 'abcdefghijklmnopqrstuvwxyz123456';
const iv = '1234567890123456';
const cipher = crypto.createCipheriv(algorithm, key, iv);

let result = cipher.update('암호화할 문장', 'utf8', 'base64');
result += cipher.final('base64');

console.log('암호화', result);

const decipher = crypto.createDecipheriv(algorithm, key, iv);
let result2 = decipher.update(result, 'base64', 'utf8');
result2 += decipher.final('utf8');

console.log('복호화', result2);