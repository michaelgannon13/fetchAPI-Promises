const url = 'https://ghibliapi.herokuapp.com/people';

const main  = document.getElementById("main");
main.innerHTML = "<p>Loading...</p>";

fetch(url).then(response => {
    return response.json();    
}).then(people =>{
    main.innerHTML = listOfNames(people);
});

function listOfNames(people) { 
    const names = people.map(person => `<li>${person.name}</li>`).join("\n");
    return `<ul>${names}</ul>`
}