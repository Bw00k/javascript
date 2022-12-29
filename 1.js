let books = [
  { no: "inbn0002", title: "스프링", writer: "김기자", price: 40000 },
  { no: "inbn0003", title: "자바", writer: "이순신", price: 25000 },
  { no: "inbn0004", title: "SQL", writer: "을지문덕", price: 32000 },
];

function tbody() {
  for (let i = 0; i < books.length; i++) {
    list.innerHTML += `<tr>
        <td><input type="checkbox"></td>
        <td>${books[i].no}</td>
        <td>${books[i].title}</td>
        <td>${books[i].writer}</td>
        <td class="price">${books[i].price}</td>
        <td><button>삭제</button></td>
      </tr>`;
  }
}
tbody();

let bodyList = document.getElementById("list");
list.addEventListener("click", function (ev) {
  ev.target.closet("tr").remove();
});
