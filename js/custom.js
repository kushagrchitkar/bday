(function() {
    function addTextbox() {
        const app = document.querySelector('.App');
        if (app) {
            if (!document.getElementById('custom-textbox')) {
                const textbox = document.createElement('input');
                textbox.id = 'custom-textbox';
                textbox.type = 'text';
                textbox.placeholder = 'Enter text here';
                textbox.style.cssText = 'padding: 10px; width: 80%; max-width: 300px; margin: 20px auto; display: block;';
                app.insertBefore(textbox, app.firstChild);
            }
        } else {
            setTimeout(addTextbox, 100);
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', addTextbox);
    } else {
        addTextbox();
    }
})();