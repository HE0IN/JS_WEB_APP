// node.js의 모듈 시스템 2가지
// 1. commonJS 모듈 시스템
//      require()함수, module.exports를 사용
// 2. ES모듈 시스템
//      node.js 13.2.0 이후부터 지원

// 사용자의 이름을 저장하는변수, 바깥에서 사용할 수 있게 내보내줌 - user.js
const user = '홍길동';

// 터미널에 사용자 이름을 출력해주는 함수, 바깥으로 내보내줌 - hello.js
const hello = (name) => {
    console.log(`${name} 님, 안녕하세요~?~?~?~?~?~?`);
};

hello(user);