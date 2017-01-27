var readAndParseJSONFile = require('./json-file-reader.js')

var countryName = process.argv[2]
readAndParseJSONFile('countries.json', function(informatie){
	// console.log('hallo')

	for (var i = 0; i < informatie.length; i++) {
		if (countryName === informatie[i].name) {
			console.log('Country name: ' + informatie[i].name)
			console.log('Top level domain: '+ informatie[i].topLevelDomain)
		}
	}



})

	