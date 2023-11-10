

const imgList = document.querySelectorAll("img");
console.log(imgList.length);
const list =  document.body.childNodes;
const text = document.createElement("h1")
text.textContent = "Num of Images = " + imgList.length.toString();
text.style.color = "purple";
document.body.insertBefore(text, list[0]);

for(let i = 0; i < imgList.length; i++){
    const height = imgList[i].height;
    const width = imgList[i].width;
    imgList[i].src = "https://static.vecteezy.com/ti/vetor-gratis/t2/423558-como-icone-de-ilustracaoial-gratis-vetor.jpg";
    imgList[i].height = height;
    imgList[i].width = width;
}