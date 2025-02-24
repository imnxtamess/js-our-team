const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "./assets/img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "./assets/img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "./assets/img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "./assets/img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "./assets/img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "./assets/img/female3.png"
  }
];

// SELECT THE DOM ELEMENTS

const cardsEl = document.getElementById("cards")

// Functions

function renderTeamMembers(teamMembers, cardsEl) {
  for (let i = 0; i < teamMembers.length; i++) {
    thisObject = teamMembers[i]
    cardsEl.innerHTML += addInputToMarkup(thisObject)
  }
}

function addInputToMarkup(memberObj) {

  const { name, role, email, img } = memberObj

  const markup = `
        <div class="col">
          <div class="card mb-3">
            <div class="row g-0">
              <div class="col-md-4">
                <img src="${img}" class="h-100" alt="..." />
              </div>
              <div class="col-md-8">
                <div class="card-body text-white bg-black h-100">
                  <h3 class="card-title">${name}</h3>
                  <p class="card-text">${role}</p>
                  <p class="card-text email">${email}</p>
                </div>
              </div>
            </div>
          </div>
        </div>`
  return markup
}


// call the functions

renderTeamMembers(teamMembers, cardsEl)