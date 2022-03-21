# NodeJS-Study-Summary-1

> ### NodeJS란?
* 웹브라우저 외의 영역에서도 JS를 실행시킬 수 있도록 하는 패키지

***  
> ### Package.json 이란?
  * json 파일을 통해 프로젝트를 NodeJS로 세팅
  * package.json 파일은 내부에 다양한 정보를 포함하고 있으며, 복잡한 스크립트에 닉네임을 붙여 터미널에서 간편하게 실행 가능하다.
  ```
  npm run scirpt닉네임
  ```
>> #### dependencies 와 devDependencies
  * package.json 파일 내 dependencies 에는 설치한 패키지(모듈)의 버전과 이름이 기재된다. 용량이 큰 모듈 폴더를 공유하지 않더라도 dependencies에 입력만 되어있다면 `npm i`를 통해 사용자는 언제든 지 필요한 패키지를 설치할 수 있다.
  * devDependencies 와 dependencies의 차이는 역할적 차이이며 devDependencies 는 이름에도 알 수 있듯 개발자가 개발을 할 때 도움이 되는 패키지이다. (ex. nodemon)
***  
> ### package.json 파일 생성 
 1. 터미널을 열어 `git init`  
 2. 깃헙에 레포지토리 생성 후 터미널에서 `git remote add origin 레포지토리URL` 실행  
 3. `npm init` 실행  
 4. package.json 파일 생성 확인 후 패키지 설치를 위해서는 `npm i 패키지이름` 명령어를 통해 설치 가능
***  
> ### BabelJS 란?
* 최신의 자바스크립트 문법이 호환되지 않는 환경에서도 작동할 수 있도록 자동으로 변환시켜주는 컴파일러
* [BabelJS 사이트](https://babeljs.io/)
* [Nodemon npm 사이트](npmjs.com/package/nodemon) : 프로젝트를 저장할 때 마다 새로 실행시켜줄 필요없이 자동으로 스크립트를 실행시켜주는 패키지
***
> ### expressJS 란?
* NodeJS를 이용하여 서버를 만들 수 있게 해주는 패키지
* [express npm 사이트](npmjs.com/package/express)
***
> ### express 사용법
* express 설치 후 js파일에서 import 를 통해 express 를 불러온다
* `express()` 변수를 생성해 실행시켜준다
* 각종 메소드를 활용해 서버를 만든다.
***
> ### request 와 response, middleware
* request : 서버에 무언가를 요청하는 경우로 특정 URL로 이동하거나 메시지 전송 요청 등의 상황
* response : 서버에 요청된 request에 답하는 것으로 답이 없을 경우 계속 로딩되는 현상을 볼 수 있다.  
--`res.end()` : request 를 종료  
--`res.send()` : () 내용을 출력함
* middleware : request와 response의 중간과정으로 next 인자를 필수적으로 가지며 `next()`메소드를 실행해 다음으로 진행시켜주어야만 한다.
***
> ### 각종 메소드
* `get("/(라우터 이름)", 컨트롤러, ...)` : 브라우저에게 라우터를 불러들이라 요청  
-- get메소드로 실행되는 콜백함수의 인자로는 request 와 response 값을 모두 받으며 전달받은 인자를 리턴해 사용한다.
* `use(컨트롤러)` : 인자로 받은 컨트롤러를 모든 라우터에서 실행되도록 하는 메소드
* `linsten("포트번호", 콜백함수)` : request된 일을 서버가 listen할 수 있도록 함  
--브라우저에 localhost:포트번호를 입력하면 서버로 접속 가능
***
> ### morgan 패키지
* NodeJS용 Request logger middleware로 morgan을 사용하면 더 자세한 로그확인 등 간편하게 이용 가능하다.
* [morgan npm 사이트](https://www.npmjs.com/package/morgan)
