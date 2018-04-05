function fetchHelloDataFromAPI() {
    fetch('http://localhost:3000/test/helloclient', {
        method: 'GET',
        headers: new Headers({
            'Content-Type' : 'application/json'
        })
    })

    .then(function(response) {
        console.log("Fetch response:", response)
        return response.text();
    })
    
    .then(function(text) {
        console.log(text);
    });
}

// 3 Post shorthand: /one
function postToOneArrow() {
    var url = 'http://localhost:3000/test/one';

    fetch(url, {
        method: 'POST',
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    }).then(res => res.text())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response))
}

// 4 Post: post data
function postData() {
    let content = {testdata: {item: 'This was saved!'}};

    let testDataAfterFetch = document.getElementById('test-data');
    let createdAtAfterFetch = document.getElementById('created-at');

    fetch('http://localhost:3000/test/seven', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(content)
    })
    .then(response => response.json())
    .then(function (text) {
        console.log(text);

        testDataAfterFetch.innerHTML = text.testdata.testdata;
        createdAtAfterFetch.innerHTML = text.testdata.createdAt;
    });
}

// 2 Post long hand: /one
function postToOne() {
    var url = 'http://localhost:3000/test/one';

    fetch(url, {
        method: 'POST',
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    }).then(
        function(response) {
            return response.text()
        })
        .catch(
            function(error) {
                console.log("Error:", error)
        })
        .then(
            function(response) {
                console.log('Success:', response);
        })
}