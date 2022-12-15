


const URL_API = "https://my-json-server.typicode.com/zocom-christoffer-wallenberg/doggy-daycare-api/dogs"
const showUserBtn = document.querySelector('#showUserBtn');
const showDogBtn = document.querySelector('#showDogBtn')
const listOfUsers = document.querySelector('#showUserList')
const listOfDogs = document.querySelector('#showDogsList')
const el = document.querySelector('.container');
const hiddenDogsList = document.querySelector('.hidden')





function getDogsAPI (){
   fetch(URL_API)
    .then(res => res.json())
    .then(data => {
        hiddenDogsList!.innerHTML='';
        for (let i = 0; i < data.length; i++) {
           //console.log(data[i]);
           // alla registrerade kunder
           //console.log(data[i].owner);
           const ownerData = document.createElement("ownerData")
           const dogsData = document.createElement("dogsData")

    showUserBtn?.addEventListener("click", event => {
        console.log('här ska det komma info');
        let li = document.createElement("li")
        listOfUsers?.appendChild(li)
        li.appendChild(ownerData)
        ownerData.innerHTML = (`Hund: ${data[i].name} <br> Ägare: ${data[i].owner.name} ${data[i].owner.lastName}. <br> Telefonnummer: ${data[i].owner.phoneNumber}`)
        
       
    })
    showDogBtn?.addEventListener("click", event => {
        
        let li = document.createElement("li")
        console.log('Här om hundar');

        li.appendChild(dogsData)
        li!.innerHTML = (`${data[i].name.toUpperCase()} <br> Hundras ${data[i].breed} | Hane/hona: ${data[i].sex} | Ålder: ${data[i].age} <br>  Ägare: ${data[i].owner.name} | Chipnummer: ${data[i].chipNumber}  `)
        
        hiddenDogsList?.appendChild(li)        
    } )
    

    }})
    listOfDogs?.classList.toggle("hidden")    
};   




getDogsAPI()

