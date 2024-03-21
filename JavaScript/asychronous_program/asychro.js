const getRequest = ()=> {
    // XMLHttp Request

// Create the request object off the http reuest class
const request = new XMLHttpRequest();

// request.onreadystatechange   //similar to request.add event listener

// Ready States or process
request.addEventListener("readystatechange", ()=> {
    console.log(request, request.readyState);
// Response text
    if (request.readyState === 4) {
        console.log(request.responseText)
    }
})

request.open("GET", "https://jsonplaceholder.typicode.com/todos/1");
request.send()
}

getRequest();
getRequest();

// Create a beautiful page 