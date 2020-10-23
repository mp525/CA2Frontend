document.getElementById("getByPhone").onclick=getByPhone;
document.getElementById("submitCount").onclick=getCountHobby;

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

//Get number of people by hobby
function getCountHobby() {
    const hobbyName = document.getElementById("count").value;
    const url = "https://mparking.dk/CA2Backend/api/person/countByHobby/"+hobbyName;
    fetch(url)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        document.getElementById("getCount").innerText="Number of people with the hobby "+hobbyName+": "+data.count;
        console.log(data.count);
    });
}