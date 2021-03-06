function solution(relation) {
  let answer = 0;
  let attribute = Array.from({ length: relation[0].length }, (_, idx) => idx);
  
  // 모든 조합
  let attributeCombi = powerSet(attribute);
  
  while(attributeCombi.length !== 0) {
      let curIdx = attributeCombi[0];
      
      let checkRelation = relation.map((v) => v.filter((_, idx) => curIdx.includes(idx)));
      
      // 후보키 체크
      if (checkCandi(checkRelation)) {
          answer += 1;
          attributeCombi = attributeCombi.filter((idxArr) => {
              for (let idx of curIdx) {
                  if (!idxArr.includes(idx)) return true;
              }
              return false;
          });
      } else {
          // curIdx 제거
          attributeCombi.shift();
      }
  }
  
  return answer;
}

// 후보키 판별 함수
function checkCandi(arr) {
  const setArr = new Set();
  
  for (let el of arr) {
      if (setArr.has(el.join(''))) return false;
      else setArr.add(el.join(''));
  }
  
  return true;
}

// 부분집합 함수
function powerSet(arr) {
  let check = new Array(arr.length).fill(0);
  let powerSetArr = [];
  
  const dfs = (depth) => {
      if (depth === check.length) {
          powerSetArr.push(arr.filter((_, idx) => check[idx]));
      } else {
          check[depth] = 1;
          dfs(depth + 1);
          check[depth] = 0;
          dfs(depth + 1);
      }
  };
  dfs(0);
  
  powerSetArr.sort((a, b) => a.length - b.length);
  powerSetArr = powerSetArr.filter((v) => v.length);
  
  return powerSetArr;
}

/*
유일성과 최소성을 따져야 한다.

1. Attribute의 모든 부분 집합을 구한다.
2. 부분집합의 길이가 작은 순으로 후보키를 검사한다. (최소성)
3. 부분집합에서 후보키가 가능하지 않을 경우, 집합에서 제거
4. 후보키 판별 함수에서 중복 체크 (유일성)

필요한 함수
1. 부분집합 함수
2. 후보키 판별 함수
*/