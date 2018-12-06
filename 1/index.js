const data = require('fs').readFileSync(`./1/input.txt`, 'utf8').split('\n').map(Number);

console.time('part1');
let answer = data.reduce((acc, cur) => acc + cur, 0);
console.timeEnd('part1');

console.log(answer);

console.time('part2');
const already = new Set([0]);
let current = 0;
let i = 1;

function* endlessData() {
	yield* data;
	yield* endlessData();
}

for (const datum of endlessData()) {
	already.add(current += datum);
	if (++i !== already.size) {
		answer = current;
		break;
	}
}
console.timeEnd('part2');

console.log(answer);
