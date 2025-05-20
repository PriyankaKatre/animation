 document.addEventListener('DOMContentLoaded', () => {
     const item2 = document.querySelector('.item2');
     const item3 = document.querySelector('.item3');

     const observer = new IntersectionObserver((entries) => {
        console.log(entries)
         entries.forEach((entry) => {
             if (entry.isIntersecting) {
                 entry.target.style.animation = 'moveItem 1s ease-in';
             }
         });
     });

     observer.observe(item2);
     observer.observe(item3);
 });