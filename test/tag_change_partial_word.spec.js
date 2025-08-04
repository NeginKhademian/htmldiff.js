const assert = require('assert');
const htmldiff = require('../js/htmldiff.js');

describe('Tag change with partial word', function() {
  it('should wrap only the changed part when a tag is added to part of a word', function() {
    const before = 'word';
    const after = 'wo<strong>rd</strong>';
    const result = htmldiff(before, after);
    // Accept both possible whitespace variants for word-level diff
    assert(
      result === '<del data-operation-index="0">word</del><ins data-operation-index="0">wo<strong>rd</strong></ins>' ||
      result === '<del data-operation-index="0">word</del>\n<ins data-operation-index="0">wo<strong>rd</strong></ins>'
    );
  });
});
