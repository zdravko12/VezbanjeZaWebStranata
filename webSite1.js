


// see more opcijata za nav levo 

  function seeMore() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "See More"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "See less"; 
      moreText.style.display = "inline";
    }
  }


// see more opcijata za nav levo 
// see more option za slikaProfileePage
function seeMore1() {
  var dots1 = document.getElementById("dots1");
  var moreText1 = document.getElementById("more1");
  var btnText1 = document.getElementById("myBtn1");

  if (dots1.style.display === "none") {
    dots1.style.display = "inline";
    btnText1.innerHTML = "See More"; 
    moreText1.style.display = "none";
  } else {
    dots1.style.display = "none";
    btnText1.innerHTML = "See less"; 
    moreText1.style.display = "inline";
  }
}
// see more yourphotos option
function seeMore2() {
  var dots2 = document.getElementById("dots2");
  var moreText2 = document.getElementById("more2");
  var btnText2 = document.getElementById("myBtn2");

  if (dots2.style.display === "none") {
    dots2.style.display = "inline";
    btnText2.innerHTML = "See More"; 
    moreText2.style.display = "none";
  } else {
    dots2.style.display = "none";
    btnText2.innerHTML = "See less"; 
    moreText2.style.display = "inline";
  }
}



// slika click na post
// $('img').on('click',function()
//             {
//                 var sr=$(this).attr('src'); 
//                 $('#mimg').attr('src',sr);
//                 $('#myModal').modal('show');
//             });
  
// Opcijata za click za login profile
var settingsmenu = document.querySelector(".settings-menu");
var darkBtn = document.getElementById("dark-btn");

function settingsMenuToggle(){

  settingsmenu.classList.toggle("settings-menu-height");

}
// Opcijata za click za login profile

// za theme

   darkBtn.onclick = function(){
   darkBtn.classList.toggle("dark-btn-on");
   document.body.classList.toggle("dark-theme")

  
}

// za theme  

// za slika click Profile Page
const photos = document.querySelectorAll('#photo-preview img');

photos.forEach(photo => {
  photo.addEventListener('click', () => {
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    
    const fullImage = document.createElement('img');
    fullImage.src = photo.src.replace(/thumbnail/, 'fullsize');
    
    overlay.appendChild(fullImage);
    document.body.appendChild(overlay);
    
    overlay.addEventListener('click', () => {
      overlay.remove();
    });
  });
});
// za yourphotos Page ClickPhoto
const photos1 = document.querySelectorAll('#photo-preview1 img');

photos1.forEach(photo1 => {
  photo1.addEventListener('click', () => {
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    
    const fullImage = document.createElement('img');
    fullImage.src = photo1.src.replace(/thumbnail/, 'fullsize');
    
    overlay.appendChild(fullImage);
    document.body.appendChild(overlay);
    
    overlay.addEventListener('click', () => {
      overlay.remove();
    });
  });
});
// za cover photo
const photos2 = document.querySelectorAll('.photo-preview2');

photos2.forEach(photo2 => {
  photo2.addEventListener('click', () => {
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    
    const fullImage = document.createElement('img');
    fullImage.src = photo2.src.replace(/thumbnail/, 'fullsize');
    
    overlay.appendChild(fullImage);
    document.body.appendChild(overlay);
    
    overlay.addEventListener('click', () => {
      overlay.remove();
    });
  });
});

// za photos Page Second
// za friends Requester1
let friendRequestState = null;

//  chekiram local storage
// const savedState = localStorage.getItem('friendRequestState');
// if (savedState) {
//   friendRequestState = savedState;
//   updateButton(friendRequestState);
// }

// add button
document.getElementById('colorButonLeft').addEventListener('click', acceptFriendRequest);
document.getElementById('colorButonRight').addEventListener('click', deleteFriendRequest);

function acceptFriendRequest() {
  friendRequestState = 'accepted';
  updateButton(friendRequestState);
  saveState(friendRequestState);
}

