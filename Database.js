const mongoose = require('mongoose');

const ConnectToDatabase = () => { 

  let con_id = process.env.DB_CON || "mongodb+srv://anshuman:1621Anshu@cluster0.juk9n.mongodb.net/college_students?retryWrites=true&w=majority";

  mongoose.connect(con_id)
    .then(() => { 
      console.log("Database Connected!")
    })
    .catch((err) => { 
      console.log(err);
    })
}

module.exports = ConnectToDatabase;