let userForm=document.getElementById('user');
let l = [];
const R = () => 
{
    let entry = JSON.parse(localStorage.getItem('l')) || [];
    return entry;
}

const display = () => 
{
    let entry = R();
    const tE = entry.map((input) => 
    {
        const ND = `<td class='th'>${input.FullName}</td>`;
        const ED = `<td class='th'>${input.email}</td>`;
        const PD = `<td class='th'>${input.password}</td>`;
        const DOB = `<td class='th'>${input.dob}</td>`;
        const terms = `<td class='th'>${input.terms}</td>`;
        const r = `<tr>${ND} ${ED} ${PD} ${DOB} ${terms}</tr>`;
        return r;
    }).join('\n');
    const TB = document.querySelector('#user-table tbody');
    TB.innerHTML = tE;
}
const hbc = document.getElementById("dob");
hbc.addEventListener("change", () =>
{
    let L = hbc.value.split("-");
    let BD = new Date(L[0], L[1], L[2]);
    let TD = new Date();
    let PY = TD.getFullYear();
    let BY = BD.getFullYear()
    let runanya = PY - BY;
    let MD = TD.getMonth() - BD.getMonth();

    if ((TD.getDate() < BD.getDate()) || MD < 0) 
        {
        	runanya--;
        }
    if (runanya < 18 || runanya > 55) 
        {
        	hbc.setCustomValidity("Age must be between 18 and 55");
        	hbc.reportValidity();
    }
    else
	{
        hbc.setCustomValidity("");
        }
    }
);
const sreenidhi = (event) => 
{
    event.preventDefault();
    const himakar = document.getElementById('name').value
    const chappidi = document.getElementById('email').value
    const bhavana = document.getElementById('password').value
    const ananya = document.getElementById('dob').value
    const ok = document.getElementById('terms').checked
    const input =
    {
        himakar, chappidi, bhavana, ananya, ok
    };
    l = R();
    l.push(input);
    localStorage.setItem("l", JSON.stringify(l));
    display();
    userForm.reset();
    }


userForm.addEventListener('submit', sreenidhi)
display();
