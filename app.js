const items = [
	{
		id: 1,
		title: "UTC Time Date",
		img: "./images/item-1.png",
		link: `https://tolux-hng-stage-one-task.netlify.app/`,
	},
	{
		id: 2,
		title: "Color Picker",
		img: "./images/item-2.png",
		link: `https://tolux-color-picker.netlify.app/hex`,
	},
	{
		id: 3,
		title: "Number Counter",
		img: "./images/item-3.png",
		link: `https://tolux-number-counter.netlify.app/`,
	},
	{
		id: 4,
		title: "Nav Bar",
		img: "./images/item-4.png",
		link: `https://github.com/Tolux001/Nav-Bar.git`,
	},
	{
		id: 5,
		title: "Quote Generator",
		img: "./images/item-5.png",
		link: `https://tolux-quote-genz.netlify.app/`,
	},
	{
		id: 6,
		title: "Review Viewer",
		img: "./images/item-6.png",
		link: `https://tolux-review-viewer.netlify.app/`,
	},
	{
		id: 7,
		title: "Question And Answer",
		img: "./images/item-7.png",
		link: `https://tolux-question-answer.netlify.app/ `,
	},
	{
		id: 8,
		title: "JS Drum Kit",
		img: "./images/item-8.png",
		link: `https://tolux-drum-kit.netlify.app/ `,
	},
	{
		id: 9,
		title: "Digital CLock",
		img: "./images/item-9.png",
		link: `https://tolux-clock.netlify.app/`,
	},
	{
		id: 10,
		title: "Browser Home Tab",
		img: "./images/item-10.png",
		link: `https://tolux-new-tab-page.vercel.app/ `,
	},
	{
		id: 11,
		title: "Menu Project",
		img: "./images/item-11.png",
		link: `https://tolux-menu-project.netlify.app/`,
	},
];

// container for the page content 
let container = document.querySelector(".project--container");

window.addEventListener("DOMContentLoaded", () => {
	let itemsContainer = items.map((item) => {
		return `
			<div class="container">
            	<a href="${item.link}" title="Link to ${item.title}">    
              		<img src="${item.img}" alt="${item.title}">
              		<p>${item.title}</p>
            	</a>
          </div>
		`;

	});
	itemsContainer = itemsContainer.join("");
	container.innerHTML = itemsContainer;
});