function deleteFriendRequest() {
  friendRequestState = 'deleted';
  updateButton(friendRequestState);
  saveState(friendRequestState);
}

function updateButton(state) {
  const acceptBtn = document.getElementById('colorButonLeft');
  const deleteBtn = document.getElementById('colorButonRight');
  if (state === 'accepted') {
    acceptBtn.disabled = true;
    acceptBtn.textContent = 'Friend Request Accepted';
    deleteBtn.style.display = 'none';
  } else if (state === 'deleted') {
    deleteBtn.disabled = true;
    deleteBtn.textContent = 'Friend Request Deleted';
    acceptBtn.style.display = 'none';
  }
}
// za friends Requester1

// za input logout page

function validateForm(){


  let email = document.getElementById("email");
  let password = document.getElementById("password");


 let formValid = true;



 if(!email.checkValidity()){
     document.getElementById("emailError").textContent = email.validationMessage;
     formValid = false;
 }else{
     document.getElementById("emailError").textContent = "";
 }
 

 if(!password.checkValidity()){
     document.getElementById("passwordError").textContent = password.validationMessage;
     formValid = false;
 }else{
     document.getElementById("passwordError").textContent = "";
 }

 
 return formValid;


}
// Za Post 
const postsData = localStorage.getItem("posts");

  
    const posts = JSON.parse(postsData);

    //  za html element
    const postsContainer = document.getElementById("posts-container111");

    let postsHTML = "";
    for (let i = 0; i < posts.length; i++) {
      postsHTML += `<div class="post">
                       <h2>${posts[i].user}</h2>
                       <p>${posts[i].post}</p>
                     </div>`;
    }

   
    postsContainer.innerHTML = postsHTML;


let posts1 = [
  { "id": 10,
  "user": "Frank Lampard",
   "post": "Frank Lampard tests Chelsea youth and completes key training task ahead of Brentford clash"
},
{ "id": 11,
  "user": "Todd Boehly",
   "post": "Chelsea players' stance on Mauricio Pochettino leaked with Todd Boehly talks 'advancing'"
},
{ "id": 12,
  "user": "Roman Abramovich",
   "post": "Offshore cash and huge loans: leak reveals how Roman Abramovich funded Chelsea’s success"
},
]
// LocalStorage save
localStorage.setItem("posts", JSON.stringify(posts1));
// Za Post 
// za post Text
const textarea1 = document.getElementById('myText');
const button = document.getElementById('PostButton');
const output = document.getElementById('output');
if (localStorage.getItem('my-output')) {
  output.innerHTML = localStorage.getItem('my-output');
}

button.addEventListener('click', () => {
  const text = textarea1.value;
  output.innerHTML += text + '<br>';
  textarea1.value = '';
  localStorage.setItem('my-output', output.innerHTML);
});




// Za Slika opload Post Image
function displayImage() {
  var input = document.getElementById('file');
  var img = document.getElementById('uploadedImg');
  img.src = URL.createObjectURL(input.files[0]);

  
  img.addEventListener('load', function() {
    // kreiras  canvas 
    var canvas = document.createElement('canvas');
    canvas.width = img.width;
    canvas.height = img.height;
    var context = canvas.getContext('2d');
    context.drawImage(img, 0, 0);

    // zacuvaj localstorage
    localStorage.setItem('uploadedImg', JSON.stringify(canvas.toDataURL()));
  });
}

// local storage 
window.addEventListener('load', function() {
  var img = document.getElementById('uploadedImg');
  if (img != null) {
    var src = localStorage.getItem('uploadedImg');
    if (src) {
      img.src = JSON.parse(src);
    }
  }
});
 


// tyka profile
function displayImage1() {
  let input = document.getElementById('file');
  let img = document.getElementById('uploadedImg1');
  img.src = URL.createObjectURL(input.files[0]);
  
  // save image to local storage
  localStorage.setItem('uploadedImg1', img.src);
  
}

