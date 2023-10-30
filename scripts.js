console.log('hi');
const box=document.getElementById('box');
const buttonLeft=document.getElementById('left');
const buttonRight=document.getElementById('right');

buttonLeft.addEventListener('click', leftClick);
buttonRight.addEventListener('click', rightClick);

function leftClick(){
    const currentLeft = parseInt(getComputedStyle(box).left);
    if (currentLeft > 0) {
        box.style.left = (currentLeft - 10) + 'px';
    }
};
function rightClick(){
    const currentLeft = parseInt(getComputedStyle(box).left);
    const containerWidth = 400; // Adjust this to match your container's width
    const boxWidth = 50; // Adjust this to match your box's width
    if (currentLeft + boxWidth < containerWidth) {
        box.style.left = (currentLeft + 10) + 'px';
    }
};

