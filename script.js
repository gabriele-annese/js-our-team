// - Creiamo il nostro array di oggetti che rappresentano ciascun membro del team. Ogni membro dovrà avere le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.
// - Prendendo come riferimento il layout di esempio presente nell’html, stampiamo tutte le card del nostro team.
// - Utilizziamo poi gli input presenti nella pagina per permettere all’utente di aggiungere nuovi membri del team.


// creazione array di oggetti
const teamMember = [
    {
        name: 'Wayne Barnett',
        job: 'Founder & CEO',
        img: 'img/wayne-barnett-founder-ceo.jpg',
    },
    {
        name: 'Walter Gordon',
        job: 'Office manager',
        img: 'img/walter-gordon-office-manager.jpg',
    },
    {
        name: 'Scott Estrada',
        job: 'Developer',
        img: 'img/scott-estrada-developer.jpg',
    },
    {
        name: 'Angela Caroll',
        job: 'Chief Editor',
        img: 'img/angela-caroll-chief-editor.jpg',
    },
    {
        name: 'Angela Lopez',
        job: 'Social Media Manager',
        img: 'img/angela-lopez-social-media-manager.jpg',
    },
    {
        name: 'Barbara Ramos',
        job: 'Graphic Designer',
        img: 'img/barbara-ramos-graphic-designer.jpg',
    }
];
console.log(teamMember)

// creare nodo dove inserire card
const cardContainer = document.querySelector(".team-container");
console.log(cardContainer);
 genCard(teamMember, cardContainer);


// genrare card tramite input

const inputName = document.querySelector('#name');
const inputJob = document.querySelector('#role');
const inputImg = document.querySelector('#image');
const accesBtn = document.querySelector('#addMemberButton');

accesBtn.addEventListener('click',  function () {
    const Name = inputName.value.trim().toLowerCase();
    console.log(Name);
    const job = inputJob.value.trim().toLowerCase();
    console.log(job);
    const img = inputImg.value.trim().toLowerCase();
    console.log(img);
    // output
    const imgArray = [
        {
            img: 'new-team-member-01.jpg',
            img: 'new-team-member-02.jpg',
            img: 'new-team-member-03.jpg',
            img: 'new-team-member-04.jpg',
        }
    ];
    let imgfound = false;
    for(let i = 0; i < imgArray.length; i++){
        if(imgArray[i] == img){
            imgfound = true;
            break;
        }
    }

    if(imgfound = true){
        cardContainer.innerHTML += `
        <div class="team-card">
            <div class="card-image">
                <img src="img/${img}"></img>
            </div>
            <div class="card-text">
            <h3>${Name}</h3>
            <p>${job}</p>
            </div>
        </div>
        `;
    }
    
});

// funzione genera card
function genCard(teamMember, cardContainer){
    cardContainer.innerHTML = "";
    for(let i = 0; i < teamMember.length ; i++){
        const member = teamMember[i];
        console.log(member);
    
        //creare aggiungere il markup
        cardContainer.innerHTML += `
        <div class="team-card">
            <div class="card-image">
                <img src= "${member.img}"></img>
            </div>
            <div class="card-text">
                <h3>${member.name}</h3>
                <p>${member.job}</p>
            </div>
        </div>`
    }
}