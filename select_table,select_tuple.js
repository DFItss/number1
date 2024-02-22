const { MongoClient } = require('mongodb');

async function main() {
    const uri = process.env.DB_LOCAL_URL;  // MongoDB 연결 URI
      const client = new MongoClient(uri);

      try {
         await client.connect();

        // MongoDB에서 전체 데이터 조회
         const allData = await getAllData(client, "mydb", "users");

        // 전체 데이터 출력
         if (allData.length > 0) {
            console.log("전체 사용자 정보:");
            allData.forEach(user => {
                  console.log(JSON.stringify(user));
            });
         } else {
            console.log("사용자 정보가 없습니다.");
         }
      } finally {
         await client.close();
      }
}

async function getAllData(client, dbname, colname) {
    const result = await client.db(dbname).collection(colname).find({}).toArray();
    return result;
}

main().catch(console.error);