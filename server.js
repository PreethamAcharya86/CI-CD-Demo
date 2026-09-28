import express from "express"
import sum from "./src/sum.js"

const app = express()
const PORT = 5000

app.listen(PORT, () => {
    console.log("Server is listening....")
})

app.get("/home", async (req, res) => {
    res.json({message : "Root route.."});
})

app.get("/sum/:a/:b", async(req, res) => {
    const {a, b} = req.params;
    res.json({ans : sum(parseInt(a), parseInt(b))})
})