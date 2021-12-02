//profile
const showProfile = document.querySelector("#Profile");
showProfile.addEventListener("click", function () {
  // document.getElementById("profileDiv").togg.add("styleProfile");
  document.querySelector("#profileDiv").classList.toggle("hidden");
});
//profile

// menu hamberguri
const hambergurMenu=document.querySelector("#hambergur")
hambergurMenu.addEventListener("click",function(){
  console.log("object")
  document.querySelector("#mobile-menu").classList.toggle("hidden");
  document.querySelector("#openBtn").classList.toggle("hidden");
  document.querySelector("#closeBtn").classList.toggle("hidden");
  
})

