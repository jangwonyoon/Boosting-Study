function solution(p) {
  if (p === "" || isCorrect(p)) return p;

  let answer = "";
  let u = "";
  let v = "";

  for (let i = 2; i <= p.length; i += 2) {
    // 짝이 맞는지부터 체크
    if (isBalance(p.slice(0, i))) {
      u = p.slice(0, i);
      v = p.slice(i);
      break;
    }
  }

  // u가 올바른 괄호 문자열인 경우
  if (isCorrect(u)) {
    answer += u + solution(v);
  } else {
    // u가 올바르지 않을 경우
    answer += "(" + solution(v) + ")";
    // u 양 끝 제거 후 뒤집기
    u = u.slice(1, -1);
    for (let i = 0; i < u.length; i++) {
      if (u[i] === "(") answer += ")";
      else answer += "(";
    }
  }

  return answer;
}

// 올바른 괄호 문자열 체크
function isCorrect(s) {
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === ")") {
      if (stack.length === 0) {
        return false;
      } else {
        stack.pop();
      }
    } else {
      stack.push(s[i]);
    }
  }
  return stack.length === 0 ? true : false;
}

// 균형잡힌 괄호 문자열 체크
function isBalance(s) {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") count += 1;
    else count -= 1;
  }
  return count === 0 ? true : false;
}

/*
1. (, )개수가 맞는 균형잡힌 괄호 문자열을 구하는 함수가 필요하다.
2. (, ) 짝이 맞는 올바른 괄호 문자열을 구하는 함수가 필요하다.
3. 먼저 p가 빈 문자열인지 올바른 괄호 문자열인지 체크한다.
4. 그렇지 않으면 u, v로 나누고 v를 재귀적으로 수행한다.
  4.1 v를 또 u와 v로 나눈다. (재귀)
  4.2 쪼갤때는 반복문을 통해 0부터 2까지를 u로, 2부터 나머지를 v로 자른다.
  4.3 쪼개기 전에는 균형이 잡혔는지부터 확인한다.
5. u가 올바른 괄호이면 그대로 두고 v를 다시 재귀로 돌린다.
6. U가 올바른 괄호가 아니라면
  6.1 "(" + [재귀(V)] + ")" 를 한다.
  6.2 u는 양 끝을 없애버리고 나머지를 뒤집는다.
*/
