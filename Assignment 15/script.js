// Q.1  Write a JavaScript program to list the properties of a JavaScript object
var student = {
	name : "David Rayy",
	sclass : "VI",
	rollno : 12 
}
console.log(student)
//2. Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.
var studentName = {
	name: "Moeez",
	sclass : 8,
	rollNo : 186215, 
}
console.log("Before delete the rollno" , studentName)
delete studentName.rollNo
console.log("After delete the rollno" , studentName)

//3. Write a JavaScript program to get the length of a JavaScript object.
var student = {
	name : "David Rayy",
	sclass : "VI",
	rollno : 12 
};
var objlength = Object.keys(student).length;
console.log("The length of the object is:", objlength)

// 4. Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books.   
var library = [
	{
		author : 'Moeez' ,
		title : 'how to become rich' ,
		readingstatus : true ,

	},
	{
		author : 'Samar Abas' ,
		title : '7 good habits of rich people' ,
		readingstatus : true
	},
	{
		author : 'Sameer Ali' ,
		title : 'Smart work is better than hard work' ,
		readingstatus : false,
	}

]
console.log("complete array" , library)
console.log("2nd object in array" , library[1])
console.log("Only author name of 3rd object in array" , library[2].author)