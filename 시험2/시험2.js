let users = [
  { userno: "100", email: "aa@b.com", username: "김기자", point: 250 },
  { userno: "101", email: "bb.yedam.ac", username: "이순신", point: 150 },
  { userno: "102", email: "cc.naver.com", username: "을지문덕", point: 100 },
];
makeTag();

inputClear();
function makeTag() {
  list.innerHTML = "";
  for (let i = 0; i < users.length; i++) {
    let tag = `<tr>
          <td>${users[i].userno}</td>
          <td>${users[i].email}</td>
          <td>${users[i].username}</td>
          <td class="point">${users[i].point}</td>
          <td><button>삭제</button></td>
        </tr>`;
    document.querySelector("#list").innerHTML += tag;
  }
}
//합계버튼
btnSum.addEventListener("click", function (ev) {
  pointTotalCalc();
});
//추가
btnAdd.addEventListener("click", function (ev) {
  let addObj = {
    userno: userno.value,
    email: email.value,
    username: username.value,
    point: parseInt(point.value),
  };
  if (!inputCheck()) {
    return;
  }
  users.push(addObj);

  pointTotalCalc();

  makeTag();
});

//클리어
function inputClear() {
  userno.value = "";
  email.value = "";
  username.value = "";
  point.value = "";
}
//체크
function inputCheck() {
  if (email.value == "") {
    alert("이메일을 입력하세요");
    return false;
  }
  return true;
}
//총금액계산
function pointTotalCalc() {
  let total = 0;
  for (let i = 0; i < users.length; i++) {
    total += users[i].point;
  }
  totalPoint.innerHTML = total;
}

//삭제버튼
list.addEventListener("click", function (ev) {
  if (ev.target.nodeName == "BUTTON") {
    //ev.target.closest("tr").remove()
    {
      //배열에서 삭제
      let no = ev.target.closest("tr").children[0].innerText;
      for (let i = 0; i < users.length; i++) {
        if (users[i].userno == no) {
          users.splice(i, 1);
        }
      }
      makeTag();

      pointTotalCalc();
    }
  }
});
