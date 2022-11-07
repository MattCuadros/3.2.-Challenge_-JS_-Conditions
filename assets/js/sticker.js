const stickerLeonel=document.querySelector("#stickerLeonel");
const stickerMarcelo=document.querySelector("#stickerMarcelo");
const stickerJohnny=document.querySelector("#stickerJohnny");
const pMessage=document.querySelector("#pMessage");
const btnVerify=document.querySelector("#btnVerify");

btnVerify.addEventListener("click", ()=>{
    console.log("me diste click");
    const sticker1=+stickerLeonel.value;
    const sticker2=+stickerMarcelo.value;
    const sticker3=+stickerJohnny.value;
    const sumaStickers=sticker1+sticker2+sticker3;

    if (sumaStickers<11){
        pMessage.innerHTML=`Llevas ${sumaStickers} Stickers`;
        return;
    }

    pMessage.innerHTML=`error`;
    return;


})
