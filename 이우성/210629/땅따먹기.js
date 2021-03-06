function solution(land) {
  let answer = 0;

  for (let i = 0; i < land.length - 1; i++) {
    // 한 칸에서 가장 큰 수와 그 인덱스를 찾는다.
    const maxNum = Math.max(...land[i]);
    const maxIdx = land[i].indexOf(maxNum);

    // 한 칸에서 두 번째로 큰 값을 찾는다.
    const sub = land[i].splice(maxIdx, 1);
    const secondNum = Math.max(...land[i]);

    for (let j = 0; j < 4; j++) {
      if (j === maxIdx) {
        land[i + 1][j] += secondNum;
      } else {
        land[i + 1][j] += maxNum;
      }
    }
  }

  return Math.max(...land[land.length - 1]);
}

/*
1. 한 칸에서 가장 큰 값을 구하는 변수를 만든다.
2. 한 칸에서 두번째로 큰 값을 구하는 변수를 만든다.
3. 칸을 순회하면서 제일 큰 값이면 다음 칸에는 두번쨰로 큰 값을 더해주고,
 그렇지 않으면 다음 칸에는 제일 큰 값을 더해준다.
4. 한 칸씩 내려갈 때마다 값을 계속 더해주고, 마지막 칸에서 제일 큰 값을 리턴한다.
*/
