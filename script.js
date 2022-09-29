console.log("dog")


// function addToList(event){
//     event.preventDefault();
//     let text = document.getElementById("input-Text-id");
//     db.collection("toso-items").add({
//         text: text.value,
//         status: "active"
//     })
//   }

// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
// import { getDatabase } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-database.js";


// const firebaseConfig = {
//   apiKey: "AIzaSyAJmDzWhV9z366Feg_RNttNPcTL8XUTK3I",
//   authDomain: "test-todo-6a85f.firebaseapp.com",
//   projectId: "test-todo-6a85f",
//   storageBucket: "test-todo-6a85f.appspot.com",
//   messagingSenderId: "606844471847",
//   appId: "1:606844471847:web:f03536f01a833dac411c02",
//   measurementId: "G-3B774BR542"
// };


// const app = initializeApp(firebaseConfig);
// var db = getDatabase();



// var addToList = document.getElementById("submitbutt")




  
  

// }
// function addToList(event){
//     event.preventDefault();
//     let inputText = document.getElementById("input-Text-id")
//     console.log(inputText.value)
//     let inputImage = document.getElementById("image_upload")
//     console.log(inputImage.value)
// }

//   document.getElementById("image_upload").addEventListener("click", function show(){
//     let imageBox = document.getElementById("imagePreviewDiv");
//     if(imageBox.style.display === "flex"){
//         imageBox.style.display = "none";
//     }else{
//         imageBox.style.display = "flex";
//     }
//   })
  
  
//   const imageButton = document.getElementById("image_upload")
//   const imagePreviewBox = document.getElementById("imagePreview")

// imageButton.addEventListener("click", function(){
//     if (imagePreviewBox.style.display === "block"){
//         imagePreviewBox.style.display = "none"}else{
//        imagePreviewBox.style.display === "block" }
// })


// function showPreview(event){
//     if(event.target.files.length > 0){
//       var src = URL.createObjectURL(event.target.files[0]);
//       var preview = document.getElementById("image-preview-pic");
//       preview.src = src;
      
//     }
//   }