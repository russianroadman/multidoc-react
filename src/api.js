import $ from 'jquery'

export const post = (url, body) => {
	const settings = {
		"url": url,
		"method": "POST",
		"headers": {"Content-Type": "application/json"},
		"data": JSON.stringify(body),
	};
	//$.ajax(settings).done(response => callback(response));
	return $.ajax(settings)
};

export const get = (url, callback) => {
	const settings = {"url": url, "method": "GET"};
	$.ajax(settings).done(response => callback(response));
};
