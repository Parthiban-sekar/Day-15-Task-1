let count = 1;
function validate(){
  let table = document.getElementById('data')
  let row = table.insertRow(count) 
    const fname = document.getElementById("first-name").value
    const lname = document.getElementById("last-name").value
    const address = document.getElementById("address").value
    const city = document.getElementById("city").value
    const state = document.getElementById("state").value
    const pincode = document.getElementById("pincode").value
    const country = document.getElementById("country").value
    const gender = document.getElementById("gender").value
    
    let food = "";
    let foodcount = 0;
    //console.log(document.getElementById("food1"))
    if(document.getElementById("Food1").checked == true){
        food = food + " " + document.getElementById("Food1").value
        foodcount++
    }
    if(document.getElementById("Food2").checked == true){
        food = food + " " + document.getElementById("Food2").value
        foodcount++
    }
    if(document.getElementById("Food3").checked == true){
        food = food + " " + document.getElementById("Food3").value
        foodcount++
    }
    if(document.getElementById("Food4").checked == true){
        food = food + " " + document.getElementById("Food4").value
        foodcount++
    }
    if(document.getElementById("Food5").checked == true){
        food = food + " " + document.getElementById("Food5").value
        foodcount++
    }
    //console.log(food)
    
    if(fname && lname && address&& food && foodcount >=2 && city && pincode && state && country && gender){

    let cell1 = row.insertCell(0)
    cell1.innerHTML = fname
    let cell2 = row.insertCell(1)
    cell2.innerHTML = lname
    let cell3 = row.insertCell(2)
    cell3.innerHTML = address
    let cell4 = row.insertCell(3)
    cell4.innerHTML =  city
    let cell5 = row.insertCell(4)
    cell5.innerHTML = state
    let cell6 = row.insertCell(5)
    cell6.innerHTML = pincode
    let cell7 = row.insertCell(6)
    cell7.innerHTML = country
    let cell8 = row.insertCell(7)
    cell8.innerHTML = gender 
    let cell9 = row.insertCell(8)
    cell9.innerHTML = food
    }
    else if(foodcount< 2){
        alert("Choose Atleat 2 Food items "); return false;
    }
    else{
        alert(" Fill all the details"); return false;
    }
    
   let form = document.getElementById("form")
   form.reset();
}








