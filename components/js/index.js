let img;
let div = document.createElement('div');
div.className = 'space-btwn';
document.body.appendChild(div);

for(let i = 0; i < 50; i++){
    img = document.createElement('img');
    img.className = `img${i}`;
    img.src = `https://source.unsplash.com/collection/${i}/1600x900`;
    img.style.width = `500px`;
    img.style.padding = `50px`;
    div.appendChild(img);
};
img = img.addEventListener('click',function(){
    img.style.display = 'none';
})

