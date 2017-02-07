/**
 * Created by vitaliy on 30.12.16.
 */
import _ from 'lodash';
import 'isomorphic-fetch';

export function makeRequest(url, method, options = {}) {
  const fetchOptions = {
    method: 'POST',
    headers:         {
      'Accept': 'application/json',
      'Content-Type': 'application/json;charset=UTF-8'
    }
  };

  if (options) {
    fetchOptions.body = JSON.stringify({
      methodName: method,
      data: options
    });
  }
  return fetch(url, fetchOptions)
    .then(response => {
      if (response.status >= 200 && response.status < 300) {
        return response.text()
          .then(responseText => {
            // console.log(`Server response: ${responseText}`);
            let jsonData;

            try {
              jsonData = JSON.parse(responseText);
            } catch (e) {
              console.log(e);
            }
            if (jsonData.error === true) {
              let errorText = '';

              if (_.isArray(jsonData.errors)) {
                jsonData.errors.forEach(errText => {
                  errorText = `\n${errText}`;
                });
              } else {
                errorText = JSON.stringify(jsonData.errors);
              }
              throw Error(errorText);
            } else if (jsonData.data !== undefined) {
              jsonData = jsonData.data;
            }
            return jsonData;
          });
      }

      throw Error(response.statusText);
    });
}
