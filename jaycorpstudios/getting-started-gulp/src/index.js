const PROPERTIES = {};

function highlight(){
    const target = document.querySelector('.component');
    target.classList.toggle('component--highlight');
    console.log('highlight the component!');
}