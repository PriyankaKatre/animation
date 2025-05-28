
document.addEventListener('DOMContentLoaded', () => {
    // const scroll = new LocomotiveScroll({
    //     el: document.querySelector('.main'),
    //     smooth: true
    // });
    const items = document.querySelectorAll('.item');
    const imageContainer = document.querySelector('.fixed-image-container')
    Array.from(items).forEach(item => {
        const image = item.getAttribute('data-image')
        item.addEventListener('mouseover', () =>{
            imageContainer.classList.add('fixed-image-container-visible')
            imageContainer.style.backgroundImage = `url(${image})`;
        })
        item.addEventListener('mouseleave', () =>{
            imageContainer.classList.remove('fixed-image-container-visible')
        })        
    });
 });


