chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse){
    	mute(request.res);
    	function mute(results) {
		    if(results[0]["need_to_mute"]){
		    	var tab_id;
		    	chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
					tab_id = tabs[0].id;
				});
				chrome.tabs.update(tab_id, {muted: true});
		    }else{
		    	var tab_id;
		    	chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
					tab_id = tabs[0].id;
				});
				chrome.tabs.update(tab_id, {muted: false});
		    }

		};
    }
);