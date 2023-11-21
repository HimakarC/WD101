let userForm = document.getElementById('user');
let l = [];
const R = () => 
{
    let entry = JSON.parse(localStorage.getItem('l')) || [];
    return entry;
}

const display = () =>
{
    let entry = R();
    const TE = entry.map((input) =>
    {
        const himakar = `<td class='th'>${input.FullName}</td>`;
        const bhavana = `<td class='th'>${input.email}</td>`;
        const chappidi = `<td class='th'>${input.password}</td>`;
        const ananya = `<td class='th'>${input.dob}</td>`;
        const td = `<td class='th'>${input.terms}</td>`;
        const row = `<tr>${himakar} ${bhavana} ${chappidi} ${ananya} ${td}</tr>`;
        return row;
    }).join('\n');
    const TB = document.querySelector('#user-table tbody');
    TB.innerHTML = TE;
}
const hbc = document.getElementById("dob");
hbc.addEventListener("change", () =>
{
    let L = hbc.value.split("-");
    let BD = new Date(L[0], L[1], L[2]);
    let T = new Date();
    let PY= T.getFullYear();
    let BY = BD.getFullYear()
    let ananya = PY - BY;
    let MD = T.getMonth() - BD.getMonth();

    if ((T.getDate() < BD.getDate()) || MD < 0) 
        {
        ananya--;
        }
    if (ananya < 18 || ananya > 55) 
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
    const FullName = document.getElementById('name').value
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
    const dob = document.getElementById('dob').value
    const terms = document.getElementById('terms').checked
    const input = {
        FullName, email, password, dob, terms
    };
    l = R();
    l.push(input);
    localStorage.setItem("l", JSON.stringify(l));
    display();
    userForm.reset();
    }
userForm.addEventListener('submit', sreenidhi)
display();
