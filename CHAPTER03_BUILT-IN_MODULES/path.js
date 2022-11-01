const path = require('path');

const string = __filename; // 현재 파일 경로

// 경로 구분자
console.log(path.sep);

// 환경 변수 구분자(windows : ;, POSIX : :)
console.log(path.delimiter);

// 파일이 위치한 폴더 경로
console.log(path.dirname(string));

// 파일의 확장자
console.log(path.extname(string));

// 파일의 이름(확장자 포함)
console.log(path.basename(string));

// 파일의 이름(확장자 미포함)
console.log(path.basename(string, path.extname(string)));

// 파일 경로를 root, dir, base, ext, name으로 분리
console.log(path.parse(string));

// path.parse()한 객체를 파일 경로로 합침
console.log(path.format({
	dir: '/home/test',
	name: 'path',
	ext: '.js' 
}));

// 경로 구분자를 실수했을때 정상적인 경로로 변환
console.log(path.normalize('//home//test//path.js'));

// 파일의 경로가 절대 경로인지 true, false로 알려줌
console.log(path.isAbsolute('/'));
console.log(path.isAbsolute('./home'));

// 경로를 두개 넣으면 첫번째 경로에서 두번째 경로로 이동하는 법을 알려줌
console.log(path.relative('/home/test/path.js', '/'));

// 여러 인수를 넣으면 하나의 경로로 합침, 상대경로도 알아서 처리해준다
// join은 상대경로로 처리하여 앞의 경로를 포함한다
console.log(path.join(__dirname, '..', '.'));
// resolve는 절대경로로 처리하여 앞의 경로를 무시한다
console.log(path.resolve(__dirname, '/test', '/desktop'));