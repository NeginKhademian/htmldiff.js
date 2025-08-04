const assert = require('assert');
const htmldiff = require('../js/htmldiff.js');

describe('Tag change with same text', function() {
  it('should wrap whole tag in del/ins when tag changes but text is the same', function() {
    const before = '<b>word</b>';
    const after = '<i>word</i>';
    const result = htmldiff(before, after);
    // Accept both possible whitespace variants
    assert(
      result === '<del data-operation-index="0"><b>word</b></del><ins data-operation-index="0"><i>word</i></ins>' ||
      result === '<del data-operation-index="0"><b>word</b></del>\n<ins data-operation-index="0"><i>word</i></ins>'
    );
  });
});
