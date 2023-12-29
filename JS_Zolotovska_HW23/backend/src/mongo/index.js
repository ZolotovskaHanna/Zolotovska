const mongoose = require('mongoose');

const user = 'shkelebeyav';
const password = 'Nc3slknOpVuc4vLh';

function mongo() {
    mongoose.connect(
        `mongodb+srv://${user}:${password}@cluster0.ldwpfm6.mongodb.net/?retryWrites=true&w=majority`,
        {},
    ).then(() => console.log('Connected!'));
}

module.exports = mongo;