const filter = () => {
    const menu = document.querySelector('.portfolio-menu'),
          items = menu.querySelectorAll('li'),
          wrapper = document.querySelector('.portfolio-wrapper'),
          markAll = wrapper.querySelectorAll('.all'),
          no = document.querySelector('.portfolio-no');

    const typeFilter = (markType) => {
        markAll.forEach(item => {
            item.style.display = 'none';
            item.classList.remove('animated', 'fadiIn');
        });

        no.style.display = 'none';
        no.classList.remove('animated', 'fadiIn');

        if(markType.length) {
            markType.forEach(mark => {
                mark.style.display = 'block';
                mark.classList.add('animated', 'fadiIn');
            });
        } else {
            no.style.display = 'block';
            no.classList.add('animated', 'fadiIn');
        }
    };

    items.forEach(item => {
        item.addEventListener('click', (e) => {
            const markType = wrapper.querySelectorAll(`.${e.target.classList[0]}`)
            typeFilter(markType);
        });
    });


    menu.addEventListener('click', (e) => {
        let target = e.target;
        if(target && target.tagName == "LI") {
             items.forEach(item => item.classList.remove('active'));
             target.classList.add('active');
        } 
    });
};

export default filter;