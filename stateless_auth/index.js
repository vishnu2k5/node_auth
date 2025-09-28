const express = require('express');


const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const PORT = 3000;

app.post('/login', (req, res) => {
    const {username, password} = req.body
    //url formate is http://localhost:3000/login?username=user&password=pass
    if (username === 'user' && password === 'pass') {
        res.send('Login successful!');
    } else {
        res.status(401).send('Invalid credentials');
    }
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});