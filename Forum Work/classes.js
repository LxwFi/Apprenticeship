class User {
    constructor(username) {
        this.username = username;
    }
    newPost(title, date, text, fpage) {
        if (text === " " || text === "") {
            console.log("Make sure to have text in your post (err from newPost)")
            return;
        } else {
            fpage.posts.push(new Post(title, date, this, text));
        }
    }
    newComment(date, text, post) {

        if (text === " " || text === "") {
            console.log("Make sure to have text in your comment (err from newComment)")
            return;
        } else {
            post.comments.push(new Comment(date, this, text))
        }

    }
};
class Comment {
    constructor(date, author, text) {
        if (text === " " || text === "") {
            console.log("Make sure to have text in your comment (err from Comment class)")
            return;
        } else {
            this.date = date;
            this.author = author;
            this.text = text;
        }
    }

};
class Post {
    constructor(title, date, author, text) {
        if (text === " " || text === "") {
            console.log("Make sure to have text in your post (err from Post class)")
        } else {
            this.title = title;
            this.date = date;
            this.author = author;
            this.text = text;
            this.comments = [];
        }
    }
};
class Fpage {
    constructor(title) {
        if (title === " " || title === "") {
            console.log("Forum page cannot be empty! (err from Fpage class)")
        } else {
            this.title = title;
            this.posts = [];
        }
    }
};

let fpage1 = new Fpage("Hello")
let user1 = new User("Bobson")
user1.newPost("bombt", "today", "Text", fpage1);
user1.newComment("Today", "Some text", fpage1.posts[0]);
console.log(user1);
console.log(fpage1);



module.exports = { User, Comment, Post, Fpage };