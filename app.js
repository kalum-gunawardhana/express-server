const express = require('express');
const app = express();

app.use(express.json());

app.get('/users', (req, res) => {
    res.json([{ id: 1, name: 'Kalum' }, { id: 2, name: 'Tharindu' }]);
});

app.post('/users', (req, res) => {
    const user = req.body;
    console.log('New user:', user);
    res.status(201).json({ message: 'User created', user });
});

app.listen(4000, () => console.log('Server running on http://localhost:4000'));