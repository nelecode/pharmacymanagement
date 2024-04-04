// import dotenv from "dotenv"
// import connectDB from "./db/dbconnection.js"
// dotenv.config()


// connectDB()
// .then(() => {
//     app.listen(process.env.PORT || 3000, () => {
//         console.log(`app is listenning on port ${process.env.PORT}`);
//     })
// })
// .catch(err => {
//     console.log("mongodb connection failed", err);
// })

// import express from "express"
// import cors from "cors"

// const app = express()

// app.use(cors({
//     origin: process.env.CORS_ORIGIN,
//     credentials: true
// }))
// app.use(express.json({ limit: "16kb" }))
// app.use(express.urlencoded({ extended: true, limit: "16kb" }))
// app.use(express.static("public"))
// app.use(cookieParser())


// export { app }

import dotenv from "dotenv"
import express from "express"
import cors from "cors"
import connectDB from "./db/dbconnection.js"
import router from "./routes/ProductsRoute.js"
dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000

connectDB()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/api", router)



app.listen(PORT, () => {
    console.log("app is running on port 3000");
})