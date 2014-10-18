function languageConvert(q) {
	
	if (q === "de") {
		return "Hallo Welt";
	} else if (q === "es") {
		return "Hola Mundial";
	} else if (q === "en") {
		return "Hello World";
	} else
    return "you didn't enter 'de', 'es' or 'en'";
}

var x = prompt("what language is this (de, es, en)?");

var hello = languageConvert(x);

alert(hello);