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
            let strhelp="<tr><th>First Name</th><th>Last Name</th><th>Email</th><th>Street</th><th>Zip</th><th>HouseNr</th></tr>"
            document.getElementById("table").innerHTML=strhelp+"<tr><th>"+data.firstName+"</th><th>"+data.lastName+"</th><th>"+data.email+"</th><th>"+data.street+"</th><th>"+data.zip+"</th><th>"+data.houseNr+"</th></tr>";
            
            var mapHobbies=data.hobbies.map(x=>{
                return "<tr><th>"+x.name+"</th><th>"+x.wikiLink+"</th><th>"+x.type+"</th></tr>"
            });
            document.getElementById("table2").innerHTML="<h2>Hobbies</h2>"+mapHobbies;
            console.log(data);
        });
        
}
//Method to use endpoint to retrieve all people who participate in a given hobby
document.getElementById("allByHobby").onclick=getAllByHobby;
function getAllByHobby() {
    let Hobby = document.getElementById("hobby").value;
    let url="https://mparking.dk/CA2Backend/api/person/byhobby/"+Hobby;
    let strhelp="<tr><th>First Name</th><th>Last Name</th><th>Email</th><th>Street</th><th>Zip</th><th>HouseNr</th></tr>"
    fetch(url)
    
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            let allPeople= data.map(x=>{

               return "<tr><th>"+x.firstName+"</th><th>"+x.lastName+"</th><th>"+x.email+"</th><th>"+x.street+"</th><th>"+x.zip+"</th><th>"+x.houseNr+"</th></tr>";
        })
            document.getElementById("table").innerHTML=strhelp+allPeople;

            console.log(data.name);
        });
}