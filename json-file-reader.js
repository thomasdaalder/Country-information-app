// dit is de lijst met information
var fs = require('fs')

// var callCountries = countries(process.argv[2])

// THIS FUNCTION READS AND PARSES THE FILE AND AS TWO PARAMETERS. FILENAME AND CALLBACK FUNCTION.

//hetzelfde als module.exports = callFunction
var readAndParseJSONFile = function (filename, callback){
	// THIS IS THE THING THAT READS THE FILE.
	fs.readFile(filename, 'utf8', function(err, data){
		if (err) {
			throw err 
		}	
		// THIS PARSES THE FILE INTO DATA.
		var informatie = JSON.parse(data);
		callback(informatie)
	})
	
}
module.exports = readAndParseJSONFile
