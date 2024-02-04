document.querySelector('.calculator').addEventListener('click', function(e) {
    if (e.target.tagName === 'BUTTON') {
        const input = document.querySelector('.display');
        const value = e.target.textContent;
        
        if (value === 'C') {
            input.value = '';
        } else if (value === '=') {
            try {
                input.value = eval(input.value);
            } catch (error) {
                input.value = 'Error';
            }
        } else {
            input.value += value;
        }
    }
});