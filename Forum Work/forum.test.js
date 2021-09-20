const {User, Comment, Post, Fpage} = require("./classes");


let fpage1 = new Fpage("Hello")
let user1 = new User("Bobson")
user1.newPost("bombt", "today", "This is some text", fpage1);
user1.newComment("Today", "Some text", fpage1.posts[0]);



test("Testing username", () => {
    expect(user1).toEqual({username: "Bobson"});
});

test("Testing new post", () => {
    expect(fpage1.posts).toEqual([{"author": {"username": "Bobson"}, "comments": [{"author": {"username": "Bobson"}, "date": "Today", "text": "Some text"}], "date": "today", "text": "This is some text", "title": "bombt"}]);
});

