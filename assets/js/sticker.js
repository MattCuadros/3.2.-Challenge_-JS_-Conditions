const stickerThor=document.querySelector("#stickerThor");
const stickerCap=document.querySelector("#stickerCap");
const stickerHulk=document.querySelector("#stickerHulk");
const pMessage=document.querySelector("#pMessage");
const btnVerify=document.querySelector("#btnVerify");
const linkToNext=document.querySelector("#linkToNext");

linkToNext.style.visibility="hidden";

btnVerify.addEventListener("click", ()=>{
    
    linkToNext.style.visibility="visible";
    console.log("me diste click");
    let sticker1=+stickerThor.value;
    let sticker2=+stickerCap.value;
    let sticker3=+stickerHulk.value;
    let sumaStickers=sticker1+sticker2+sticker3;

    if (isNaN(sticker1) || isNaN(sticker2) || isNaN(sticker3) || sticker1 <0 || sticker2<0 || sticker3<0){
        alert("Debe ingresar sólo números positivos");
        return;
    }

    if (sumaStickers<11){
        pMessage.innerHTML=`Llevas <strong>${sumaStickers}</strong> Stickers <br><i class="fa-solid fa-circle-check"></i>`;
        return;
    }

    pMessage.innerHTML=`Llevas demasiados Stickers. El máximo es <strong>10</strong> unidades <br><i class="fa-solid fa-circle-xmark"></i>`;
    return;

})
