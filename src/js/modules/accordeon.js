const accordeon = (headSelector) => {
    const header = document.querySelectorAll(headSelector);

    header.forEach(btn => {
        btn.addEventListener('click', function() {
            header.forEach(btn => {
                if(!this.classList.contains('active-style')) {
                    btn.classList.remove('active-style');
                    btn.nextElementSibling.classList.remove('active-content');
                    btn.nextElementSibling.style.maxHeight = '0px';
                }
            });

            this.classList.toggle('active-style');
            this.nextElementSibling.classList.toggle('active-content');

            if(this.classList.contains('active-style')) {
                this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 80 + "px";
            } else {
                this.nextElementSibling.style.maxHeight = '0px';
            }
        });
    });

        //   blocks = document.querySelectorAll(blocksSelector);

    // blocks.forEach(block => {
    //     block.classList.add('animated', 'fadeInUp');
    // });

    // header.forEach(btn => {
    //     btn.addEventListener('click', function() {
    //         if(!this.classList.contains('active')) {
    //             header.forEach(btn => {
    //                 btn.classList.remove('active', 'active-style');
    //             });
    //             this.classList.add('active', 'active-style');
    //         }
    //     });
    // });
};

export default accordeon;