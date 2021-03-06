function solution(s) {
  let answer = [];
  
  s = s.replace('{{', '').replace('}}', '').split('},{');
  s = s.sort((a, b) => a.length - b.length);
  
  for (let i = 0; i < s.length; i++) {
      let sArr = s[i].split(',');
      
      for (let j = 0; j < sArr.length; j++) {
          if (!answer.includes(Number(sArr[j]))) {
              answer.push(Number(sArr[j]));
          }
      }
  }

  return answer;
}

/*
1. 튜플을 2차원 배열 형태로 만든다.
2. length기준으로 정렬한다. [[2], [2,1], [2,1,3], [2,1,3,4]];
3. 배열을 돌면서 없는 요소만 answer에 푸쉬한다.
*/