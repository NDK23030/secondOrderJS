const checkTextInputs = (selector) => {
    const txtInputs = document.querySelectorAll(selector);

    txtInputs.forEach(input => {
        input.addEventListener('input', () => {
            input.value = input.value.replace(/[^а-яё 0-9]/ig, '');
        })
    })
};

export default checkTextInputs