const carousel = document.querySelector(".carousel");
const items = document.querySelectorAll(".list .item");
const thumbs = document.querySelectorAll(".thumbnail .item");
const btnPrev = document.querySelector(".arrow-left");
const btnNext = document.querySelector(".arrow-right");

let index = 0;

function updateCarousel() {
	items.forEach((item) => item.classList.remove("ativo"));
	thumbs.forEach((thumb) => thumb.classList.remove("ativo"));

	items[index].classList.add("ativo");
	thumbs[index].classList.add("ativo");

	const img = thumbs[index].querySelector("img").src;
	carousel.style.backgroundImage = `url(${img})`;
}

btnNext.addEventListener("click", () => {
	index++;
	if (index >= items.length) {
		index = 0;
	}
	updateCarousel();
});

btnPrev.addEventListener("click", () => {
	index--;
	if (index < 0) {
		index = items.length - 1;
	}
	updateCarousel();
});

updateCarousel();

thumbs.forEach((thumb, i) => {
	thumb.addEventListener("click", () => {
		index = i;
		updateCarousel();
	});
});

const searchInput = document.getElementById("search");
const searchResults = document.getElementById("searchResults");

searchInput.addEventListener("input", () => {
	const value = searchInput.value.toLowerCase();
	searchResults.innerHTML = "";

	if (value === "") {
		searchResults.style.display = "none";
		return;
	}

	items.forEach((item, i) => {
		const title = item.querySelector("h1").innerText;
		const img = thumbs[i].querySelector("img").src;

		if (title.toLowerCase().includes(value)) {
			const li = document.createElement("li");

			li.innerHTML = `
				<img src="${img}" alt="${title}">
				<span>${title}</span>
			`;

			li.addEventListener("click", () => {
				index = i;
				updateCarousel();
				searchResults.style.display = "none";
				searchInput.value = title;
			});

			searchResults.appendChild(li);
		}
	});

	searchResults.style.display = searchResults.children.length > 0 ? "flex" : "none";
});

/* Fecha a lista e limpa o campo ao clicar fora */
document.addEventListener("click", (e) => {
	if (!e.target.closest(".search-box")) {
		searchResults.style.display = "none";
		searchInput.value = "";
	}
});

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
	navMenu.classList.toggle("active");
});
