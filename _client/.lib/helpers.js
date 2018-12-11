export const guid = lead => {
	return ((lead || "x") + "xxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx").replace(
		/[xy]/g,
		function(c) {
			var r = (Math.random() * 16) | 0,
				v = c == "x" ? r : (r & 0x3) | 0x8;
			return v.toString(16);
		}
	);
};

export const handleFetchError = response =>
	new Promise(resolve => resolve(response.text()))
		.catch(err =>
			// prefer-promise-reject-errors
			Promise.reject({
				type: "NetworkError",
				status: response.status,
				statusText: statusText,
				message: err
			})
		)
		.then(responseBody => {
			// Attempt to parse JSON
			try {
				const parsedJSON = JSON.parse(responseBody);
				if (response.ok) return parsedJSON;
				if (response.status >= 500) {
					// prefer-promise-reject-errors
					return Promise.reject(
						Object.assign({}, parsedJSON.error, {
							type: "ServerError",
							status: response.status,
							statusText: response.statusText
						})
					);
				}
				if (response.status <= 501) {
					// prefer-promise-reject-errors
					return Promise.reject(
						Object.assign({}, parsedJSON.error, {
							type: "ApplicationError",
							status: response.status,
							statusText: response.statusText
						})
					);
				}
			} catch (e) {
				// We should never get these unless response is mangled
				// Or API is not properly implemented
				// prefer-promise-reject-errors
				return Promise.reject(
					Object.assign({}, responseBody, {
						type: "InvalidJSON",
						status: response.status,
						statusText: response.statusText
					})
				);
			}
		});
