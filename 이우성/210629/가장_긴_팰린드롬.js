function solution(s) {
  for (let i = s.length; i >= 1; i--) {
    for (let j = 0; j <= s.length - i; j++) {
      const isPalindrome = checkPalin(s.slice(j, j + i));
      if (isPalindrome) {
        return i;
      }
    }
  }
  return 1;
}

function checkPalin(str) {
  for (let [i, range] = [0, parseInt(str.length / 2)]; i < range; i++) {
    if (str[i] !== str[str.length - 1 - i]) return false;
  }

  return true;
}

/*
1. 문자열을 돌면서 팰린드롬인지 체크해준다.
2. 문자열 전체를 넣고 팰린드롬이 아니면 끝에서 하나, 앞에서 하나씩 제거해주면서 각각 확인하는 방식으로 한다.
  2.1 abacde 검사 => 아닐 경우, abacd, bacde로 나눈다.
  2.2 다시 검사한다 => 아닐 경우 abac, acde
  2.3 팰린드롬일 경우 문자열 길이를 반환
3. 팰린드롬 검사 함수를 만든다. 
  3.1 문자열의 끝과 끝만 비교하면 됌

expect(solution("abcdcba")).toBe(7);
expect(solution("abacde")).toBe(3);
expect(solution("abcabcdcbae")).toBe(7);
expect(solution("aaaa")).toBe(4);
expect(solution("abcde")).toBe(1);
expect(solution("a")).toBe(1);
expect(solution("abcbaqwertrewqq")).toBe(9);
expect(solution("abcbaqwqabcba")).toBe(13);
expect(solution("abba")).toBe(4);
expect(solution("abaabaaaaaaa")).toBe(7);
*/
