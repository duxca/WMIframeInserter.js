(function(global) {
"use strict";

// --- dependency module -----------------------------------
//{@dev
var Valid = global["Valid"] || require("uupaa.valid.js"); // http://git.io/Valid
//}@dev

// --- local variable --------------------------------------

// --- define ----------------------------------------------
// --- interface -------------------------------------------
function IframeInserter(iframeElement) { // @arg HTMLIFrameElement comment
    //{@dev
    Valid(Valid.type(iframeElement, "HTMLIFrameElement"), IframeInserter, "iframeElement");
    //}@dev
    this.iframe = iframeElement;
}

IframeInserter["repository"] = "https://github.com/legokichi/IframeInserter.js"; // GitHub repository URL. http://git.io/Help

IframeInserter["prototype"]["write"]   = IframeInserter_write;     // IframeInserter#write(  code:String):Void
IframeInserter["prototype"]["blobURL"] = IframeInserter_blobURL;   // IframeInserter#blobURL(code:String):Void
IframeInserter["prototype"]["srcdoc"]  = IframeInserter_srcdoc;    // IframeInserter#srcdoc( code:String):Void
IframeInserter["prototype"]["dataURI"] = IframeInserter_dataURI;   // IframeInserter#dataURI(code:String):Void
//IframeInserter["prototype"]["message"] = IframeInserter_message;   // IframeInserter#message(code:String):Void

// --- implement -------------------------------------------
function IframeInserter_write(code){ // @arg String
                                     // @ret Void
    this.iframe.contentDocument.open();
    this.iframe.contentDocument.write(code);
    this.iframe.contentDocument.close();
}

function IframeInserter_blobURL(code){ // @arg String
                                       // @ret Void
    var url = URL.createObjectURL(new Blob([code], {"type": "text/html"}));
    this.iframe.setAttribute("src", url);
}

function IframeInserter_srcdoc(code){ // @arg String
                                      // @ret Void
    this.iframe.setAttribute("srcdoc", code);
}

function IframeInserter_dataURI(code){ // @arg String
                                       // @ret Void
    var reader = new FileReader();
    var that = this;
    reader.readAsDataURL(new Blob([code], {"type": "text/html"}));
    reader.addEventListener("error", function(err){
        throw new Error(err);
    });
    reader.addEventListener("loadend", function(){
        var base64 = reader.result.replace(";base64,", ";charset=utf-8;base64,");
        that.iframe.setAttribute("src", base64);
    });
}
/*
function IframeInserter_message(code){ // @arg String
                                       // @ret Void
    var that = this;
    this.iframe.setAttribute("src", "iframe.html");
    this.iframe.addEventListener("load", function(){
        that.iframe.contentWindow.postMessage(code, "*");
    });
}
*/

// --- export ----------------------------------------------
if ("process" in global) {
    module["exports"] = IframeInserter;
}
global["IframeInserter" in global ? "IframeInserter_" : "IframeInserter"] = IframeInserter; // switch module. http://git.io/Minify

})((this || 0).self || global); // WebModule idiom. http://git.io/WebModule
