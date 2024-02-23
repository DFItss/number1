let happy1 = true;
let Input = require("./userInput");
let lectureList =require("./lecture_list");
let majorList=require("./major_list");////////////
let Login = require("./login");
// const Login1=require("./login");
let insert=require("./insert");
let select=require("./select");
let Ranking=require("./ranking");



async function index() {

    while (happy1) {
        console.log("수강신청 관리 시스템에 오신 것을 환영합니다.");
        console.log("1. 관리자 2. 이용자 3. 종료");

        const user = await Input.getUserInput();
        await wait(500);
        console.clear();

        if (user === "1") {
            console.log("로그인이 필요합니다.");

            await Login.login();//잘못된 번호를 입력해도 로그인 성공이 뜹니다. 
           
            await wait(500);
           
            console.clear();

            let happy2 = true;
            while (happy2) {
                console.log("관리자 계정에 오신것을 환영합니다.");
                await wait(500);
                console.log("1.학생 2.강의 3.교수 4.뒤로가기");
                const managemenu = await Input.getUserInput();
                if (managemenu === "1") {
                   
                    let test = true;
                    while (test) {
                      
                        console.log("학생 관리 *  1.추가하기 2.검색하기 3.확인하기 4.수정하기 5.삭제하기 6.뒤로가기 7.성적 순위 확인하기 8.종료");

                        const studentmenu = await Input.getUserInput();

                        if (studentmenu === "1") {
                            await wait(500)                   
                            await insert.student_insert();//학생 추가하기 함수 삽입 
                          

                            continue;
                        } else if (studentmenu === "2") {
                            await wait(500)

                        let table="student"//인자 입력
                        await select.find(table);
                            continue;
                        } else if (studentmenu === "3") {
                            
                            await wait(500)
                            let table="student"//인자 입력
                            await select.listall(table);


                            continue;
                        } else if (studentmenu === "4") {
                            console.log("학생 관리 함수4")
                            await wait(500)
                            continue;
                        } else if (studentmenu === "5") {
                            await wait(500)
                            console.log("학생 관리 함수5")
                            continue;
                        } else if (studentmenu === "6") {
                            console.log("학생 관리 함수6")
                            // test = false;
                            break;
                        } else if(studentmenu === "7"){

                            console.log("과목명을 입력하세요: ");
                            const lecture = await Input.getUserInput(); 
                            console.log("학번을 입력하세요: ");
                            const student = await Input.getUserInput();
                                                  
                            await Ranking.ranking(lecture, Number(student));
                            //학번 인자값을 입력하고 값을 받으면 문자열로 받기 때문에 Number를 붙여 숫자로 만들어준다. 


                            // await Ranking.ranking("자료구조",2);


                        } else if(studentmenu === "8"){
                            console.log("종료합니다.");
                            process.exit(0);
                        }
                    }
                } else if (managemenu === "2") {
                    console.clear();
                  let test1=true;
                    while(test1){
                    console.log("강의 관리 *  1.추가하기 2.검색하기 3.확인하기 4.수정하기 5.삭제하기 6.뒤로가기 7.종료");

                    const majormenu = await Input.getUserInput();
                    if (majormenu === "1") {
                        await wait(500)
                      
                      await insert.lecture_insert();//추가하기 함수 삽입
                        continue;
                    } else if (majormenu === "2") {
                        await wait(500)
                        let table="lecture"//인자 입력
                        await select.find(table);//검색하기 함수 삽입
                        continue;
                    } else if (majormenu === "3") {
                        let table="lecture"//인자 입력
                        await select.listall(table);//student_collection에 student_lecture_id 속성 추가 입력 필요 
                        await wait(500)
                        continue;
                    } else if (majormenu === "4") {
                        console.log("강의 관리 함수4")
                        await wait(500)
                        continue;
                    } else if (majormenu === "5") {
                        await wait(500)
                        console.log("강의 관리 함수5")
                        continue;
                    } else if (majormenu === "6") {
                        console.log("강의 관리 함수6")
                        console.clear();
                       break;
                    } else if(majormenu==="7"){
                        console.log("종료합니다.");
                        process.exit(0);
                    }
                
                
                
                
                }
                } else if (managemenu === "3") {
                    console.clear();
                    while(true){
                    console.log("교수 관리 *  1.추가하기 2.검색하기 3.확인하기 4.수정하기 5.삭제하기 6.뒤로가기 7.종료");

                    const professmenu = await Input.getUserInput();
                    if (professmenu === "1") {
                        await wait(500)
                        await insert.professor_insert();
                     
                      continue;
                        
                    } else if (professmenu === "2") {
                        await wait(500)
                        let table="professor"//인자 입력
                        await select.find(table);//검색하기 함수 삽입
                     
                        continue;
                    } else if (professmenu === "3") {
                        await wait(500)
                        
                        let table="professor"//인자 입력
                        await select.listall(table);
                       
                        continue;
                    } else if (professmenu === "4") {
                        console.log("강의 관리 함수4")
                        await wait(500)
                        continue;
                    } else if (professmenu === "5") {
                        await wait(500)
                        console.log("강의 관리 함수5")
                        continue;
                    } else if (professmenu === "6") {
                        await wait(500)
                        console.log("강의 관리 함수6")
                        console.clear();
                        break;
                    }else if(professmenu=="7"){
                        console.log("종료합니다.");
                        process.exit(0);
                    }
                }
                
                } else if (managemenu === "4") {
                    await wait(500)
                    console.clear();
                    break;
                }
            }
        } else if (user === "2") {
            // console.log(`수강신청을 위한 학번을 입력하십시오`);
            // const studentId = await Input.getUserInput();
            console.clear();
            // console.log(`환영합니다! ${studentId}님 `);
            let happy3 = true;

            while (happy3) {
                console.log(`1.수강신청하기 2.수강취소하기 3.수강내역 확인하기 4.뒤로가기 5.종료하기`)
                const majormanage = await Input.getUserInput();
                console.clear();

                if (majormanage === "1") {
                    console.log("학번을 입력하세요")
                  

                  await insert.enrol();//수강신청 
                    continue;
                } else if (majormanage === "2") {
                    // console.log("취소할 과목의 과목번호를 입력하세요 ");
                    // let lectureId = await Input.getUserInput();
                    continue;
                } else if (majormanage === "3") {
                    // console.log(`${studentId}님의 수강신청내역 입니다.`);
                    let table="student_lecture"//인자 입력
                    await select.find(table);

                    continue;
                } else if (majormanage === "4") {
                    break;
                }
            }
        } else if (user === "3") {
            console.log("프로그램을 종료합니다.");
            process.exit(0);
        }
    }
}

index();


const wait = (timeToDelay) => new Promise((resolve) => setTimeout(resolve, timeToDelay));
//수강취소하기(합수 삽입) , 수강내역 추가(데이터 넣어지는 지 확인), 
//성적 순위 확인하기 오류 
//수정하기,삭제하기(함수 삽입)
//로그인 오류(작동 이상함) 
// 

//강의 내역 검색 --- student_lecture_id 를 student_lecture collection에 속성 추가해야 돌아감 