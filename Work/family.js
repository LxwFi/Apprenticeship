

// const express = require("express");

// let app = express();



let DianeParents = {
    Mother: "Tracy",
    Father: "Benjamin",
}
let Diane = {
    name: "Diane",
    Parents: DianeParents,
    printParents: function () {
        console.log(this.name + "'s " + "parents are " + this.Parents.Mother + " and " + this.Parents.Father);
    }
}
let ThomasParents = {
    Mother: "Hagrid",
    Father: "Sam",
}
let Thomas = {
    name: "Thomas",
    Parents: ThomasParents,
    printParents: function () {
        console.log(this.name + "'s " + "parents are " + this.Parents.Mother + " and " + this.Parents.Father);
    }
}
let JohnParents = {
    Mother: "Diane",
    Father: "Thomas",
}
let John = {
    name: "John",
    Parents: JohnParents,
    printParents: function () {
        console.log(this.name + "'s " + "parents are " + this.Parents.Mother + " and " + this.Parents.Father);
    },
}






class Person {
    constructor(name, parents) {
        this.name = name;
        this.Parents = parents
        this.printParents = function () {
            console.log(this.name + "'s " + "parents are " + this.Parents.Mother + " and " + this.Parents.Father);
        }
    }
}


let family = function (name, parents) {

    let John = new Person(name , parents)

}

// printParents = (parents) => console.log(parents.Parents);


// console.log(John);
// John.printParents();

class Node {
    constructor(value) {
        this.val = value;
        this.next = null;
    }
}

class Head {
    constructor() {
        this.head = null;
    }
}


Head.prototype.add = function (val) {
    curr = this.head;
    let new1;
    for (let i in val) {
        new1 = new Node(val[i]);
        if (curr == null) {
            this.head = new1;
            this.length++;
            curr = this.head;
        } else {
            curr.next = new1;
            curr = curr.next;
        }
    }
    return this.head
}

let Assemble = function (arr) {

    let newList = new Head();
    return newList.add(arr);
}

var array = [11, 6, 3, 7, 8, 21, 62, 1];
var list = Assemble(array);

function printLinked(lili) {
    while (lili) {
        console.log(lili.val);
        lili = lili.next;
    };
};



function sortAround(obj, num) {
    let left = []; let right = [];
    while (obj !== null) {
        if (obj.val <= num) {
            left.push(obj.val);
        } else {
            right.push(obj.val);
        };
        obj = obj.next;
    };
    return Assemble(left.concat(right));
};

const [a, b, c] = [3, 1, 4, 1, 5];
console.log(c);





