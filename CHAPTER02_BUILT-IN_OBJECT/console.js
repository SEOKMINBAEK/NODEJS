const message = 'message...';

const obj = {
  outside: {
    inside: {
      key: 'value'
    }
  }
};

console.time('전체 시간');

console.log('log', message);

console.error('error', message);

console.table([
  { name: 'seokmin', age: 25 },
  { name: 'marco', age: 31 }
]);

console.dir(obj, {colors: true, depth: 2});

console.time('1000회 반복까지 걸린 시간');
for(let i=0; i<1000; i++) {}
console.timeEnd('1000회 반복까지 걸린 시간');

const b = () => console.trace('에러 위치 추적');
const a = () => b();
a();

console.timeEnd('전체 시간');