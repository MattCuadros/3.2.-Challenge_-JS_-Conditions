const stickerThor=document.querySelector("#stickerThor");
const stickerCap=document.querySelector("#stickerCap");
const stickerHulk=document.querySelector("#stickerHulk");
const pMessage=document.querySelector("#pMessage");
const btnVerify=document.querySelector("#btnVerify");

btnVerify.addEventListener("click", ()=>{
    

    console.log("me diste click");
    let sticker1=+stickerThor.value;
    let sticker2=+stickerCap.value;
    let sticker3=+stickerHulk.value;
    let sumaStickers=sticker1+sticker2+sticker3;

    if (sticker1 === NaN || sticker2 === NaN || sticker3 === NaN || sticker1 <0 || sticker2<0 || sticker3<0){
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
