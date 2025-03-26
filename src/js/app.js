document.getElementById('addEditor').addEventListener('click', function () {
    addEditor();
});

// Warn the user before closing the page
window.addEventListener('beforeunload', function (e) {
    e.preventDefault();
    e.returnValue = 'Are you sure you want to leave? Unsaved changes may be lost.';
});

// Save data functionality
document.getElementById('saveData').addEventListener('click', function () {
    saveEditorsData();
});

document.querySelector('.copy-btn').addEventListener('click', function () {
    const textarea = document.querySelector('#textarea');
    textarea.select();
    document.execCommand('copy');
    // alert('Text copied to clipboard!');
});

document.querySelector('.paste-btn').addEventListener('click', async function () {
    const textarea = document.querySelector('#textarea');
    const text = await navigator.clipboard.readText();
    textarea.value += text;
    // alert('Text pasted from clipboard!');
});
