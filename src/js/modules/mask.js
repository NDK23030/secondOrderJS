const mask = (selector) => {

    let setCursorPosition = (pos, elem) => {
        elem.focus();
        let range;

        if(elem.setSelectionRange) {
            elem.setSelectionRange(pos, pos);
        } else if(elem.createTextRange) {
            range = elem.createTextRange();

            range.colapse(true);
            range.moveEnd('character', pos);
            range.moveStart('character', pos);
            range.select();
        }
    };

    function maskNumber(e) {
        let matrix = '+7 (___) ___-__-__',
            i = 0,
            def = matrix.replace(/\D/g, ''),
            value = this.value.replace(/\D/g, '');

        if (def.length >= value.length) {
            value = def;
        }

        this.value = matrix.replace(/./g, function(a) {
            return /[_\d]/.test(a) && i < value.length ? value.charAt(i++) : i >= value.length ? '' : a;
        });

        if(e.type === 'blur') {
            if(this.value.length == 2) {
                this.value = '';
            }
        } else {
            setCursorPosition(this.value.length, this);
        }
    }

    let inputs = document.querySelectorAll(selector);

    inputs.forEach(input => {
        input.addEventListener('input', maskNumber);
        // input.addEventListener('keypress', maskNumber);
        input.addEventListener('click', maskNumber);
        input.addEventListener('focus', maskNumber);
        input.addEventListener('blur', maskNumber);
    });
};

export default mask;