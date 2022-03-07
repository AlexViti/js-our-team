const teamContainer = document.querySelector('.team-container');

const members = [
	{
		name: 'Wayne Barnett',
		role: 'Founder & CEO',
	},
	{
		name: 'Angela Caroll',
		role: 'Chief Editor',
	},
	{
		name: 'Walter Gordon',
		role: 'Office Manager',
	},
	{
		name: 'Angela Lopez',
		role: 'Social Media Manager',
	},
	{
		name: 'Scott Estrada',
		role: 'Developer',
	},
	{
		name: 'Barbara Ramos',
		role: 'Graphic Designer'
	}
];

members.forEach(element => {
	imgSrcGenerator(element);
	cardCreator(element);
});


function imgSrcGenerator(member) {
	const name = member.name.toLowerCase().replace(' ', '-');
	let role = member.role.toLowerCase().replace(/ & /g, '-');
	role = role.replace(/\s/g, `-`);
	member.img = `img/${name}-${role}.jpg`;
}

function cardCreator(member) {
	const teamCard = document.createElement('div');
	teamContainer.append(teamCard);
	teamCard.outerHTML = `
	<div class="team-card">
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
 	</div>
	`;
}