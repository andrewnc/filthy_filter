var number_of_errors = 0;
var stop_running = false;

function toggle_transcript(){
	if(!stop_running){
		var more = document.getElementById("action-panel-overflow-button");
		more.click();
		var list = document.getElementById('action-panel-overflow-menu');
		console.log(list);
		var child = list.getElementsByTagName('li')[1];
		if(child === undefined || child === null){
			number_of_errors += 1;
		}
		if(number_of_errors == 8){
			stop_running = true;
		}
		var transcript = child.getElementsByTagName('button')[0];
		console.log(transcript);
		transcript.click();
	}
	
}

function get_current_words_data(){

	var current_line = document.getElementsByClassName("caption-line-highlight")[0];
	if(current_line == null){
		current_line = document.getElementsByClassName("caption-line")[0];
	}

	// var next_line = current_line.nextSibling;

// add logic, if current time is less than 2 seconds, then get the next line - otherwise, just get the current line. 

	var current_time = current_line.getElementsByClassName("caption-line-time")[0];

	var current_words = current_line.getElementsByClassName("caption-line-text")[0].innerHTML;


	// var next_time = next_line.getElementsByClassName("caption-line-time")[0];

	// var next_words = next_line.getElementsByClassName("caption-line-text")[0].innerHTML;


	// var time = [current_time.innerHTML, next_time.innerHTML];
	var time = current_time.innerHTML;

	// current_words += " " + next_words;

	return [time, current_words]
}

