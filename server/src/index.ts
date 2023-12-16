import express from "express";

const app = express();
const PORT = 5000;

app.get("/", (req, res) => {
  res.send("성공");
});

app.listen(PORT, () => {
  console.log(`서버 포트 ${PORT} 실행중`);
});
