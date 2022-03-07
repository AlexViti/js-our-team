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

function imgSrcGenerator(members) {
	for (let i = 0; i < members.length; i++) {
		const name = members[i].name.toLowerCase().replace(' ', '-');
		let role = members[i].role.toLowerCase().replace(/ & /g, '-');
		role = role.replace(/\s/g, `-`);
		members[i].img = `img/${name}-${role}.jpg`;
	}
}

imgSrcGenerator(members);

const teamContainer = document.querySelector('.team-container');

for (let i = 0; i < members.length; i++) {
	const teamCard = document.createElement('div');
	teamContainer.append(teamCard);
	teamCard.outerHTML = `
	<div class="team-card">
		<div class="card-image">
		<img
			src="${members[i].img}"
			alt="${members[i].name}"
		/>
		</div>
		<div class="card-text">
		<h3>${members[i].name}</h3>
		<p>${members[i].role}</p>
		</div>
 	</div>
	`;
}