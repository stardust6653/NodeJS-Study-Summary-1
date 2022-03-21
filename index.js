import express from "express" // express import

const app = express() // express 실행
const PORT = 4000 // 포트번호 사용 잦으므로 변수로 지정. 포트번호는 높은 번호 위주로 비어있으며 관례적으로 4000 사용

app.listen(PORT, ()=>{
  console.log(`📡 Server listening on port ${PORT}`)
}) // 서버를 실행시킴. 바닐라JS의 addEventListener 와 유사하며 (포트번호, 콜백함수) 를 입력해 사용함
