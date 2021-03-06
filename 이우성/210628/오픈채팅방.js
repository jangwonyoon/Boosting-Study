function solution(record) {
  let answer = [];
  let userData = {};  // { uid1234: Prodo }

  for (let i = 0; i < record.length; i++) {
      if (record[i][0] !== 'L') {
          let user = record[i].split(' ');
          userData[user[1]] = user[2];
      }
  }
  
  for (let i = 0; i < record.length; i++) {
      if (record[i][0] === 'E') {
          answer.push(`${userData[record[i].split(' ')[1]]}님이 들어왔습니다.`);
      } else if (record[i][0] === 'L') {
          answer.push(`${userData[record[i].split(' ')[1]]}님이 나갔습니다.`);
      }
  }

  return answer;
}

/*
1. 들어올 때 마다 유저의 아이디를 저장하고, 메시지를 저장한다. => uid1234님이 들어왔습니다.
2. 마지막까지 다 돌고 최종적으로 바뀐 아이디의 이름만 기억한다. => { uid1234: Prodo };
3. 배열을 돌면서 마지막으로 바뀐 이름으로만 메시지를 보낸다.
*/