function check_sentence(){
	var need_to_mute = false;
	
	toggle_transcript();
	console.log(number_of_errors);

	var data
	data = get_current_words_data();


	toggle_transcript();
	var words = ["4r5e", "5h1t", "5hit", "a55", "anal", "anus", "ar5e", "arrse", "arse", " ass ", "ass-fucker", " asses ", "assfucker", "assfukka", "asshole", "assholes", "asswhole", "a_s_s", "b!tch", "b00bs", "b17ch", "b1tch", "ballbag", "balls", "ballsack", "bastard", "beastial", "beastiality", "bellend", "bestial", "bestiality", "bi+ch", "biatch", "bitch", "bitcher", "bitchers", "bitches", "bitchin", "bitching", "bloody", "blow job", "blowjob", "blowjobs", "boiolas", "bollock", "bollok", "boner", "boob", "boobs", "booobs", "boooobs", "booooobs", "booooooobs", "breasts", "buceta", "bunny fucker", "buttmuch", "buttplug", "c0ck", "c0cksucker", "carpet muncher", "cawk", "chink", "cipa", "cl1t", "clit", "clitoris", "clits", "cnut", "cock", "cock-sucker", "cockface", "cockhead", "cockmunch", "cockmuncher", "cocks", "cocksuck", "cocksucked", "cocksucker", "cocksucking", "cocksucks", "cocksuka", "cocksukka", "cok", "cokmuncher", "coksucka", "coon", "cox", " cum ", "cummer", "cumming", "cums", "cumshot", "cunilingus", "cunillingus", "cunnilingus", "cunt", "cuntlick", "cuntlicker", "cuntlicking", "cunts", "cyalis", "cyberfuc", "cyberfuck", "cyberfucked", "cyberfucker", "cyberfuckers", "cyberfucking", "d1ck", "damn", "dick", "dickhead", "dildo", "dildos", "dirsa", "dlck", "dog-fucker", "doggin", "dogging", "donkeyribber", "doosh", "duche", "dyke", "ejaculate", "ejaculated", "ejaculates", "ejaculating", "ejaculatings", "ejaculation", "ejakulate", "f u c k", "f u c k e r", "f4nny", "fag", "fagging", "faggitt", "faggot", "faggs", "fagot", "fagots", "fags", "fanny", "fannyflaps", "fannyfucker", "fanyy", "fatass", "fcuk", "fcuker", "fcuking", "feck", "fecker", "felching", "fellate", "fellatio", "fingerfuck", "fingerfucked", "fingerfucker", "fingerfuckers", "fingerfucking", "fingerfucks", "fistfuck", "fistfucked", "fistfucker", "fistfuckers", "fistfucking", "fistfuckings", "fistfucks", "flange", "fook", "fooker", "fuck", "fucka", "fucked", "fucker", "fuckers", "fuckhead", "fuckheads", "fuckin", "fucking", "fuckings", "fuckingshitmotherfucker", "fuckme", "fucks", "fuckwhit", "fuckwit", "fudge packer", "fudgepacker", "fuk", "fuker", "fukker", "fukkin", "fuks", "fukwhit", "fukwit", "fux", "fux0r", "f_u_c_k", "gangbang", "gangbanged", "gangbangs", "gaylord", "gaysex", "goatse", "God", "god-dam", "god-damned", "goddamn", "goddamned", "hardcoresex", "hell", "heshe", "hoar", "hoare", "hoer", "homo", "hore", "horniest", "horny", "hotsex", "jack-off", "jackoff", "jap", "jerk-off", "jism", "jiz", "jizm", "jizz", "kawk", "knob", "knobead", "knobed", "knobend", "knobhead", "knobjocky", "knobjokey", "kock", "kondum", "kondums", "kum", "kummer", "kumming", "kums", "kunilingus", "l3i+ch", "l3itch", "labia", "m0f0", "m0fo", "m45terbate", "ma5terb8", "ma5terbate", "masochist", "master-bate", "masterb8", "masterbat*", "masterbat3", "masterbate", "masterbation", "masterbations", "masturbate", "mo-fo", "mof0", "mofo", "mothafuck", "mothafucka", "mothafuckas", "mothafuckaz", "mothafucked", "mothafucker", "mothafuckers", "mothafuckin", "mothafucking", "mothafuckings", "mothafucks", "mother fucker", "motherfuck", "motherfucked", "motherfucker", "motherfuckers", "motherfuckin", "motherfucking", "motherfuckings", "motherfuckka", "motherfucks", "muff", "mutha", "muthafecker", "muthafuckker", "muther", "mutherfucker", "n1gga", "n1gger", "nazi", "nigg3r", "nigg4h", "nigga", "niggah", "niggas", "niggaz", "nigger", "niggers", " nob ", "nob jokey", "nobhead", "nobjocky", "nobjokey", "numbnuts", "nutsack", "orgasim", "orgasims", "orgasm", "orgasms", "p0rn", "pawn", "pecker", "penis", "penisfucker", "phonesex", "phuck", "phuk", "phuked", "phuking", "phukked", "phukking", "phuks", "phuq", "pigfucker", "pimpis", "piss", "pissed", "pisser", "pissers", "pisses", "pissflaps", "pissin", "pissing", "pissoff", "poop", "porn", "porno", "pornography", "pornos", "prick", "pricks", "pron", "pube", "pusse", "pussi", "pussies", "pussy", "pussys", "rectum", "retard", "rimjaw", "rimming", "s hit", "s.o.b.", "sadist", "schlong", "screwing", "scroat", "scrote", "scrotum", "semen", "sex", "sh!+", "sh!t", "sh1t", "shag", "shagger", "shaggin", "shagging", "shemale", "shi+", "shit", "shitdick", "shite", "shited", "shitey", "shitfuck", "shitfull", "shithead", "shiting", "shitings", "shits", "shitted", "shitter", "shitters", "shitting", "shittings", "shitty", "skank", "slut", "sluts", "smegma", "smut", "snatch", "son-of-a-bitch", "s_h_i_t", "t1tt1e5", "t1tties", "teets", "teez", "testical", "testicle", "tit", "titfuck", "tits", "titt", "tittie5", "tittiefucker", "titties", "tittyfuck", "tittywank", "titwank", "tosser", "turd", "tw4t", "twat", "twathead", "twatty", "twunt", "twunter", "v14gra", "v1gra", "vagina", "viagra", "vulva", "w00se", "wang", "wank", "wanker", "wanky", "whoar", "whore", "willies", " willy "];

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
	var response = check_sentence();
	var mute = response[1];
	var time = response[0];
	var capt_leng = caption_length(time[0],time[1]);
	return [{success: true, need_to_mute:mute}, capt_leng];
};

var time_to_wait = 1000;
var stime = setInterval(filter, time_to_wait);

function filter(){
	if(stop_running){
		clearInterval(stime);
	}
	results = go();
	time_to_wait = results[1];
	chrome.runtime.sendMessage({
	  res: results[0]
	});
}




