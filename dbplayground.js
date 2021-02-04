// we are going to play around with our db in here
// require

const db = require('./models')

/*
firstName: DataTypes.STRING,
lastName: DataTypes.STRING,
age: DataTypes.INTEGER,
email: DataTypes.STRING
*/


// db.user.create({
//   firstName: 'Rome',
//   lastName: 'Bell',
//   age: 33
// }).then((data)=> {
//     console.log(data)
// })

// const brian = db.user.create({
//     firstName: 'Brian',
//     lastName: 'Krabec',
//     age: 27
// }).then((user)=> {
//     // in this callback we have access to the user
// })

// db.user.create({
//     firstName: 'Nick',
//     lastName: 'Schmitt',
//     age: 28
// }).then((user)=> {
//     // in this callback we have access to the user
// })

db.user.findOne({
    where: {firstName: 'Nick'}
  }).then(function(user) {
      // the .get() method will clean it up to be one object
      console.log(user.get())
    // user will be an instance of User, remember Classes? This stores the content of the table entry with rid 2. if such an entry is not defined you will get null
  })
  .catch(err=> { 
      // at the end to catch any errors that happened in the chain
      console.log(err)
  })


db.user.findAll()
.then((users)=> {
    // print each name
    users.forEach( user=> {
        console.log(user.firstName + ' ' + user.lastName)
    })
})