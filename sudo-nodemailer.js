//const transporter = nodemailer.createTransport(transport[, defaults])
const transporter = nodemailer.createTransport({
  host: 'smtp.example.com', //smtp 서버 호스트 주소
  port: 587,
  secure: false, //true면 포트번호 465, false면 587 또는 25사용
  auth: { //사용자 정보
    user: "username",
    pass: "password"
  },
})

transporter.verify((error, success) => {
  if (error) {
    console.log(error)
  } else {
    console.log('서버가 메시지를 받을 준비가 되어 있습니다.');
  }
});

//이메일 보내기
//transporter.sendMail(data, callback(err,info))

