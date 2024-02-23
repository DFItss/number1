const {MongoClient} = require('mongodb');
const Input = require('./userInput');

async function listall(){
  //const uri = process.env.DB_LOCAL_URL;
   const uri = process.env.DB_ATLAS_URL;
  // console.log(uri);
   const client = new MongoClient(uri);

   try {
      await client.connect();
      const dbname = 'number1';
      const colname = 'lecture';
      const result = await client.db(dbname).collection(colname).find({}).toArray();

      const projection = { name: 1 , price: 1};
   
      console.log(typeof(result));
      console.log(result);
   } finally {
      await client.close();
   }
};

async function find(table){
   //const uri = process.env.DB_LOCAL_URL;
    const uri = process.env.DB_ATLAS_URL;
   // console.log(uri);
    const client = new MongoClient(uri);
 
    try {
      await client.connect();
      const dbname = 'number1';
      let pk = await Input.getUserInput();
      pk = Number(pk)
      let pkname = `${table}_id`;
      let qry = {}
      qry[pkname] = pk;
      let result = await client.db(dbname).collection(table).find(qry).toArray();
      console.log(typeof(result));
      console.table(result);
   } finally {
       await client.close();
    }
 };

//listall(console.error);
find(console.error)

