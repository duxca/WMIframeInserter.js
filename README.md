# IframeInserter.js [![Build Status](https://travis-ci.org/legokichi/IframeInserter.js.png)](http://travis-ci.org/legokichi/IframeInserter.js)

[![npm](https://nodei.co/npm/legokichi.iframeinserter.js.png?downloads=true&stars=true)](https://nodei.co/npm/legokichi.iframeinserter.js/)

iframe src inserter.

## Document

- [IframeInserter.js wiki](https://github.com/legokichi/IframeInserter.js/wiki/IframeInserter)
- [Development](https://github.com/legokichi/WebModule/wiki/Development)
- [WebModule](https://github.com/legokichi/WebModule) ([Slide](http://uupaa.github.io/Slide/slide/WebModule/index.html))


## How to use

### Browser

```js
<script src="lib/IframeInserter.js">
<script>
var iframe = document.getElementById("frame");
new IframeInserter(iframe).write(code);
</script>
```
