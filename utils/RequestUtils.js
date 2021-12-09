export const sendRequest = (url, params) => {
    fetch(url, params)
    .then(
        response => (response.ok ? response.json() : Promise.reject(response.text()))
    )
    .then(
        json => ({ json }),
        error => ({ error })
    )
    .catch(
        error => ({ error })
    );
}