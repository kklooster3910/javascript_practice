function Cat(name, owner) {
  this.name = name;
  this.owner = owner;
};

Cat.prototype.cuteStatement = function() {
  console.log(`${this.owner} loves ${this.name}`)
};

function Student(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.courses = [];
};

Student.prototype.name = function() { 
  console.log(`${this.firstName + ' ' + this.lastName}`);
}

function Course(courseName, enrolled = [], dpt) {
  this.courseName = courseName;
  this.enrolled = enrolled;
  this.department = dpt;
}

Student.prototype.enroll = function(course) {
  course.enrolled.push(this.name());
  this.courses.push(course.courseName);
  // this.courses.push(course.courseName);
  // return course.enrolled;
}

Student.prototype.courseLoad = function() {

}

// let a = new Set();
// console.log(a);

// There are N rooms and you start in room 0.  Each room has a distinct number in 0, 1, 2, ..., N-1, and each room may have some keys to access the next room. 

// Formally, each room i has a list of keys rooms[i], and each key rooms[i][j] is an integer in [0, 1, ..., N-1] where N = rooms.length.  A key rooms[i][j] = v opens the room with 
// number v.

// Initially, all the rooms start locked (except for room 0). 

// You can walk back and forth between rooms freely.

// Return true if and only if you can enter every room.

// Input: [[1],[2],[3],[]]
// Output: true
// Explanation:  
// We start in room 0, and pick up key 1.
// We then go to room 1, and pick up key 2.
// We then go to room 2, and pick up key 3.
// We then go to room 3.  Since we were able to go to every room, we return true.

// Input: [[1,3],[3,0,1],[2],[0]]
// Output: false
// Explanation: We can't enter the room with number 2.

// Input: [[1],[2],[3],[]]
// Output: true
// Explanation:  
// We start in room 0, and pick up key 1.
// We then go to room 1, and pick up key 2.
// We then go to room 2, and pick up key 3.
// We then go to room 3.  Since we were able to go to every room, we return true.

// Input: [[1,3],[3,0,1],[2],[0]]
// Output: false
// Explanation: We can't enter the room with number 2.

// Input: [[1],[2],[3],[]]
// Output: true
// Explanation:  
// We start in room 0, and pick up key 1.
// We then go to room 1, and pick up key 2.
// We then go to room 2, and pick up key 3.
// We then go to room 3.  Since we were able to go to every room, we return true.

// Input: [[1,3],[3,0,1],[2],[0]]
// Output: false
// Explanation: We can't enter the room with number 2.