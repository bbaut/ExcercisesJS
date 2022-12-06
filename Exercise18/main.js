// GET METHOD

// const req = new XMLHttpRequest();

// req.open('GET','https://reqres.in/api/users');

// req.addEventListener('load', function(){

//     if(req.status === 200 && req.readyState === 4){
//         const res = JSON.parse(req.responseText)
//         console.log(res.data[0]) 
//     }
//     else {
//         throw new Error ("Bad request")
//     }
    
// })

// req.send()

// POST METHOD 

const newUser = {
    name : "Batman",
    sidekick: "Robin"
}

const req = new XMLHttpRequest();

req.open('POST','https://reqres.in/api/users');

req.setRequestHeader('Content-Type','application/response')

req.send(JSON.stringify(newUser));

var table = document.createElement('table');
for (var i = 1; i < 4; i++){
    var tr = document.createElement('tr');   

    var td1 = document.createElement('td');
    var td2 = document.createElement('td');

    var text1 = document.createTextNode('Text1');
    var text2 = document.createTextNode('Text2');

    td1.appendChild(text1);
    td2.appendChild(text2);
    tr.appendChild(td1);
    tr.appendChild(td2);

    table.appendChild(tr);
}
document.body.appendChild(table);