const express = require('express');
const taskRoutes = require('./taskRoutes');
const cors= require('cors');

require('./src/db/conn');
const PORT= 3200;

const app = express();

app.use(express.json());
app.use(cors());

app.use('/', taskRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
