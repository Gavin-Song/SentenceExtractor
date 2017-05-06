function isAbbrev(s, abbrev){
	/*Checks if string s is an abbreviation (With periods)*/
	var single_abbrv = abbrev || ["a.m","p.m","etc","vol","inc","jr","dr","tex","co","prof","rev","revd","hon","v.s","ie",
		"eg","et al","st","ph.d","capt","mr","mrs","ms"];
	/*Follows the simple abbreviation patterns*/
	if(single_abbrv.includes(s.toLowerCase()) || single_abbrv.includes(s.toLowerCase().substring(0,s.length-1))){
		return true;
	}
	
	/*Possibly an abbreviation like U.S. or D.C, check if it contains periods with less than 2 letters between each period*/
	if( s.endsWith(".") )
		s = s.substring(0,s.length-1);
	s = s.split(".");
	return s.length > 1 && s.filter(function(x){return x.length <= 2;}).length > 0;
}

function extract(body_text, abbrev, divider){
	var sentences = [];
	var start = 0;
	divider = divider || [".","?","!"];
	
	for(var i=0;i<body_text.length;i++){
		/*Check if it's an end of a sentence*/
		var temp = body_text.slice(start,Math.min(body_text.length-1,i+1)).split(" "); 

		if( 
			divider.includes(body_text[i]) &&    /*Check for end of sentence punctuation*/
			/*Check for spaces/special chars that make sure it's the end of an sentence*/
			( body_text[i+1] == " " || body_text[i+1] == '"' || i >= body_text.length - 1 || body_text[i+1] == "[" ) &&
			/*Check that it's really the end and not an abbreviation*/
			!isAbbrev( temp[temp.length-1], abbrev ) 
		){
			sentences.push( body_text.slice(start,Math.min(body_text.length,i+1)) );
			start = i+1;
		}
	}
	return sentences;
}

module.exports = {
	extract:extract
};
