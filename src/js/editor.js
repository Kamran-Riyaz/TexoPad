let editorCount = 2;

function addEditor() {
    const editorsContainer = document.getElementById('editors');
    const newEditor = document.createElement('div');
    newEditor.className = 'editor';

    // Add a new editor with copy and paste buttons
    newEditor.innerHTML = `
        <h2>Editor ${editorCount++}</h2>
        <button class="paste-btn">Paste</button>
        <button class="copy-btn">Copy</button>
        <textarea placeholder="Start typing..."></textarea>
    `;
    editorsContainer.appendChild(newEditor);

    // Add event listeners for copy and paste buttons
    const textarea = newEditor.querySelector('textarea');
    const copyBtn = newEditor.querySelector('.copy-btn');
    const pasteBtn = newEditor.querySelector('.paste-btn');

    copyBtn.addEventListener('click', () => {
        textarea.select();
        document.execCommand('copy');
    });

    pasteBtn.addEventListener('click', async () => {
        const text = await navigator.clipboard.readText();
        textarea.value += text;
    });
}

