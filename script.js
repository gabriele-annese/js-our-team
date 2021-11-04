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
        name: 'Wayne Barnett',
        job: 'Founder & CEO',
        img: 'img/scott-estrada-developer.jpg',
    },
    {
        name: 'Wayne Barnett',
        job: 'Founder & CEO',
        img: 'img/angela-caroll-chief-editor.jpg',
    },
    {
        name: 'Wayne Barnett',
        job: 'Founder & CEO',
        img: 'img/angela-lopez-social-media-manager.jpg',
    },
    {
        name: 'Wayne Barnett',
        job: 'Founder & CEO',
        img: 'img/angela-caroll-chief-editor.jpg',
    },
];
console.log(teamMember)

// creare nodo dove inserire card
const cardContainer = document.querySelector(".team-container");
console.log(cardContainer)
const teams = genCard(teamMember, cardContainer);
cardContainer.append(teams)

// genrare card tramite imput

const inputName = document.querySelector('#name');
const inputJob = document.querySelector('#role');
const inputImg = document.querySelector('#image');
const accesBtn = document.querySelector('#addMemberButton');

accesBtn.addEventListener('click',  function () {
    
});


// funzione genera card
function genCard(teamMember, cardContainer){
    cardContainer.innerHTML = "";
    for(let i = 0; i < teamMember.length; i++){
        const member = teamMember[i];
        console.log(member);
    
        //creare aggiungere il markup
        cardContainer.innerHTML += `
        <div class="team-card">
            <div class="card-image">
                <img src= "${member.img}" ></img>
            </div>
            <div class="card-text">
                ${member.name}
                ${member.job}
            </div>
        </div>
        `
    }
}