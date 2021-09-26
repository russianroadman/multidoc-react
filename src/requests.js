import $ from 'jquery'

const sendPostAjax = (url, json, callback) => {
	const settings = {
		"url": url,
		"method": "POST",
		"headers": {"Content-Type": "application/json"},
		"data": JSON.stringify(json),
	};
	$.ajax(settings).done(function (response) {callback(response)});
};

const sendGetAjax = (url, callback) => {
	const settings = {"url": url, "method": "GET"};
	$.ajax(settings).done(function (response) {callback(response)});
};

export const getTest = () => {
	sendGetAjax('http://localhost:8080/get', console.log)
}