async function ajaxStuff() {
    let axCall1 = await makeRequest("GET", "./candidates1.json");
    let axCall2 = await makeRequest("GET", "./candidates2.json");

    let async = { 
        getAll : function ( urlArray, callback) {
            urlArray.forEach(element => {
                callback(element)
            });
        }
    };

    function consoleLog (){
        return function (resp){
            console.log(resp)
        }
    }

    let printOut = consoleLog();
    async.getAll ([axCall1, axCall2], printOut);
}


function makeRequest(method, url) {
    return new Promise(function (resolve, reject) {
        let xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.onload = function () {
            if (this.status >= 200 && this.status < 300) {
                resolve(xhr.response);
            } else {
                reject({
                    status: this.status,
                    statusText: xhr.statusText
                });
            }
        };
        xhr.onerror = function () {
            reject({
                status: this.status,
                statusText: xhr.statusText
            });
        };
        xhr.send();
    });
}

ajaxStuff();