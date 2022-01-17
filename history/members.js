let response = await fetch("members.json");
let members = await response.json();
let list = membersList;
let maxYear = 2001;
let html = "";
let dateFormat = new Intl.DateTimeFormat("en-US", {dateStyle: "medium"});

document.head.insertAdjacentHTML("beforeend", `<link rel="stylesheet" href="members.css">`)

for (let member of members) {
	html += `<tr>
	<th class="name" scope="row">${member.name}</th>
	<td class="terms">`;

	for (let term of member.term) {
		let [sy, sm, sd] = term.start.split("-");
		let [ey, em, ed] = term.end? term.end.split("-") : ["", ""];
		let readableStart = dateFormat.format(new Date(term.start));
		let readableEnd = term.end? dateFormat.format(new Date(term.end)) : "present";

		if (ey) {
			maxYear = Math.max(maxYear, parseInt(ey));
		}

		let readableRange = `${readableStart.replace("Feb 1, ", "")} – ${readableEnd.replace("Jan 31, ", "")}`

		html += `<div class="term ${term.type} ${term.resigned? "resigned" : ""}"
		title="${term.type}, ${readableStart} – ${readableEnd} ${term.resigned? " (resigned)" : ""}" ${term.note ?? ""}
		style="--sy: ${sy}; --sm: ${sm}; --sd: ${sd}; --ey: ${ey}; --em: ${em}; --ed: ${ed}">
		${readableStart.replace("Feb 1, ", "")} – ${readableEnd.replace("Jan 31, ", "")}
		</div>`;
	}

	html += `</td></tr>`;
}

list.insertAdjacentHTML("beforeend", html);

let years = maxYear - 2001 + 1;
list.style.setProperty("--years", years);

let theadRow = $$("thead tr", list)[0];
for (let i = 1; i <= years; i++) {
	theadRow.insertAdjacentHTML("beforeend", `<th>${2000 + i}</th>`);
}

$$("td.terms", list).forEach(th => th.colSpan = years);

let container = list.closest(".container");
if (container) {
	new ResizeObserver(_ => {
		let rect = container.getBoundingClientRect();
		list.style.setProperty("--container-width", rect.width + "px");
	}).observe(container);
}

function $$(selector, context = document) {
	return Array.from(context.querySelectorAll(selector));
}