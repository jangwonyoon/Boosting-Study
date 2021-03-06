function solution(m, n, board) {
  let answer = 0;
  board = board.map((v) => v.split(""));

  while (true) {
    let block = [];

    for (let i = 0; i < m - 1; i++) {
      for (let j = 0; j < n - 1; j++) {
        let [a, b] = [board[i][j], board[i][j + 1]];
        let [c, d] = [board[i + 1][j], board[i + 1][j + 1]];

        if (a === 0) continue;
        // 깰 수 있는 블록 체크
        else if (a === b && b === c && c === d) {
          block.push([i, j]);
        }
      }
    }

    // 깰 블록이 없으면 종료
    if (block.length === 0) {
      for (let i = 0; i < board.length; i++) {
        answer += board[i].filter((v) => v === 0).length;
      }
      return answer;
    }

    // 블록 깨기
    block.forEach((location) => {
      let [col, row] = location;

      board[col][row] = 0;
      board[col][row + 1] = 0;
      board[col + 1][row] = 0;
      board[col + 1][row + 1] = 0;
    });

    // 블록 드랍해서 채워넣기
    for (let col = m - 1; col > 0; col--) {
      // if (board[col].every(v => !v)) continue;

      for (let row = 0; row < n; row++) {
        for (let drop = col - 1; drop >= 0 && !board[col][row]; drop--) {
          if (board[drop][row] !== 0) {
            board[col][row] = board[drop][row];
            board[drop][row] = 0;
            break;
          }
        }
      }
    }
  }
}

/*
[
"DD", 
"CC", 
"AA", 
"AA", 
"CC", 
"DD"
]

예제 보드
"TTTANT", 
"RRFACC", 
"RRRFCC", 
"TRRRAA", 
"TTMMMF", 
"TMMTTJ"

=>
"TTTANT", 
"'''FA''", 
"''''F''", 
"T'''AA", 
"TTMMMF", 
"TMMTTJ"

1. 보드를 2차원 배열로 만든다. => [[T, T, T, A, N, T], ...]
2. 먼저 지울 수 있는 블럭부터 지우고 시작한다.
  2.1 지울 수 있으면 지운 표시를 빈 문자열('')로 해준다. 
  2.2 지운 블락은 배열에 저장한다.
  2.3 지운 블락이 없으면 같은 블락이 없다는 뜻이므로 answer를 리턴한다.
3. 블락을 밑으로 떨구는 작업을 한다.
  3.1 맨 밑에서부터 반복문으로 돌면서 비어있는 인덱스를 찾는다.
  3.2 만약 해당 칸에 0이없으면 다음 칸으로 넘어간다.
  3.3 해당 칸[i][j]보다 더 위에서 같은 j 인덱스를 찾는다. [i-n][j]
  3.4 [i][j]를 [k][j]로 바꿔준다..
  

테스트 케이스
5, 6 ["AAAAAA","BBAATB","BBAATB","JJJTAA","JJJTAA"] => 24
7, 2 ["AA", "BB", "AA", "BB", "ZZ", "ZZ", "CC"] => 4
4, 5 ["AAAAA","AUUUA","AUUAA","AAAAA"] => 14
6, 2 ["DD", "CC", "AA", "AA", "CC", "DD"] => 12

*/
