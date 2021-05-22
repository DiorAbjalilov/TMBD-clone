// let menuItem = document.querySelector(".menu_items .item");
// menuItem.addEventListener("mousemove", (e) => {
//   let context = document.querySelector(".contextMenu");
//   context.style.display = "block";
// });
let plusBloon = true;
let plusContext = document.querySelector(".plusIcon");
plusContext.addEventListener("click", () => {
  if (plusBloon) {
    document.querySelector(".plusTitle").style.display = "block";
    plusBloon = false;
  } else {
    plusBloon = true;
    document.querySelector(".plusTitle").style.display = "none";
  }
});
