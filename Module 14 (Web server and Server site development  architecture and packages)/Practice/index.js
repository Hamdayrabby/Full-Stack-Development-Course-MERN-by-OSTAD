const app = require('./app');
const dotenv = require('dotenv');
dotenv.config({ path: './config/config.env' });

app.listen(process.env.RUNNING_PORT, () => {
    console.log(
        "The server is running on port " + process.env.RUNNING_PORT
    );
});