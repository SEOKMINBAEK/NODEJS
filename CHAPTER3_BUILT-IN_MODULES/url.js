const url = require('url');

const { URL } = url;

// WHATWG 방식
const myURL = new URL('http://hostname.com/?page=3&limit=10&category=nodejs&category=javascript');

console.log('new URL():', myURL);

console.log('url.format()', url.format(myURL));

// 기존 노드 url 방식
const parseUrl = url.parse('http://hostname.com/?page=3&limit=10&category=nodejs&category=javascript');

console.log('url.parse()', parseUrl);

console.log('url.format()', url.format(parseUrl));

/*********************************************************************/

// WHATWG 방식의 searchParams 객체
const searchParams = myURL.searchParams;

console.log('searchParams', searchParams);

// 해당 key의 value를 모두 가져온다.
console.log('getAll()', searchParams.getAll('category'));

// 해당 key중 첫번째 key의 value만 가져온다
console.log('get()', searchParams.get('limit'));

// 해당 key의 존재 여부를 검사한다
console.log('has()', searchParams.has('page'));

// 모든 key를 iterator 객체로 가져온다
console.log('keys()', searchParams.keys());

// 모든 value를 iterator 객체로 가져온다
console.log('values()', searchParams.values());

// (key, value) 해당 키를 추가한다, 같은 키가 있다면 유지하고 하나 더 추가
searchParams.append('filter', 'es3');
searchParams.append('filter', 'es5');

console.log(searchParams.getAll('filter'));

// (key, value) 해당 키를 추가한다, 같은 키가 있다면 모두 지우고 새로 추가
searchParams.set('filter', 'es6');

console.log(searchParams.getAll('filter'));

// 해당 키를 제거한다
searchParams.delete('filter');

console.log(searchParams.getAll('filter'));

// 조작한 searchParams 객체를 다시 문자열로 만든다
console.log('toString()', searchParams.toString());

// toString()한 문자열을 search에 대입하면 주소 객체에 반영된다
myURL.search = searchParams.toString();