# WMIframeInserter.js [![Build Status](https://api.travis-ci.org/legokichi/WMIframeInserter.js.png)](http://travis-ci.org/legokichi/WMIframeInserter.js)

[![npm](https://nodei.co/npm/legokichi.wmiframeinserter.js.png?downloads=true&stars=true)](https://nodei.co/npm/legokichi.wmiframeinserter.js/)

iframe content inserter.

## Document

- [WMIframeInserter.js wiki](https://github.com/legokichi/WMIframeInserter.js/wiki/WMIframeInserter)
- [Development](https://github.com/uupaa/WebModule/wiki/Development)
- [WebModule](https://github.com/uupaa/WebModule) ([Slide](http://uupaa.github.io/Slide/slide/WebModule/index.html))


## How to use

### Browser

```js
<script src="lib/WMIframeInserter.js"></script>
<script>
var iframe = document.getElementById("iframe");
new WMIframeInserter(iframe).write(code);
</script>
```
