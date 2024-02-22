let happy1 = true;
const Input = require("./userInput");

async function main() {
    while (happy1) {
        console.log("수강신청 관리 시스템에 오신 것을 환영합니다.");
        console.log("어떤 계정으로 접속하시겠습니까?");
        console.log("1. 관리자 2. 이용자 3. 종료");

        const user = await Input.getUserInput();
        await wait(500);
        console.clear();

        if (user === "1") {
            console.log("로그인이 필요합니다.");
            await wait(500)
            console.log("아이디를 입력합니다.");
            await wait(500);
            const id = await Input.getUserInput();
            await wait(500);
            console.log("비밀번호를 입력하세요");
            const password = await Input.getUserInput();
            console.clear();

            let happy2 = true;
            while (happy2) {
                console.log("관리자 계정에 오신것을 환영합니다.");
                await wait(500);
                console.log("1.학생 2.강의 3.교수 4.뒤로가기");
                const managemenu = await Input.getUserInput();
                
                if (managemenu === "1") {
                    console.clear();
                    let test = true;
                    while (test) {
                        console.log("학생 관리 *  1.추가하기 2.검색하기 3.확인하기 4.수정하기 5.삭제하기 6.뒤로가기");

                        const studentmenu = await Input.getUserInput();

                        if (studentmenu === "1") {
                            await wait(500)
                            console.log("학생 관리 함수1")
                            continue;
                        } else if (studentmenu === "2") {
                            await wait(500)
                            console.log("학생관리 함수2")
                            continue;
                        } else if (studentmenu === "3") {
                            console.log("학생 관리 함수3")
                            await wait(500)
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
                        }
                    }
                } else if (managemenu === "2") {
                    console.clear();
                  let test=true;
                    while(true){
                    console.log("강의 관리 *  1.추가하기 2.검색하기 3.확인하기 4.수정하기 5.삭제하기 6.뒤로가기`");

                    const majormenu = await Input.getUserInput();
                    if (majormenu === "1") {
                        await wait(500)
                        console.log("강의 관리 함수1")
                        continue;
                    } else if (majormenu === "2") {
                        await wait(500)
                        console.log("강의관리 함수2")
                        continue;
                    } else if (majormenu === "3") {
                        console.log("강의 관리 함수3")
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
                        test = false;
                    }}
                } else if (managemenu === "3") {
                    console.clear();
                    while(true){
                    console.log("교수 관리 *  1.추가하기 2.검색하기 3.확인하기 4.수정하기 5.삭제하기 6.뒤로가기`");

                    const professmenu = await Input.getUserInput();
                    if (professmenu === "1") {
                        await wait(500)
                        console.log("강의 관리 함수1")
                        continue;
                    } else if (professmenu === "2") {
                        await wait(500)
                        console.log("강의관리 함수2")
                        continue;
                    } else if (professmenu === "3") {
                        await wait(500)
                        console.log("강의 관리 함수3")
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
                        continue;
                    }}
                } else if (managemenu === "4") {
                    await wait(500)
                    console.clear();
                    break;
                }
            }
        } else if (user === "2") {
            console.log(`수강신청을 위한 학번을 입력하십시오`);
            const studentId = await Input.getUserInput();
            console.clear();
            console.log(`환영합니다! ${studentId}님 `);
            let happy3 = true;

            while (happy3) {
                console.log(`1.수강신청하기 2.수강취소하기 3.수강내역 확인하기 4.뒤로가기`)
                const majormanage = await Input.getUserInput();
                console.clear();

                if (majormanage === "1") {
                    console.log("신청할 과목의 과목번호를 입력하세요");
                    let lectureId = await Input.getUserInput();
                    continue;
                } else if (majormanage === "2") {
                    console.log("취소할 과목의 과목번호를 입력하세요 ");
                    let lectureId = await Input.getUserInput();
                    continue;
                } else if (majormanage === "3") {
                    console.log(`${studentId}님의 수강신청내역 입니다.`);
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

main();

const wait = (timeToDelay) => new Promise((resolve) => setTimeout(resolve, timeToDelay));
