let wrapper = document.getElementById("wrapper");
let form = document.querySelector("form");
let table = document.getElementById("table");
let template = document.getElementById("template").content;
let fragment = document.createDocumentFragment();


const ajax = (options) => {
    let {url, method, success, error, data}  = options;
    const xhr = new XMLHttpRequest();

    xhr.addEventListener("readystatechange", e=>{
        if(xhr.readyState!==4) return;

        if(xhr.status >= 200 && xhr.status < 300) {
            let json = JSON.parse(xhr.responseText);
            success(json);
        }else{
            let message = xhr.statusText || "An error happened";
            error(Error `${xhr.status}: ${message}`);
        }
    });

    xhr.open(method, url);
    xhr.setRequestHeader("Content-type","application/json; charset=utf-8");
    xhr.send(JSON.stringify(data));
}

function getAll (){
    ajax({
        method: "GET",
        url: "http://localhost:1234/candidates",
        success: (res) => {
            console.log(res);
            res.forEach(element => {
                template.querySelector(".firstname").textContent = element.firstname;
                template.querySelector(".lastname").textContent = element.lastname;
                template.querySelector(".phonenumber").textContent = element.phone;
                template.querySelector(".edit").dataset.id = element.id;
                template.querySelector(".edit").dataset.firstname = element.firstname;
                template.querySelector(".edit").dataset.lastname = element.lastname;
                template.querySelector(".edit").dataset.phonenumber = element.phone;
                template.querySelector(".delete").dataset.id = element.id;

                let clone = document.importNode(template,true);
                fragment.appendChild(clone);
            });
            table.querySelector("tbody").appendChild(fragment)
        },
        error: (err) => {console.log(err)},
        data: null
    })
}

document.addEventListener("DOMContentLoaded",getAll);

document.addEventListener("submit",e => {
    if(e.target === form){
        e.preventDefault();

        if(!e.target.id.value){
            //POST
            ajax({
                method: "POST",
                url: "http://localhost:1234/candidates",
                success: (res) => location.reload(),
                error: (err) => {console.log(err)},
                data: {
                    firstname: e.target.firstname.value,
                    lastname: e.target.lastname.value,
                    phone: e.target.phonenumber.value
                }
            })
            form.reset()
        } else {
            //PUT
            ajax({
                method: "PUT",
                url: `http://localhost:1234/candidates/${e.target.id.value}`,
                success: (res) => location.reload(),
                error: (err) => {console.log(err)},
                data: {
                    firstname: e.target.firstname.value,
                    lastname: e.target.lastname.value,
                    phone: e.target.phonenumber.value
                }
            })
            form.reset()
        }
    }
})


document.addEventListener("click", event =>{
    if(event.target.matches(".edit")){
        form.firstname.value = event.target.dataset.firstname;
        form.lastname.value = event.target.dataset.lastname;
        form.phonenumber.value = event.target.dataset.phonenumber;
        form.id.value = event.target.dataset.id;
    }
    if(event.target.matches(".delete")){
        let isDelete = confirm("Do you really want to delete the element?");
        if (isDelete) {
            //DELETE
            ajax({
                method: "DELETE",
                url: `http://localhost:1234/candidates/${event.target.dataset.id}`,
                success: (res) => location.reload(),
                error: (err) => {console.log(err)}
            })
        }
    }
})