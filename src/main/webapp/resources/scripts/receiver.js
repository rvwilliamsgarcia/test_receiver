/**
 * 
 */

 function receiveFunc(data) {
	widget.setBody([{
		tag: "h1",
		text: "Receiver"
	},
	{
		tag: "p",
		text: "My name is " + data
	}]);
	
	console.log("received!");
}

var MyWidget = {
	onLoad: function(){console.log("loading...");},
	receiveEvent: function(){
		require(["DS/PlatformAPI/PlatformAPI"], function(API){
			API.subscribe("display", receiveFunc);
		});
	}
};

widget.addEvent("onLoad", MyWidget.onLoad);
widget.addEvent("onLoad", MyWidget.receiveEvent);
widget.addEvent("onRefresh", MyWidget.receiveEvent);