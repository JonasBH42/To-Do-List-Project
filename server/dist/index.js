// import * as fs from 'fs';
// import cors from "cors";
import express from 'express';
const app = express();
const port = 5000;
app.get('/', (req, res) => {
    res.send('Hello World');
});
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map