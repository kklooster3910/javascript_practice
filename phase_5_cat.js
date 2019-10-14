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