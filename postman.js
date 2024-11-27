const express = require('express');
const app = express();
const port = 1000;

const blah = {
    message: "Hello",
    status: "Success"
};

app.get('/', (req, res) => {
    res.json(blah);
});

app.listen(port, () => {
    console.log(Server is listening at http://localhost:${port})
});
