const imageToSelect=document.querySelector("#imageToSelect");

imageToSelect.addEventListener("click", ()=>{

    console.log("me diste click")
    

    if (imageToSelect.style.borderStyle === "solid" ){
        imageToSelect.style.border="none";
        imageToSelect.style.borderRadius="0px";
        imageToSelect.style.boxShadow="none";
        
    }
    else{

    
        imageToSelect.style.border="red 2px solid";
        imageToSelect.style.borderRadius="1rem";
        imageToSelect.style.boxShadow="5px 5px 3px black";
    }

})