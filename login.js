const { MongoClient } = require('mongodb');
const readline = require('readline');
const Input = require('./userInput')


async function login() {
    const uri = process.env.DB_LOCAL_URL;
    const client = new MongoClient(uri);
    const dbname = 'number1';
    await client.connect();

    try {
        let loggedIn = false;

    while (!loggedIn) {

        process.stdout.write('id : ')
        const username = await Input.getUserInput('사용자(학번): ');
        process.stdout.write('password : ')
        const password = await Input.getUserInput('비밀번호: ');
        const studentNumber = username;

        const user = await client.db(dbname).collection('manager').find({id:studentNumber, password:password });
        
        if (user) {
            loggedIn = true;
            console.log('로그인 성공');
        } else {
            console.log('로그인 실패! 다시 입력해주세요');
        }
    }
    } catch (error) {
        console.error(error);
    } finally {
        await client.close();
    }
}

module.exports = {login};