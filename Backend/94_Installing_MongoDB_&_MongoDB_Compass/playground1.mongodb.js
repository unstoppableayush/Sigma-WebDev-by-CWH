
// Select the database to use.
use('Sigma');

// Insert a few documents into the sales collection.
db.getCollection('Courses').insertMany([
    {
      "name": "Responsive Web Design",
      "price": "25000",
      "instructor": "TechGuru"
    },
    {
      "name": "Full Stack Development",
      "price": "30000",
      "instructor": "CodeNinja"
    },
    {
      "name": "Frontend Development Essentials",
      "price": "18000",
      "instructor": "WebWizard"
    }
  ]
  
);

// Print a message to the output window.
console.log("done inserting data");
