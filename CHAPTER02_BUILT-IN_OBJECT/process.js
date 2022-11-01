console.log('설치된 노드의 버전', process.version);

console.log('프로세서 아키텍처 정보', process.arch);

console.log('운영체제 플랫폼 정보', process.platform);

console.log('현재 프로세스 아이디', process.pid);

console.log('프로세스 시작후 흐른 시간', process.uptime());

console.log('노드의 경로', process.execPath);

console.log('현재 프로세스 실행 위치', process.cwd());

console.log('현재 CPU 사용량', process.cpuUsage());

// process.env => 환경 변수
// process.nextTick(callback) => 우선 처리
// process.exit() => 프로세스 종료 (arg = 0 : 1)
