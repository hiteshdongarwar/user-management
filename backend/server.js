const express = require("express")
const cors = require("cors")

const User = require("./userModel")

const app = express()

app.use(cors())
app.use(express.json())

app.post("/users", async(req, res) => {

    try {

        const user = new User(req.body)

        await user.save()

        res.json(user)

    } catch (error) {

        res.status(500).json({ error: error.message })

    }

})

app.get("/users", async(req, res) => {

    const users = await User.find()

    res.json(users)

})

app.delete("/users/:id", async(req, res) => {

    await User.findByIdAndDelete(req.params.id)

    res.json({ message: "Deleted" })
})

app.get("/", (req, res) => {
    res.send("Server is running");
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});
