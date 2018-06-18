const Benchmark = require('benchmark');
const { mergeSort } = require('../');

const suite = new Benchmark.Suite;

suite.add('mergeSort', function() {
  mergeSort([2, 6, 8, 100, -100, 1, 2, 4, 6]);
})
.add('native sort', function() {
  [2, 6, 8, 100, -100, 1, 2, 4, 6].sort();
})
// add listeners
.on('cycle', function(event) {
  console.log(String(event.target));
})
.on('complete', function() {
  console.log('Fastest is ' + this.filter('fastest').map('name'));
})
// run async
.run({ 'async': true });