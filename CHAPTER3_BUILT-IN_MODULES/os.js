const os = require('os');

/* 운영체제 정보 */

// process.arch와 동일함
console.log(os.arch());

// process.platform과 동일함
console.log(os.platform());

// 운영체제의 종류
console.log(os.type());

// 운영체제 부팅 이후 흐른 시간(단위: 초), process.uptime은 노드의 실행시간이다
console.log(os.uptime());

// 컴퓨터의 이름
console.log(os.hostname());

// 운영체제의 버전
console.log(os.release());


/* 경로 정보 */

// 홈 디렉토리 경로
console.log(os.homedir());

// 임시 파일 저장 경로
console.log(os.tmpdir());


/* cpu 정보 */

// 컴퓨터의 코어 정보
console.log(os.cpus());

// 사용 가능한 메모리(단위: B)
console.log(os.freemem());

// 전체 메모리 용량(단위: B)
console.log(os.totalmem());