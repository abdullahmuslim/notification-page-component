const markAll = document.querySelector(".markAll");
markAll.addEventListener("click", clearAllUnseen);

const unseen = [...document.querySelectorAll(".unseen")];
unseen.map(anUnseen => {
  anUnseen.addEventListener("click", clearAnUnseen);
})

function clearAllUnseen(){
  const dots = [...document.querySelectorAll(".dot")];
  dots.map(aDot => {
    aDot.style.display = "none";
  })
  unseen.map(anUnseen => {
    anUnseen.style.backgroundColor = "hsl(0, 0%, 100%)";
  })
}

function clearAnUnseen(e){
  const el = e.currentTarget;
  el.style.backgroundColor ="hsl(0, 0%, 100%)";
  elID = [...el.parentElement.children].indexOf(el);

  const dots = [...document.querySelectorAll(".dot")];
  dots.map(aDot => {
    const aNotif = aDot.parentElement.parentElement.parentElement;
    const aNotifID = [...aNotif.parentElement.children].indexOf(aNotif);
    
    if (aNotifID === elID){
      aDot.style.display = "none";
    }
  })
}
