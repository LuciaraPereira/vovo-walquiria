const infoButton = document.getElementById("infoButton"); 
const infoContent = document.querySelector(".bloco-info"); 
const modalInfo = document.querySelector(".modalInfo"); 

infoButton.addEventListener("click", function() {
   
    if (modalInfo.style.display === "none" || modalInfo.style.display === "") {
        modalInfo.style.display = "block"; 
        infoContent.style.display = "none"; 
    } else {
        modalInfo.style.display = "none"; 
        infoContent.style.display = "block"; 
    }
});

