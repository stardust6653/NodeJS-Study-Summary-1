import express from "express" // express import

const app = express() // express 실행
const PORT = 4000 // 포트번호 사용 잦으므로 변수로 지정. 포트번호는 높은 번호 위주로 비어있으며 관례적으로 4000 사용

const firstController = (req, res, next) => {
  console.log("This is middleware")
  next()
}
 // next() 메소드는 미들웨어를 실행 후 그 다음 컨트롤러를 실행시킴

const secondController = (req, res, next) => {
  console.log("This is middleware, Multiple middleware can be created.")
  next()
}

const homeController = (req, res) => {
  return res.end()
}
// 요청한 request 를 end 시킴

const loginController = (req, res) => {
  return res.send("<h1>login Page</h1>") 
}
// 요청한 request 에 대해 "" 안에 있는 내용을 response 함


app.use(firstController, secondController) // use 메소드를 사용하면 모든 라우터에 미들웨어를 실행시킬 수 있음. 실행 순서가 중요하므로 꼭 체크.
app.get("/", homeController) // get 메소드를 통해 라우터를 생성하고 controller 를 실행함.
app.get("/login", loginController)


app.listen(PORT, ()=>{
  console.log(`📡 Server listening on port ${PORT}`)
}) // 서버를 실행시킴. 바닐라JS의 addEventListener 와 유사하며 (포트번호, 콜백함수) 를 입력해 사용함
// localhost:PORT Number로 서버에 진입가능.