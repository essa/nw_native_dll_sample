
## Installing on Mac

Install node.js [32bit version](http://nodejs.org/dist/v0.10.26/node-v0.10.26-darwin-x86.tar.gz) from [Download page of nodejs.org ](http://nodejs.org/download/)

    $ export NODE_PATH=/usr/local/lib/node_modules

Install ffi and ref

    $ npm install -g ffi
    $ npm install -g ref

compile sample1.dll and test

    $ cd dlls/macosx
    $ NODE_PATH=/usr/local/lib/node_modules make
    node ../test_sample.js
    <Buffer@0x22591c0 05 00 00 00 01 00 00 00 6d 61 63 00 00 00 00 00 00 00 00 00 00 00 00 00>
    { sum: 5, difference: 1, platform: 'mac' }

Install node-webkit and yeoman generator

    $ npm install -g nodewebkit yo generator-node-webkit
    $ yo node-webkit
    $ bower instal jqeury
    $ nodewebkit app

Install jqeury
    $ bower install jquery
    $ vi Gruntfile
    $ grunt copy:bower

Install ffi
    $ npm install -g nw-gyp
    $ npm install ffi ref




