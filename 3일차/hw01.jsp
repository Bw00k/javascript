<!DOCTYPE html>
<html>
<head>
<title>문자열자르기</title>
<style>
label { display: inline-block; width: 70px; text-align: right; }
#btn {width : 250px; }
</style>
<script>
window.addEventListener("load", function(){
btnEvent();
});
function btnEvent(){
btn.addEventListener("click", function(){ //코드 작성
});
}
</script>
</head>
<body>
<textarea id="result" rows="3" cols="35">1, 홍길동, hong, 2019/12/01</textarea>
<div><button id="btn">텍스트필드에 값 넣기</button></div>
<div><label>번호</label><input name="no" type="text"></div>
<div><label>이름</label><input name="name" type="text"></div>
<div><label>아디</label><input name="id" type="text"></div>
<div><label>등록일자</label><input name="regDate" type="text"></div>
</body>
</html>
