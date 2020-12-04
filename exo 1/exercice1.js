let avatarEls = document.getElementsByTagName("img");

for (let i = 0; i < avatarEls.length; i++) {
    avatarEls[i].style.height= "100px";
    avatarEls[i].title= document.getElementsByTagName("img").alt;
}
