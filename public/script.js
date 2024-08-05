document.getElementById('post-greet-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const language = document.getElementById('language').value;
    const greeting = document.getElementById('greeting').value;

    const response = await fetch('/api/greet', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ language, greeting })
    });

    const result = await response.json();
    document.getElementById('post-response').textContent = result.message;
});

document.getElementById('get-greet-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const language = document.getElementById('get-language').value;

    const response = await fetch(`/api/greet?name=${name}&language=${language}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    const result = await response.json();
    document.getElementById('get-response').textContent = result.message;
});
