const Input = require("./userInput");
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

async function main1(client) {
  let exist = true;
  let professor_id;

  let collection = client.db('number1').collection('professor');

  //while문으로 반복실행
  while (exist) {
    //교수번호입력
    console.log(`수정할 교수의 등록번호를 입력하세요`);
    professor_id = await Input.getUserInput();

    let qry = {"professor_id":Number(`${professor_id}`)}
    let professor = await client.db('number1').collection('professor').findOne(qry);

    if (professor) {
      exist = false;
    } else {
      console.log(`입력한 교번 ${professor_id}에 해당하는 데이터가 없습니다. 다시 입력해주세요`);
    }
  await wait(1000);
  }
  //교수번호가 있으면 작업 진행
  if (!exist) {
    console.log(`선택한 교수번호: ${professor_id}`);
    console.log("수정할 항목을 입력하세요");
    console.log("이름/연락처/학과");

    let menu = await Input.getUserInput();
    let updatemongo;

    switch (menu) {
      //이름 수정
      case "이름":
        console.log("이름 입력>");
        let professor_name = await Input.getUserInput();
        updatemongo = { $set: { professor_name: professor_name } };
        await collection.updateOne({ professor_id: Number(professor_id) }, updatemongo);
        console.log(`${professor_name}으로 수정되었습니다`);
        break;

      //연락처 수정
      case "연락처":
        console.log("연락처 입력>");
        let professor_tel = await Input.getUserInput();
        updatemongo = { $set: { professor_tel: professor_tel } };
        await collection.updateOne({ professor_id: Number(professor_id) }, updatemongo);
        console.log(`${professor_tel}으로 수정되었습니다`);
        break;

      //학과 수정
      case "학과":
        const majors = await getMajorList(client);
        console.log("학과 목록:");
        majors.forEach((major, index) => {
          console.log(`${index+1}.${major.college}-${major.major_name}`);
          });
        console.log("학과 입력>");
        // let professor_major = await Input.getUserInput();
        let selectedMajorIndex = await Input.getUserInput();
        let selectedMajor = majors[selectedMajorIndex - 1];
        let professor_major = selectedMajor.major_name;
        updatemongo = { $set: { professor_major: professor_major } };
        await collection.updateOne({ professor_id: Number(professor_id) }, updatemongo);
        console.log(`학과가 ${professor_major}로 수정되었습니다`);
        break;
      
      default:
        console.log("올바르지 않은 항목을 입력하셨습니다.");
    }
  }

  await wait(1000);
} //main end

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