//local storage 
window.onload = function() {
  let img = document.getElementById('uploadedImg1');
  let src = localStorage.getItem('uploadedImg1');
  if (src) {
    img.src = src;
  }
}



// ova za isto text area Edit Bio

function showBioEditor() {
  var bioEditor = document.createElement('div');
  bioEditor.setAttribute('id', 'bio-editor');
  
  
  
  var textarea = document.createElement('textarea');
  textarea.setAttribute('id', 'bio-textarea');
  bioEditor.appendChild(textarea);
  

  var saveBtn = document.createElement('button');
  saveBtn.innerHTML = 'Save';
  saveBtn.onclick = saveBio;
  bioEditor.appendChild(saveBtn);

  var editBtn = document.getElementById('textBioButton');
  editBtn.parentNode.insertBefore(bioEditor, editBtn.nextSibling);
}

function saveBio() {
  var bio = document.getElementById('bio-textarea').value;
  var textarea = document.getElementById('bio-textarea');
  var bio = textarea.value;
  localStorage.setItem('bio', bio);
  console.log(bio);
  
  
  
  
  var bioEditor = document.getElementById('bio-editor');
  bioEditor.parentNode.removeChild(bioEditor);
}
window.onload = function() {
  var textarea = document.getElementById('bio-textarea');
  var bioEditor = document.getElementById('textBioButton');
  var bioEditor = localStorage.getItem('bio');
  if (bio) {
    textarea.value = bio;
    bioEditor.style.display = 'none';
    textarea.style.display = 'block';
  }
}
var textarea = document.getElementById('bio-textarea');
textarea.addEventListener('input', saveBio);
textarea.addEventListener('submit', saveBio);

// ova za isto text area Edit Bio add Hobibies

function showBioEditor1() {
  var bioEditor = document.createElement('div');
  bioEditor.setAttribute('id', 'bio-editor');
  
  
  
  var textarea = document.createElement('textarea');
  textarea.setAttribute('id', 'bio-textarea1');
  bioEditor.appendChild(textarea);
  

  var saveBtn = document.createElement('button');
  saveBtn.innerHTML = 'Save';
  saveBtn.onclick = saveBio;
  bioEditor.appendChild(saveBtn);

  var editBtn = document.getElementById('detalisButton');
  editBtn.parentNode.insertBefore(bioEditor, editBtn.nextSibling);
}

function saveBio() {
  var bio = document.getElementById('bio-textarea1').value;
  var textarea = document.getElementById('bio-textarea1');
  var bio = textarea.value;
  localStorage.setItem('bio', bio);
  console.log(bio);
  
  
  var bioEditor = document.getElementById('bio-editor');
  bioEditor.parentNode.removeChild(bioEditor);
}
window.onload = function() {
  var textarea = document.getElementById('bio-textarea1');
  var bioEditor = document.getElementById('textBioButton');
  var bioEditor = localStorage.getItem('bio');
  if (bio) {
    textarea.value = bio;
    bioEditor.style.display = 'none';
    textarea.style.display = 'block';
  }
}
var textarea = document.getElementById('bio-textarea1');
textarea.addEventListener('input', saveBio);
textarea.addEventListener('submit', saveBio);


// kreiram new acc button
function createNewAccount() {
  var modal = document.getElementById("newAccountModal");
  var closeBtn = document.getElementsByClassName("close")[0];

  modal.style.display = "block";

  closeBtn.onclick = function() {
    modal.style.display = "none";
  };

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
}

// za LogOut Input Pole 

// za post profile text
function displayImage1(){ 

let textareaz1 = document.getElementById('textPost');
let buttonz2 = document.getElementById('PostButton1');
let outputz3 = document.getElementById('posttextProfile');

button.addEventListener('click', () => {
  let text = textareaz1.value;
  outputz3.innerHTML += text + '<br>';
  textareaz1.value = '';
});
}


