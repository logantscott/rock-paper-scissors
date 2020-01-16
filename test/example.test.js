// IMPORT MODULES under test here:
import { checkResult } from '../src/r-p-s.js';

const test = QUnit.test;

test('test loss', function(assert) {
    function result(input, cpu) {return checkResult(input, cpu);}

    let input = 'rock';
    let cpu = 'paper';
    const expect = -1;
    assert.equal(result(input, cpu), expect);

    input = 'paper';
    cpu = 'scissors';
    assert.equal(result(input, cpu), expect);

    input = 'scissors';
    cpu = 'rock';
    assert.equal(result(input, cpu), expect);
});

test('test win', function(assert) {
    function result(input, cpu) {return checkResult(input, cpu);}

    let input = 'rock';
    let cpu = 'scissors';
    const expect = 1;
    assert.equal(result(input, cpu), expect);

    input = 'paper';
    cpu = 'rock';
    assert.equal(result(input, cpu), expect);
    
    input = 'scissors';
    cpu = 'paper';
    assert.equal(result(input, cpu), expect);
});

test('test match', function(assert) {
    function result(input, cpu) {return checkResult(input, cpu);}

    let input = 'rock';
    let cpu = 'rock';
    const expect = 0;
    assert.equal(result(input, cpu), expect);

    input = 'paper';
    cpu = 'paper';
    assert.equal(result(input, cpu), expect);
    
    input = 'scissors';
    cpu = 'scissors';
    assert.equal(result(input, cpu), expect);
});