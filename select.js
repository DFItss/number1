const {MongoClient} = require('mongodb');
const Input = require('./userInput');

async function listall(colname){
  //const uri = process.env.DB_LOCAL_URL;
   const uri = process.env.DB_LOCAL_URL;
  // console.log(uri);
   const client = new MongoClient(uri);

   try {
      await client.connect();
      const dbname = 'number1';
      
      // const colname = 'lecture';
      //원래 있던 코드 
      
      const result = await client.db(dbname).collection(colname).find({}).toArray();

      const projection = { name: 1 , price: 1};
   
      console.log(typeof(result));
      console.log(result);
   } finally {
      await client.close();
   }
};

async function find(table){//
   //const uri = process.env.DB_LOCAL_URL;
    const uri = process.env.DB_LOCAL_URL;
   // console.log(uri);
    const client = new MongoClient(uri);
 
    try {
      await client.connect();
      const dbname = 'number1';
   
      console.log(table);//콘솔로그 추가 
      let pk = await Input.getUserInput();
      pk = Number(pk)//앞의 console.logt삭제하기 
      let pkname = `${table}_id`;//여기 인자 값을 tanble로 수정 
      console.log(typeof(pk))
      console.log(pkname);
      let qry = {}
      qry[pkname] = pk;
      console.log(qry);
      console.log(typeof(qry));
      //  let result = await client.db(dbname).collection(colname).find({pkname : pk}).toArray();
      let result = await client.db(dbname).collection(table).find(qry).toArray();
      console.log(typeof(result));
      console.table(result);
   } finally {
       await client.close();
    }
 };

//listall(console.error);
// find(console.error)

module.exports={find,listall};  