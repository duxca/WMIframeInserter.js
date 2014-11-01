var ModuleTestIframeInserter = (function(global) {

var _runOnNode = "process" in global;
var _runOnWorker = "WorkerLocation" in global;
var _runOnBrowser = "document" in global;
var IframeInserter = WMIframeInserter;
return new Test("IframeInserter", {
        disable:    false,
        browser:    true,
        worker:     false,
        node:       false,
        button:     true,
        both:       true, // test the primary module and secondary module
    }).add([
        testIframeInserter_write,
        testIframeInserter_blobURL,
        testIframeInserter_srcdoc,
        testIframeInserter_dataURI,
    ]).run().clone();

function testIframeInserter_write(test, pass, miss) {
    var code = (function () {/*
    <script>(function(){
    var result = {name:"write", pass:true};
    (parent.postMessage ? parent : (parent.document.postMessage ? parent.document : undefined)).postMessage(JSON.stringify(result), "*");
    }());</script>
    */}).toString().match(/[^]*\/\*([^]*)\*\/\}$/)[1];
    var iframe = document.createElement("iframe");
    document.body.appendChild(iframe);
    new IframeInserter(iframe).write(code);
    window.addEventListener("message", function(ev){
        var result = JSON.parse(ev.data);
        if (result.name === "write") {
            if (result.pass) {
                test.done(pass(ev.data));
            } else {
                test.done(miss(ev.data));
            }
        }
    });
}

function testIframeInserter_blobURL(test, pass, miss) {
    var code = (function () {/*
    <script>(function(){
    var result = {name:"blobURL", pass:true};
    (parent.postMessage ? parent : (parent.document.postMessage ? parent.document : undefined)).postMessage(JSON.stringify(result), "*");
    }());</script>
    */}).toString().match(/[^]*\/\*([^]*)\*\/\}$/)[1];
    var iframe = document.createElement("iframe");
    document.body.appendChild(iframe);
    new IframeInserter(iframe).blobURL(code);
    window.addEventListener("message", function(ev){
        var result = JSON.parse(ev.data);
        if (result.name === "blobURL") {
            if (result.pass) {
                test.done(pass(ev.data));
            } else {
                test.done(miss(ev.data));
            }
        }
    });
}

function testIframeInserter_srcdoc(test, pass, miss) {
    var code = (function () {/*
    <script>(function(){
    var result = {name:"srcdoc", pass:true};
    (parent.postMessage ? parent : (parent.document.postMessage ? parent.document : undefined)).postMessage(JSON.stringify(result), "*");
    }());</script>
    */}).toString().match(/[^]*\/\*([^]*)\*\/\}$/)[1];
    var iframe = document.createElement("iframe");
    document.body.appendChild(iframe);
    new IframeInserter(iframe).srcdoc(code);
    window.addEventListener("message", function(ev){
        var result = JSON.parse(ev.data);
        if (result.name === "srcdoc") {
            if (result.pass) {
                test.done(pass(ev.data));
            } else {
                test.done(miss(ev.data));
            }
        }
    });
}

function testIframeInserter_dataURI(test, pass, miss) {
    var code = (function () {/*
    <script>(function(){
    var result = {name:"dataURI", pass:true};
    (parent.postMessage ? parent : (parent.document.postMessage ? parent.document : undefined)).postMessage(JSON.stringify(result), "*");
    }());</script>
    */}).toString().match(/[^]*\/\*([^]*)\*\/\}$/)[1];
    var iframe = document.createElement("iframe");
    document.body.appendChild(iframe);
    new IframeInserter(iframe).dataURI(code);
    window.addEventListener("message", function(ev){
        var result = JSON.parse(ev.data);
        if (result.name === "dataURI") {
            if (result.pass) {
                test.done(pass(ev.data));
            } else {
                test.done(miss(ev.data));
            }
        }
    });
}

function testIframeInserter_dataURI(test, pass, miss) {
    var code = (function () {/*
    <script>(function(){
    var result = {name:"dataURI", pass:true};
    (parent.postMessage ? parent : (parent.document.postMessage ? parent.document : undefined)).postMessage(JSON.stringify(result), "*");
    }());</script>
    */}).toString().match(/[^]*\/\*([^]*)\*\/\}$/)[1];
    var iframe = document.createElement("iframe");
    document.body.appendChild(iframe);
    new IframeInserter(iframe).message(code ,"../lib/iframe.html");
    window.addEventListener("message", function(ev){
        var result = JSON.parse(ev.data);
        if (result.name === "dataURI") {
            if (result.pass) {
                test.done(pass(ev.data));
            } else {
                test.done(miss(ev.data));
            }
        }
    });
}

})((this || 0).self || global);
