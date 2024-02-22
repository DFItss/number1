const Input = require("./userInput");



//몽고DB 연결함수 
const {MongoClient} = require('mongodb');

async function connect(){

  const uri = process.env.DB_LOCAL_URL;
  // const uri = process.env.DB_ATLAS_URL;
  // console.log(uri);

   const client = new MongoClient(uri);

   try {
      await client.connect();
      
   } finally {
      await client.close();
   }


};
// //연결함수 끝 
async function main() {
const happy1=true;

    while(happy1){


    console.log("수강신청 관리 시스템에 오신 것을 환영합니다.");
    console.log("어떤 계정으로 접속하시겠습니까?");
    console.log("1. 관리자 2. 이용자 3. 종료");


  
        const user = await Input.getUserInput();
        await wait(500);
        console.clear();



        


        if (user === "1") {


            // 관리자 계정으로 이동
            console.log("로그인이 필요합니다.");
            await wait(500)
            console.log("아이디를 입력합니다.");
            await wait(500);
            const id = await Input.getUserInput();//로그인 기능 함수 인자값
            await wait(500);
            console.log("비밀번호를 입력하세요");
            const password = await Input.getUserInput();//로그인 기능 함수 인자값

            // await loginCheck(password,id);//로그인 확인 함수는 여기에 위치////// 

            // continue; //메인함수 처음으로 돌아가서 실향
            console.clear();
            let happy2 = true;
            while(happy2){


            console.log("관리자 계정에 오신것을 환영합니다.");
            await wait(500);
            console.log("1.학생 2.강의 3.교수 4.뒤로가기");
            const managemenu= await Input.getUserInput();
            // console.clear(); //위의 두 문장이 없어진다. 



      
            if(managemenu=="1"){
                console.clear();
             let test = 1;
while(test=="1"){
                console.log( "학생 관리 *  1.추가하기 2.검색하기 3.확인하기 4.수정하기 5.삭제하기 6.뒤로가기`");

                const studentmenu=await Input.getUserInput();


                
                if( studentmenu =="1"){
                    //추가하기 함수 호출 위치 
                    await wait(500)
                    console.log("학생 관리 함수1")
                    // return false;
                    continue; //목록을 수행하는 함수가 끝나면 뒤로가기 버튼 없이 자동적으로 그 전 단계로 돌아감 
              
              
                }
                else if(studentmenu=="2"){
                    //학생 검색하기 함수 호출 위치 
                    await wait(500)
                    console.log("학생관리 함수2")
                    continue; 
                }
                else if(studentmenu=="3"){
                    console.log("학생 관리 함수3")
                    await wait(500)
                    //학생 확인하기 함수 호출 위치 
                    continue; 
                }
                else if(studentmenu=="4"){
                    console.log("학생 관리 함수4")
                    await wait(500)
                    //학생 수정하기 함수 호출 위치 
                    continue; 
                } 
                else if(studentmenu=="5"){
                    //학생 삭제하기 함수 호출 위치 
                    await wait(500)
                    console.log("학생 관리 함수5")
                    continue; 
                }
                else(studentmenu=="6")
                  
                    console.log("학생 관리 함수6")
                    //학생 뒤로가기 함수 호출 위치 
                    break;
                  
                
                
           }
            
                                  }


           else if(managemenu=="2"){
                console.clear();
                console.log( "강의 관리 *  1.추가하기 2.검색하기 3.확인하기 4.수정하기 5.삭제하기 6.뒤로가기`");
              

                const majormenu=await Input.getUserInput();
                if( majormenu =="1"){
                    //강의 추가하기 함수 호출 위치 
                    await wait(500)
                    console.log("강의 관리 함수1")
                    return false;
                    // continue;
                }
                else if(majormenu=="2"){
                    //강의 검색하기 함수 호출 위치 
                    await wait(500)
                    console.log("강의관리 함수2")
                    return false;
                }
                else if(majormenu=="3"){
                    console.log("강의 관리 함수3")
                    await wait(500)
                    //강의 확인하기 함수 호출 위치 
                    return false;
                }
                else if(majormenu=="4"){
                    console.log("강의 관리 함수4")
                    await wait(500)
                    //강의 수정하기 함수 호출 위치 
                    return false;
                } 
                else if(majormenu=="5"){
                    //강의 삭제하기 함수 호출 위치 
                    await wait(500)
                    console.log("강의 관리 함수5")
                    return false;
                }
                else if(majormenu=="6"){
                    console.log("강의 관리 함수6")
                    await wait(500)
                    //강의 뒤로가기 함수 호출 위치 
                    console.clear();
             
                    continue;
                }
            
          
            }
            
            else if(managemenu=="3"){
                console.clear();
                console.log( "교수 관리 *  1.추가하기 2.검색하기 3.확인하기 4.수정하기 5.삭제하기 6.뒤로가기`");
                
                const professmenu=await Input.getUserInput();
                if( professmenu =="1"){
                    //교수 추가하기 함수 호출 위치 
                    await wait(500)
                    console.log("강의 관리 함수1")
                    return false;
                }
                else if(professmenu=="2"){
                    //교수 검색하기 함수 호출 위치 
                    await wait(500)
                    console.log("강의관리 함수2")
                     return false;   }
                else if(professmenu=="3"){
                    await wait(500)
                    console.log("강의 관리 함수3")
                    //교수 확인하기 함수 호출 위치 
                    return false;
                }
                else if(professmenu=="4"){
                    console.log("강의 관리 함수4")
                    await wait(500)
                    //교수 수정하기 함수 호출 위치 
                    return false;
                } 
                else if(professmenu=="5"){
                    //교수 삭제하기 함수 호출 위치
                    await wait(500) 
                    console.log("강의 관리 함수5")
                    return false;
                }
                else if(professmenu=="6"){
                    await wait(500)
                    console.log("강의 관리 함수6")
                    console.clear();
             
                    //교수 뒤로가기 함수 호출 위치 
                   continue;
                }
            
            }else(managemenu=="4")
            await wait(500)
            console.clear();
               break;
        // }//목록 함수 수행이 끝나면 그 이전으로 자동으로 넘기게 하는 while 문 

    }
}


        



        else if (user === "2") {
            // 이용자 계정으로 이동
            console.log(`수강신청을 위한 학번을 입력하십시오`);
            const  studentId = await Input.getUserInput();
            console.clear();
            console.log(`환영합니다! ${studentId}님 `);
            const happy3=true;


            while(happy3){
            console.log(`1.수강신청하기 2.수강취소하기 3.수강내역 확인하기 4.뒤로가기`)
            const majormanage= await Input.getUserInput();
            console.clear(); //위의 두 문장이 없어진다. 

            if(majormanage=="1"){
            console.log( "신청할 과목의 과목번호를 입력하세요");
            let lectureId = await Input.getUserInput();
          
            return false;
        
            }
            else if(majormanage=="2"){
                console.log( "취소할 과목의 과목번호를 입력하세요 ");
                let lectureId = await Input.getUserInput();
              
               return false;
           
            }else if(majormanage=="3"){
                console.log( `${studentId}님의 수강신청내역 입니다.`);
                return false;
            }
            else (majormanage=="4")
             break;
            
            
        }  
          }
        else if (user === "3") {
            console.log("프로그램을 종료합니다.");
            process.exit(0);
        } 
    }
   

}



main();



// }
// async function main(){
//     console.log("값 입력")
// const id= await Input.getUserInput();
// if(id=="1"){
//     console.log("성공")
// }

// }

// main();
const wait = (timeToDelay) => new Promise((resolve) => setTimeout(resolve, timeToDelay))