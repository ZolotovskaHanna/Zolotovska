import axios from 'axios';

const API_URL = 'http://localhost:5000/todos';

document.getElementById('get').addEventListener('click', async () => {
    const res = await axios.get(API_URL);
    document.getElementById('response1').textContent = JSON.stringify(res.data, null, 2);
});

document.getElementById('get_id').addEventListener('click', async () => {
    const id = document.getElementById('todo_id').value;
    const res = await axios.get(`${API_URL}/${id}`);
    document.getElementById('response2').textContent = JSON.stringify(res.data, null, 2);
});

document.getElementById('post').addEventListener('click', async () => {
    const text = document.getElementById('todo_text').value;
    await axios.post(API_URL, {
        text: text,
        checkbox: false,
    });
});

document.getElementById('put_id').addEventListener('click', async () => {
    const id = document.getElementById('todo_id').value;
    const text = document.getElementById('todo_text').value;
    const res = await axios.put(`${API_URL}/${id}`, {
        text: text,
    });
    document.getElementById('response2').textContent = JSON.stringify(res.data, null, 2);
});

document.getElementById('delete_id').addEventListener('click', async () => {
    const id = document.getElementById('todo_id').value;
    const res = await axios.delete(`${API_URL}/${id}`);
    document.getElementById('response2').textContent = JSON.stringify(res.data, null, 2);
});








