console.log("hello");

var AlphaVantageAPI = require("alpha-vantage-cli").AlphaVantageAPI;

var myApiKey = "RI830Q7FPOXVW3EW";
var alphaVantageAPI = new AlphaVantageAPI(myApiKey, "full", true);

alphaVantageAPI.getIntradayData("600055.SS", "1min")
	.then(intradayData => {
		console.log("Intraday data:");
		console.log(intradayData);
	})
	.catch(err => {
		console.error(err);
	});