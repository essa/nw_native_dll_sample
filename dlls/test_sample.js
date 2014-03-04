
var ffi = require('ffi')
var ref = require('ref')

var sampleOutType = {
    size: ref.sizeof.int32 + ref.sizeof.int32 + 16,
    indirection: 1,
    get: function (buffer, offset) {
      return {
        sum: buffer.readInt32LE(offset),
        difference: buffer.readInt32LE(offset + ref.sizeof.int32),
        platform: buffer.readCString(offset + ref.sizeof.int32*2)
      }
    },
}

var sample = new ffi.Library('sample1', {
   'api1': [
        'int32', [ 'int32', 'int32', ref.refType(sampleOutType)]
     ]
});

buffer = new Buffer(4 + 4 + 16);
buffer.type = sampleOutType;
ret = sample.api1(3, 2, buffer)

console.log(buffer)
console.log(buffer.deref())
