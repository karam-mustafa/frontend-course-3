// function doPromise() {
//   return new Promise(function (resolve, reject) {
//     resolve("hello from error");
//   })
//     .then((res) => {
//       console.log("====================================");
//       console.log(res);
//       console.log("====================================");
//       return res;
//     })
//     .then((res) => {
//       console.log("====================================");
//       console.log(res, "karam2");
//       console.log("====================================");
//     });
// }

// console.log("====================================");
// console.log("hello before fetch");
// console.log("====================================");

// let resultFromBody = null;

// async function fetchJobs() {
//   await fetch("http://localhost:3000/jobs", {
//     method: "get",
//   })
//     .then((res) => res.json())
//     .then((res) => {
//       resultFromBody = res;
//     });

//   console.log("====================================");
//   console.log(resultFromBody);
//   console.log("====================================");
// }

// fetchJobs();

function appendNewItemIntoTodo(title, description) {
  const todo = document.querySelector(".todo-area");

  const p = document.createElement("p");
  const h1 = document.createElement("h1");

  h1.innerText = title;
  p.innerText = description;

  const div = document.createElement("div");

  div.appendChild(h1);
  div.appendChild(p);
  todo.appendChild(div);
}

async function fetchProducts() {
  let data = [];
  await fetch("https://dummyjson.com/products?limit=100")
    .then((res) => res.json())
    .then((res) => (data = res.products));

  data.forEach((item,) => {
    setTimeout(() => {
      appendNewItemIntoTodo(item.title, item.description);
    }, 3000);
  });
}

fetchProducts();
