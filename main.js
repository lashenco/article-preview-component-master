const share = document.querySelector('.share')
const btn = document.querySelector('.share-icon')

btn.onclick = function () {
  if (share.classList.contains("active")) {
    share.classList.toggle("active");
    btn.style.cssText = "background-color:auto; color:;auto";
  } else {
    btn.style.cssText = "background-color:#6d7f97; color:#ecf2f8;";
    share.classList.add("active");
  }
};