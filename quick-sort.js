const swap = function (array, front, back) {
	const tmp = array[front];
	array[front] = array[back];
	array[back] = tmp;
}

const hoarePartition = function (array, start, end) {
	const pivotValue = array[ Math.floor((start + end) / 2) ]; // 물리적으로 중간을 pivotValue로 정한다.

	while (start <= end) { // 교차 지점이 오기 전까지
		while (array[start] < pivotValue) start = start + 1; // array의 왼쪽에서 pivotValue보다 크거나 같은 값을  찾는다.
		while (array[end] > pivotValue) end = end - 1; // array의 오른쪽에서 pivotValue보다 작거나 같은  값을 찾는다.

		if (start <= end) { // 교차 되기 전이라면
			swap(array, start, end); // pivotValue 보다 크거나 같은값과, 작거나 같은값을 swap 한다.
			start = start + 1; // 그 다음 search를 위해서 start 1증가
			end = end - 1; // end 1감소
		}
	}

	return start; // 교차되고 난후 start를 그 다음 border index로 리턴한다. 
}


const quickSortWithHoare = function (array, start = 0, end = array.length - 1) { // 초기값: 배열의 시작과 끝
	if (start >= end) return; // ending condition 

	let borderIndex = hoarePartition(array, start, end);
	quickSortWithHoare(array, start, borderIndex - 1); // border의 왼쪽
	quickSortWithHoare(array, borderIndex, end); // border의 오른쪽

	return array;
}

const result2 = quickSortWithHoare(arr);
console.log(result2)