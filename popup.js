

function toggle_transcript(){
	var more = document.getElementById("action-panel-overflow-button");
	more.click();
	var list = document.getElementById('action-panel-overflow-menu');
	var child = list.getElementsByTagName('li')[1];
	var transcript = child.getElementsByTagName('button')[0];
	transcript.click();
}

function get_current_words_data(){
	// check next highlight as well
	var current_line = document.getElementsByClassName("caption-line-highlight")[0];
	if(current_line == null){
		current_line = document.getElementsByClassName("caption-line")[0];
	}

	var next_line = current_line.nextSibling;




	var current_time = current_line.getElementsByClassName("caption-line-time")[0];

	var current_words = current_line.getElementsByClassName("caption-line-text")[0].innerHTML;


	var next_time = next_line.getElementsByClassName("caption-line-time")[0];

	var next_words = next_line.getElementsByClassName("caption-line-text")[0].innerHTML;


	current_words += " " + next_words;
	
	return [current_time, current_words]
}

function run_once(){
	var need_to_mute = false;
	
	toggle_transcript();

	var data
	data = get_current_words_data();


	toggle_transcript();
	var words = ["hospital"];

	for(var i = 0; i < words.length; i++){
		if(data[1].includes(words[i])){
			need_to_mute = true;
		}
	}
	


	console.log(data[0].innerHTML + " " + data[1]);
	return need_to_mute;
}

function go(){
	var mute = run_once();
	return [{success: true, need_to_mute:mute}];
};


setInterval(function(){ 
results = go();
chrome.runtime.sendMessage({
  res: results
});
}, 1000);


