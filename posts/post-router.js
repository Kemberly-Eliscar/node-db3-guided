const express = require('express')
const postModel = require("./post-model")

const router = express.Router({
    mergeParams: true,
})

router.get("/", async (req, res, next) => {
    try {
        const { id } = req.params // same as `const id = req.params.id`
        const posts = await postModel.findByUserId(id)
        res.json(posts)
    } catch(err) {
        next(err)
    }
})

module.exports = router
