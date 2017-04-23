

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


	var time = [current_time.innerHTML, next_time.innerHTML];

	current_words += " " + next_words;

	return [time, current_words]
}

function run_once(){
	var need_to_mute = false;
	
	toggle_transcript();

	var data
	data = get_current_words_data();


	toggle_transcript();
	var words = ["bigfoot", "Bigfoot"];

	for(var i = 0; i < words.length; i++){
		if(data[1].includes(words[i])){
			need_to_mute = true;
		}
	}
	


	console.log(data[1]);
	return [data[0], need_to_mute];
}
function caption_length(time1, time2){
	// time1, time2 and strings of 00:00: TODO calc for hours
	var t1 = time1.split(":");
	var t2 = time2.split(":");

	var mili1 = (t1[0]*60 + t1[1])*1000;
	var mili2 = (t2[0]*60 + t2[1])*1000;

	return mili2 - mili1
}

function go(){
	var response = run_once();
	var mute = response[1];
	var time = response[0];
	var capt_leng = caption_length(time[0],time[1]);
	return [{success: true, need_to_mute:mute}, capt_leng];
};

var time_to_wait = 1000;
setInterval(function(){ 
results = go();
time_to_wait = results[1];
chrome.runtime.sendMessage({
  res: results[0]
});
}, time_to_wait);


