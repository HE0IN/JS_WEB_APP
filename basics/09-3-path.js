//path 모듈 사용하기
const path = require('path');

//path 모듈 : window/Mac(Linux)
// 파일경로 : C:\users\me
//              /users/me
//OS 특성을 고려하여 파일 경로에 대한 기능을 제공한다.

//경로 연결하기
const fullPath = path.join('some', 'work', 'test.txt');
console.log(fullPath);  //some\work\test.txt

//절대 경로 : C:\users\me\test.txt /users/me/test.txt 
//상대 경로 : .\test.txt ./text.txt
// . : 현재 경로(디렉토리, 폴더)
// .. : 현재 경로의 한 단계 상위 폴더

//절대 경로
console.log( `파일 절대 경로 : ${__filename}`);
// C:\Users\samsung\OneDrive\nodejs\basics\09-3-path.js

//폴더 이름만 가져오기
const dir = path.dirname(__filename);
console.log(dir);
// C:\Users\samsung\OneDrive\nodejs\basics

//파일 이름만 가져오기
const filename = path.basename(__filename);
console.log((filename));
// 09-3-path.js

//확장자 제외
const puerFilename = path.basename(__filename, '.js');
console.log(puerFilename);
//09-3-path

//확장자만 가져오기
const ext = path.extname(__filename);
console.log(ext);
//.js

puerFilename2 = path.basename(__filename, ext);
console.log(puerFilename2);
// 09-3-path

//경로 분해하기
const parsedPath = path.parse(__filename);
console.log(parsedPath);
console.log(parsedPath.name);
// {
//     root: 'C:\\',
//     dir: 'C:\\Users\\samsung\\OneDrive\\nodejs\\basics',
//     base: '09-3-path.js',
//     ext: '.js',
//     name: '09-3-path'
//   }



