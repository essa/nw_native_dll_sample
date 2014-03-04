/**
 * Created by jweber on 01.10.13.
 */

var ref = require('ref')
var ffi = require('ffi');


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

var sample = new ffi.Library('../dlls/sample1', {
   'api1': [
        'int32', [ 'int32', 'int32', ref.refType(sampleOutType)]
     ]
});


$(function() {
    $("#call-dll").click(function() {
        buffer = new Buffer(4 + 4 + 16);
        buffer.type = sampleOutType;
        ret = sample.api1($("#val-a").val(), $("#val-b").val(), buffer)

        console.log(buffer);
        var ans = buffer.deref();
        console.log(ans)

        $("#sum").text(ans.sum);
        $("#difference").text(ans.difference);
        $("#platform").text(ans.platform);

    });
})
