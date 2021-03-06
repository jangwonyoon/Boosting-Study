function solution(N, road, K) {
  let answer = 0;

  // 인접 리스트
  const graph = Array.from({ length: N + 1 }, () => []);
  road.forEach((el) => {
    const [start, end, hour] = el;

    graph[start].push([end, hour]);
    graph[end].push([start, hour]);
  });

  // 최단 시간을 저장할 배열
  const hours = Array.from({ length: N + 1 }, () => 500001);
  const pq = [];
  hours[1] = 0;
  pq.push([0, 1]); //hour: 0, start: 1

  while (pq.length !== 0) {
    // 가까운 마을과, 최소 인덱스 찾기
    const min = pq.map((el) => el[0]);
    const minIndex = min.indexOf(Math.min(...min));

    // 최소 거리를 찾았으면 큐에서 뺀다.(이동)
    const hour = pq[minIndex][0];
    const start = pq[minIndex][1];
    pq.splice(minIndex, 1);

    // 연결 도시를 탐색
    for (let i = 0; i < graph[start].length; i++) {
      const currentCity = graph[start];
      // 현재 마을에서 다음 마을까지 갈 때의 총 걸리는 시간
      const totalHour = hour + currentCity[i][1];
      // 그 다음 마을
      const nextCity = currentCity[i][0];

      // 이미 지나온 부분은 넘어간다.
      if (totalHour < hours[nextCity]) {
        hours[nextCity] = totalHour;
        pq.push([totalHour, nextCity]);
      }
    }
  }

  for (let i = 0; i <= N; i++) {
    if (hours[i] <= K) {
      answer += 1;
    }
  }

  return answer;
}

/*
1. 각 도로마다 가중치가 있다. 각 마을을 갈 때마다 가중치가 얼마인지 계산을 한다.
2. 시작, 끝, 걸리는 시간을 이용해서 그래프를 만든다.
3. 각 노드에서 최단 시간을 저장할 배열을 만든다.
*/
