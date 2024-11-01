this_title = "mo";
this_desc = "this is the description of the work";
this_date = "2020-01-01";
this_div = `
    <div class="card">
        <h3>Hello ${this_title}</h3>
        <p>${this_desc}</p>
        <span>${this_date}</span>
    </div>
    `;
document.write(this_div.repeat(4));

