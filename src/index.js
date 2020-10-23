document.getElementById("getByPhone").onclick=getByPhone;

//Get a Person using a phone number
function getByPhone() {
    let phone = document.getElementById("phone").value;
    let url="https://mparking.dk/CA2Backend/api/person/phone/"+phone;
    const str="";
    fetch(url)
    
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            
            document.getElementById("table").innerHTML="<tr><th>"+data.firstName+"</th><th>"+data.lastName+"</th><th>"+data.email+"</th><th>"+data.street+"</th><th>"+data.zip+"</th><th>"+data.houseNr+"</th></tr>";
            let str="";
            var mapHobbies=data.hobbies.map(x=>{
                return "<tr><th>"+x.name+"</th><th>"+x.type+"</th></tr>"
            });
            document.getElementById("table2").innerHTML=mapHobbies;
            console.log(data);
        });
        
}
//Method to use endpoint to retrieve all people who participate in a given hobby
function getAllByHobby() {
    let Hobby = document.getElementById("Hobby").value;
    let url="https://mparking.dk/CA2Backend/api/person/byhobby/"+Hobby;
    fetch(url)
    
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data.name);
        });
}
document.getElementById("getAllZips").onclick = getAllZips;
function getAllZips() {

    
    console.log("We have connection");


    let url = "https://mparking.dk/CA2Backend/api/person/allZips";
    
    fetch(url)
    
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            let mapped = data.map(x => {
                return ("" + x + "<br>")
            })
           document.getElementById("table").innerHTML = mapped.join("");
        });
    
    
}