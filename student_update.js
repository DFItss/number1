const Input = require("./userInput");
// const Connection = require("./connection")
const { MongoClient } = require('mongodb');

async function main(){
  const uri = process.env.DB_LOCAL_URL;
  const client = new MongoClient(uri);

  try{
    await client.connect();
    await main1(client);
    //mongodb 클라이언트를 함수에 전달 
  }finally{
    await client.close();
  }
};

async function main1(client){
  let exist = true;
  let student_id;

  let collection = client.db('number1').collection('student');

  //while문으로 반복실행
  while (exist) {
    console.log(`수정할 학생의 학번을 입력하세요`);
    student_id = await Input.getUserInput();

    let qry = {"student_id":Number(`${student_id}`)}
    // MongoDB에서 데이터 확인
    let student = await client.db('number1').collection('student').findOne(qry);

      if (student) {
        exist = false;
      } else {
        console.log(`입력한 학번 ${student_id}에 해당하는 데이터가 없습니다. 다시 입력해주세요`);
      }
    await wait(1000);
  }

  //학번이 있으면 작업 진행
  if (!exist) {
    console.log(`선택한 학번: ${student_id}`);
    console.log("수정할 항목을 입력하세요");
    console.log("학년/이름/성별/주소/상황/연락처/단과대학");

    let menu = await Input.getUserInput();
    let updatemongo;

    switch (menu) {
      //학년 수정
      case "학년":
        console.log("학년 입력>");
        let student_grade = await Input.getUserInput();
        updatemongo = { $set: { student_grade: student_grade } };
        await collection.updateOne({ student_id: Number(student_id) }, updatemongo);
        console.log(`${student_grade}학년으로 수정되었습니다`);
        break;

      //이름 수정
      case "이름":
        console.log("이름 입력>");
        let student_name = await Input.getUserInput();
        updatemongo = { $set: { student_name: student_name } };
        await collection.updateOne({ student_id: Number(student_id) }, updatemongo);
        console.log(`${student_name}(으)로 수정되었습니다`);
        break;

      //성별 수정
      case "성별":
        console.log("성별 입력>");
        let student_sex = await Input.getUserInput();
        updatemongo = { $set: { student_sex: student_sex } };
        await collection.updateOne({ student_id: Number(student_id) }, updatemongo);
        console.log(`성별이 ${student_sex}으로 수정되었습니다`);
        break;

      //주소 수정
      case "주소":
        console.log("주소 입력>");
        let student_address = await Input.getUserInput();
        updatemongo = { $set: { student_address: student_address } };
        await collection.updateOne({ student_id: Number(student_id) }, updatemongo);
        console.log(`주소가 ${student_address}으로 수정되었습니다`);
        break;

      //상황 수정
      case "상황":
        console.log("상황 입력>");
        let student_status = await Input.getUserInput();
        updatemongo = { $set: { student_status: student_status } };
        await collection.updateOne({ student_id: Number(student_id) }, updatemongo);
        console.log(`상태가 ${student_status}으로 수정되었습니다`);
        break;


      //연락처 수정
      case "연락처":
        console.log("연락처 입력>");
        let student_number = await Input.getUserInput();
        updatemongo = { $set: { student_number: student_number } };
        await collection.updateOne({ student_id: Number(student_id) }, updatemongo);
        console.log(`연락처가 ${student_number}로 수정되었습니다`);
        break;

      //단과대학 수정
      case "단과대학":
        const majors = await getMajorList(client);
        console.log("단과대학 목록:");
        majors.forEach((major, index) => {
        console.log(`${index+1}.${major.college}-${major.major_name}`);
        });
        console.log("단과대학 입력>");
        // let student_college = await Input.getUserInput();
        let selectedMajorIndex = await Input.getUserInput();
        let selectedMajor = majors[selectedMajorIndex - 1];
        let student_college = selectedMajor.college;
        updatemongo = { $set: { student_college: student_college } };
        await collection.updateOne({ student_id: Number(student_id) }, updatemongo);
        console.log(`단과대학이 ${student_college}로 수정되었습니다`);
        break;

      default:
        console.log("올바르지 않은 항목을 입력하셨습니다.");
    }
  }

  await wait(1000);
} //main1 end

// 데이터베이스에서 전공 목록을 가져오는 함수
async function getMajorList(client) {
  const majorCollection = client.db('number1').collection('major');
  const majors = await majorCollection.find().toArray();
  return majors;
}

function wait(timeToDelay){
  return new Promise((resolve) => setTimeout(resolve, timeToDelay))
}

// module.exports = main;

main();
