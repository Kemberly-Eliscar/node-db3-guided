const db = require("../data/config")

function findByUserId(id){
    return db("posts")
        .join("users", "users.id", "posts.user_id") // join the user's table where the user id matches the post user id.
        .where("posts.user_id", id)
        .select("posts.id", "posts.contents", "users.username") // 

}

module.exports = {
    findByUserId, //exports an object 
}