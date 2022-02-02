//get the client
const mysql = require('mysql2');
// create the connection to database
// const connection = mysql.createConnection({
// // see credentials file
// // const query = `SELECT * FROM Products`;

// // connection.query(query, (err, results, fields) =>{
// //     if(err){
// //         console.log(err)
// //     }
// //      console.log(results)
// // });


const getAllProducts = async () =>{
const query = `SELECT * FROM Products`;
const [err, results, fields] = await connection.promise().query(query)

console.log(results)
return results

}

const createProducts = async (product) => {
    const insertQuery = `INSERT INTO Products (Description, SKU, UserId)
    VALUES ('${product.description}', '${product.sku}', ${product.userId})`
       const [results, fields] = await connection.promise().query(insertQuery);

       console.log(results);

       return results;
}    

//getAllProducts()
 createProducts({
    description: "Emil new Product",
   sku: "Emil1234",
   userId: 1

});


// close connection 
connection.end();
