function saveEditorsData() {
    const textareas = document.querySelectorAll('textarea');
    let content = '';

    // Add date, time, and day of the week at the top of the file
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'numeric', day: 'numeric' };
    const dateWithDay = now.toLocaleDateString(undefined, options);
    const time = now.toLocaleTimeString();
    const timestamp = `Saved on: ${dateWithDay} ${time}\n\n`;
    content += timestamp;

    // Collect content from all textareas
    textareas.forEach((textarea, index) => {
        content += `********** Editor ${index + 1}: **********\n\n${textarea.value}\n\n\n\n\n\n\n`;
    });

    // Create and download the file
    const blob = new Blob([content], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'texopad_data.txt';
    link.click();
    URL.revokeObjectURL(link.href);
}

