/////////////////////////////////////////////////////////////////////////////
//Created by: Dan Burke
//Date Created: 8/1/2016
//Version: 1.0
//Description: 
//Google Chrome Extension template for injecting JavaScript 
/////////////////////////////////////////////////////////////////////////////



document.addEventListener('DOMContentLoaded', function ()
{
   var javaScriptCode = "";

///Example code changes background to yellow.  The following two lines can be removed.
   javaScriptCode = "document.body.style.backgroundColor='yellow'"; //javascript code to change background color set to the javaScriptCode variable.
   doIt(javaScriptCode); //calls the function doIt to executes the code stored in the javaScriptCode variable.


///Below, replace "JavaScriptCode goes here" with the string of JavaScript code you want to inject into the page.
   javaScriptCode = "JavaScriptCode goes here";
   doIt(javaScriptCode);
 });



var doIt = function(doThis)
{
   alert('attempting to apply:  ' + doThis); //confirmation alert. this line can be removed.
   chrome.tabs.executeScript(null, {code:doThis});
};



/////////////////////////////////////////////////////////////////////////////