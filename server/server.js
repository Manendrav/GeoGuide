const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello from our server!')
})

console.log(process.env.PORT)

app.listen(5000, () => {
    console.log(`Server is running on port 5000`);
});