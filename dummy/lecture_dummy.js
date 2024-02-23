// MongoDB와 연결
const { MongoClient } = require('mongodb');

// MongoDB 접속 정보
const uri = process.env.DB_LOCAL_URL;
const dbName = 'number1'; // 데이터베이스 이름

// 더미 데이터
const dummyData = [
  { 
    lecture_id: 1,
    lecture_name: '컴퓨터 구조',
    lecture_day: 'Mon',
    lecture_time: '10:00 AM - 12:00 PM',
    lecture_credit: 3,
    lecture_type: 'CS',
    major_id: 1,
    professor_id: 123456789
  },
  {
    lecture_id: 2,
    lecture_name: '자료구조',
    lecture_day: 'Tue',
    lecture_time: '1:00 PM - 3:00 PM',
    lecture_credit: 3,
    lecture_type: 'CS',
    major_id: 1,
    professor_id: 987654321
  },
  {
    lecture_id: 3,
    lecture_name: '데이터베이스',
    lecture_day: 'Wed',
    lecture_time: '2:00 PM - 6:00 PM',
    lecture_credit: 3,
    lecture_type: 'CS',
    major_id: 1,
    professor_id: 887741321
  },
  {
    lecture_id: 4,
    lecture_name: '웹프로그래밍',
    lecture_day: 'Tue',
    lecture_time: '9:00 AM - 11:00 AM',
    lecture_credit: 3,
    lecture_type: 'CS',
    major_id: 1,
    professor_id: 496276344
  },
  {
    lecture_id: 5,
    lecture_name: '프로그래밍언어',
    lecture_day: 'Tue',
    lecture_time: '9:00 AM - 11:00 AM',
    lecture_credit: 3,
    lecture_type: 'CS',
    major_id: 1,
    professor_id: 789654123
  },
  // 나머지 더미 데이터 추가
];

// MongoDB 연결 및 데이터 삽입
async function insertDummyData() {
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  
  try {
    await client.connect();
    console.log("Connected successfully to server");
    
    const db = client.db(dbName);
    const collection = db.collection('lecture'); // lecture 테이블
    
    // 더미 데이터 삽입
    const result = await collection.insertMany(dummyData);
    console.log(`${result.insertedCount} documents inserted`);
  } catch (err) {
    console.error("Error: ", err);
  } finally {
    await client.close(); // 연결 종료
  }
}

insertDummyData();
