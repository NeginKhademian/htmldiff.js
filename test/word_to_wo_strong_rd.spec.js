const assert = require('assert');
const htmldiff = require('../js/htmldiff.js');

describe('Diff word to wo<strong>rd</strong>', function() {
  it('should treat wo<strong>rd</strong> as a word and diff at word level', function() {
    const before = 'word';
    const after = 'wo<strong>rd</strong>';
    const result = htmldiff(before, after);
    // Accept both possible whitespace variants
    assert(
      result === '<del data-operation-index="0">word</del><ins data-operation-index="0">wo<strong>rd</strong></ins>' ||
      result === '<del data-operation-index="0">word</del>\n<ins data-operation-index="0">wo<strong>rd</strong></ins>'
    );
  });
});
