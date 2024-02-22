const { MongoClient } = require('mongodb');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function getUserInput(prompt) {
    return new Promise((resolve, reject) => {
        rl.question(prompt, (answer) => {
            rl.pause(); 
            resolve(answer);
        });
    });
}

async function login(client, dbname) {
    let loggedIn = false;

    while (!loggedIn) {
        const username = await getUserInput('사용자(학번): ');
        const password = await getUserInput('비밀번호: ');

        const studentNumber = parseInt(username);

        const user = await client.db(dbname).collection('login').findOne({학번:studentNumber, 비밀번호:password });

        if (user) {
            loggedIn = true;
            console.log('로그인 성공');
        } else {
            console.log('로그인 실패! 다시 입력해주세요');
        }
    }
    rl.close();
}

async function main() {
    const uri = process.env.DB_LOCAL_URL;
    const client = new MongoClient(uri);
    const dbname = 'test';

    try {
        await client.connect();
        await login(client, dbname);
    } catch (error) {
        console.error(error);
    } finally {
        await client.close();
    }
}

module.exports = { getUserInput, login, main };

(async () => {
    try {
        await main();
    } catch (error) {
        console.error(error);
    }
})();
