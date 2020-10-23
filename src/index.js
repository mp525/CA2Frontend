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
    
    

    const btnZip = document.getElementById("getByZip").addEventListener("click", getByZip);

    function getByZip(e) {
        let zipcode = document.getElementById("zip").value;
        let url = "https://mparking.dk/CA2Backend/api/person/allWithZip/" + zipcode;
        fetch(url)
            .then(function (res) {
                return res.json();
            })
            .then(function (data) {
                console.log(data);
        
                let people = data.map(function (p) {
                    let hobbies = p.hobbies.map((h) => { return h.name });
                    let phones = p.phones.map((ph) => { return ph.number });
                    return "<tr><td>" + p.firstName + "</td><td>" + p.lastName + "</td><td>" + p.email
                        + "</td><td>" + phones.join(", ") + "</td><td>" + hobbies.join(", ") + "</td></tr>";
                });
                people.unshift("<th>First name</th><th>Last Name</th><th>Email</th><th>Phones</th><th>Hobbies</th>");
                document.getElementById("table").innerHTML = people.join("");
            });
        document.getElementById("closeZip").click();

    }

}   