const express = require('express');
const bodyParser = require("body-parser");
const morgan = require("morgan");
const filmRouter = require("./routes/MyFilmRouter")
const userRouter = require("./routes/MyUserRouter")
const favorisRouter = require("./routes/MyFavorisRouter")
const commentRouter = require("./routes/MyCommentRouter")
const path = require("path")
const cors = require('cors')

const PORT = 80;
const app = express();

app.use(cors("*"))
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(filmRouter);
app.use(userRouter);
app.use(commentRouter);
app.use(favorisRouter);

app.listen(PORT, () => {
    console.log(`Server running @http://localhost:${PORT}`)
})

app.use("/",express.static(path.join(__dirname,"font")))

app.get('',(req,resp)=>{
    resp.sendFile(path.join(__dirname,"font","index.html"))
})
