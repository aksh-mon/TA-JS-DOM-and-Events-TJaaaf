
// console.log(got);

// let allPeople = got.houses.reduce((acc,cv) =>{
//     acc = acc.concat(cv.people);
//     return acc;
// },[]);


// let rootElm = document.querySelector(".mainRoot");

// let navElm = document.querySelector(".navList");
// console.log(navElm.children);

// let navHTML =  got.houses.map((house) =>{
//     return`
//     <li><a class="navIcon" href=${house.wikiLink}>${house.name}</a></li>
//    `
// })

// navElm.innerHTML = navHTML.join("");

// let cardsHTML = allPeople.map((person) =>{
//     return`
//     <li class="card">     
//     <div class="info">
//       <img src=${person.image} alt=${person.name}>
//       <h2>${person.name}</h2>
//     </div>  
//       <p>${person.description}</p>
//       <a href=${person.wikiLink}>learn More!</a>
//     </li>
//     `
// });


// rootElm.innerHTML = cardsHTML.join("");

// console.log(allPeople);

// console.log(got.houses.map((house) =>{
//     return house.name
// }))


let allPeople = got.houses.reduce((acc, cv) =>{
    acc = acc.concat(cv.people);
    return acc;
  },[]);
  
  let rootElm = document.querySelector(".mainRoot");
  
  let navElm = document.querySelector(".navList");
  
  let navHTML =  got.houses.map((house) =>{
    return`
    <li><a class="navIcon" href="#" data-house="${house.name}">${house.name}</a></li>
   `
  })
  
  navElm.innerHTML = navHTML.join("");
  
  let cardsHTML = allPeople.map((person) =>{
    return`
    <li class="card">     
    <div class="info">
      <img src=${person.image} alt=${person.name}>
      <h2>${person.name}</h2>
    </div>  
      <p>${person.description}</p>
      <a href=${person.wikiLink}>learn More!</a>
    </li>
    `
  });
  
  rootElm.innerHTML = cardsHTML.join("");
  
  let inputElm = document.querySelector('input');
  
  inputElm.addEventListener('keyup', function(e) {
    let value = e.target.value.toLowerCase();
    let filteredPeople = allPeople.filter(person => person.name.toLowerCase().includes(value));
    let filteredHTML = filteredPeople.map(person => {
      return `
        <li class="card">
          <div class="info">
            <img src=${person.image} alt=${person.name}>
            <h2>${person.name}</h2>
          </div>  
          <p>${person.description}</p>
          <a href=${person.wikiLink}>learn More!</a>
        </li>
      `;
    });
    rootElm.innerHTML = filteredHTML.join("");
  });
  
  function loadHouse(houseName) {
    let house = got.houses.find((house) => house.name === houseName);
    let housePeople = house.people;
  
    let cardsHTML = housePeople.map((person) => {
      return `
        <li class="card">
          <div class="info">
            <img src=${person.image} alt=${person.name}>
            <h2>${person.name}</h2>
          </div>
          <p>${person.description}</p>
          <a href=${person.wikiLink}>Learn More!</a>
        </li>
      `;
    });
  
    rootElm.innerHTML = cardsHTML.join("");
  }
  
  navElm.addEventListener("click", (event) => {
    if (event.target.tagName === "A") {
      let houseName = event.target.innerText;
      loadHouse(houseName);
    }
  });
  