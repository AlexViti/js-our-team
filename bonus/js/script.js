// HTML elements catchers
const teamContainer = document.querySelector('.team-container');
const inputName = document.getElementById('name');
const inputRole = document.getElementById('role');
const inputImg = document.getElementById('image');
const btnAddMember = document.getElementById('addMemberButton');
const body = document.querySelector('body');

let menu;

// Array of default members
const members = [
	{
		name: 'Wayne Barnett',
		role: 'Founder & CEO'
	},
	{
		name: 'Angela Caroll',
		role: 'Chief Editor'
	},
	{
		name: 'Walter Gordon',
		role: 'Office Manager'
	},
	{
		name: 'Angela Lopez',
		role: 'Social Media Manager'
	},
	{
		name: 'Scott Estrada',
		role: 'Developer'
	},
	{
		name: 'Barbara Ramos',
		role: 'Graphic Designer'
	}
];

// Add imgages path to each member and create the HTML cards of default memebers
members.forEach(element => {
	imgSrcGenerator(element);
	cardCreator(element);
});

// Event listener of add member button
btnAddMember.addEventListener('click', ()=> addMember(inputName.value, inputRole.value, inputImg.value));

function addMember(name, role, img) {
	const member = {
		name: name,
		role: role
	}
	if (!img.startsWith('http')) {
		if (img.startsWith('img/')) member.img = img;
		else member.img = 'img/' + img; 
	} else member.img = img;
	cardCreator(member);
	members.push(member);
}

// Function that create a string with the path for the image of the default members
function imgSrcGenerator(member) {
	const name = member.name.toLowerCase().replace(' ', '-');
	let role = member.role.toLowerCase().replace(/ & /g, '-').replace(/\s/g, '-');
	member.img = `img/${name}-${role}.jpg`;
}

// Function that create and append the card of a given member
function cardCreator(member) {
	const teamCard = document.createElement('div');
	teamCard.className = 'team-card'
	teamCard.innerHTML = `
		<div class="card-image">
			<img
				src="${member.img}"
				alt="${member.name}"
			/>
		</div>
		<div class="card-text">
			<h3>${member.name}</h3>
			<p>${member.role}</p>
		</div>
	`;
	teamContainer.append(teamCard);
	teamCard.addEventListener('contextmenu', event => {
		if (body.contains(menu)) body.removeChild(menu);
		event.preventDefault();
		menu = document.createElement('div');
		menu.style = `
			position: absolute;
			top: ${event.pageY}px;
			left: ${event.pageX}px;
			color: red;
			background-color: white;
			padding: .5em;
			cursor: pointer;
		`;
		menu.innerHTML = `Delete <i class="fa-solid fa-trash"></i>`;
		rightClickMenu(teamCard, member, menu);
	});
}

function rightClickMenu(teamCard, member, menu) {
	body.append(menu);
	menu.addEventListener('click', function() {
		members.splice(members.indexOf(member), 1);
		teamContainer.removeChild(teamCard);
	})
	document.addEventListener('click', () => {
		if (body.contains(menu)) body.removeChild(menu);
	});
}