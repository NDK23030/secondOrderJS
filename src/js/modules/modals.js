const modals = (state) => {
    
    const allModals = document.querySelectorAll('[datat-modal]'),
          scrollWidth = calcScroll();
    let isOpenModal = false;

    function bindModal(triggerSelector, modalSelector, closeSelector, destroy = false) {
        const trigger = document.querySelectorAll(triggerSelector),
              modal = document.querySelector(modalSelector),
              close = document.querySelector(closeSelector);

        trigger.forEach(item => {
            item.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }
                isOpenModal = true;

                if(destroy) {
                    item.remove();
                }

                if (modal.classList.contains('popup_calc_profile')) {
                    if(!state.form || !state.width || !state.height) {
                        e.removeEventListener();
                    }
                }

                if (modal.classList.contains('popup_calc_end')) {
                    if(!state.type || !state.profile) {
                        e.removeEventListener();
                    }
                }

                allModals.forEach(item => {
                    item.style.display = 'none';
                });
    
                modal.style.display = "block";
                document.body.style.overflow = "hidden";
                document.body.style.marginRight = `${scrollWidth}px`;
            });    
        });

        close.addEventListener('click', () => {
            allModals.forEach(item => {
                item.style.display = 'none';
            });

            modal.style.display = "none";
            document.body.style.overflow = "";
            document.body.style.marginRight = `0px`;
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                allModals.forEach(item => {
                    item.style.display = 'none';
                });

                modal.style.display = "none";
                document.body.style.overflow = "";
                document.body.style.marginRight = `0px`;
            }
        })
    }

    function showModalByTime(selector, time) {
        setTimeout(() => {
            let display;

            document.querySelectorAll('[data-modal]').forEach(item => {
                if(getComputedStyle(item).display !== 'none') {
                    display = 'block';
                }
            });

            if(!display) {
                document.querySelector(selector).style.display = 'block';
                document.body.style.overflow = "hidden";
            }
        }, time);
    }

    function calcScroll() {
        let div = document.createElement('div');

        div.style.width = '50px';
        div.style.height = '50px';
        div.style.overflowY = 'scroll';
        div.style.visibility = 'hidden';

        document.body.appendChild(div);
        let scrollWidth = div.offsetWidth - div.clientWidth;
        div.remove();

        return scrollWidth;
    }

    function openByScroll(selector) {
        window.addEventListener('scroll', () => {
            const scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);

            if(!isOpenModal && (window.pageYOffset + document.documentElement.clientHeight) >= scrollHeight) {
                document.querySelector(selector).click();
            }
        });
    }

    bindModal('.button-design', '.popup-design', '.popup-design .popup-close');
    bindModal('.button-consultation', '.popup-consultation', '.popup-consultation .popup-close');
    bindModal('.fixed-gift', '.popup-gift', '.popup-gift .popup-close', true);
    openByScroll('.fixed-gift');
    // showModalByTime('.popup-consultation', 5000);
};

export default modals;