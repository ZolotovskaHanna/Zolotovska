document.getElementById('fetch-button').addEventListener('click', function() {
    const input = document.getElementById('endpoint-input');
    const resultArea = document.getElementById('result');
    const spinner = document.getElementById('loading-spinner');
    const endpoint = input.value.trim();

    let regex = /\/api\/(\w+)\/(\d+)\/?/;
    let matches = endpoint.match(regex);

    if (matches && matches.length === 3) {
        let controller = matches[1];
        let id = matches[2];

        spinner.style.display = 'block';
        resultArea.innerHTML = '';

        fetch(endpoint)
            .then(response => response.json())
            .then(data => {
                resultArea.textContent = `Controller: ${controller}\nID: ${id}\nEndpoint: ${controller}/${id}\n\nData: ${JSON.stringify(data, null, 2)}`;
            })
            .catch(error => {
                resultArea.textContent = 'Error: ' + error;
            })
            .finally(() => {
                spinner.style.display = 'none';
            });
    } else {
        resultArea.textContent = 'Invalid endpoint format.';
    }
});
