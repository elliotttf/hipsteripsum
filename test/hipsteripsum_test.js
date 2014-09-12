'use strict';
var hipsteripsum = require('../lib/hipsteripsum.js');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports['hipsteripsum'] = {
  setUp: function(done) {
    // setup here
    done();
  },
  'text': function(test) {
    test.expect(1);
    // tests here
    test.notEqual(hipsteripsum.get(), '', 'some text should be returned');
    test.done();
  },
  'words': function(test) {
    test.expect(1);
    var words = hipsteripsum.getWords(3);
    var a = words.split(' ');
    test.ok((a.length >= 3), 'at least three words should be returned');
    test.done();
  }
};
