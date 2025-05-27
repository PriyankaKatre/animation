 document.addEventListener('DOMContentLoaded', () => {

    const marquee = document.querySelector('.marquee');
console.log('marquee', marquee)
        marquee.addEventListener('animationiteration', () => {
            marquee.style.animation = 'none';
            marquee.offsetHeight; // Trigger reflow
            marquee.style.animation = null;
        });
    const para1 = document.querySelector('.wrapper2 :first-child');
    const para2 = document.querySelector('.wrapper2 :last-child');
    const item3 = document.querySelector('.item3');
  console.log(para1)
     const observer = new IntersectionObserver((entries) => {
      
         entries.forEach((entry) => {
            if (entry.isIntersecting) {
                let ele = entry.target;
                let rect = ele.getBoundingClientRect();
                console.log('rect', rect)
                if(entry.target === para1) {
                 entry.target.style.animation = 'paraAnimateLeft 2s ease';
                }
                else if(entry.target === para2) {
                 entry.target.style.animation = 'paraAnimateRight 2s ease';
                }
                else if(entry.target === item3) {
                 entry.target.style.animation = 'moveItem 2s ease'
                }
            }
         });
     });

     observer.observe(para1);
      observer.observe(para2);
     observer.observe(item3);

 });