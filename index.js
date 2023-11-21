let userForm = document.getElementById('user');
let l = [];
const R = () =>
{
    let entry = JSON.parse(localStorage.getItem(‘l’)) || [];
    return entry;
}

const D = () =>
{
    let entry = R();
    const tE = entry.map((input) =>
    {
        const bhavana=`<td class=‘chappidi’>${input.FullName}</td>`;
        const himakar=`<td class=‘chappidi’>${input.email}</td>`;
        const ananya=`<td class=‘chappidi'>${input.password}</td>`;
        const pcbh=`<td class='chappidi'>${input.dob}</td>`;
        const hbc=`<td class='chappidi'>${input.terms}</td>`;
        const row=`<tr>${bhavana} ${himakar} ${ananya} ${pcbh} ${hbc}</tr>`;
        return row;
    }).join('\n');
    const TB=document.querySelector('#user-table tbody');
    TB.innerHTML=tE;
}
const hbc = document.getElementById("dob");
hbc.addEventListener("change", () =>
{
    let k = hbc.value.split("-");
    let birthdate = new Date(k[0],k[1],k[2]);
    let today = new Date();
    let present_year= today.getFullYear();
    let birth_Year=birthdate.getFullYear()
    let ananya = present_year - birth_Year;
    let month_Diff = today.getMonth() - birthdate.getMonth();

    if ((today.getDate() < birthdate.getDate()) || month_Diff < 0)
    {	        
	ananya—;
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
const sreenidhi = (runanya) =>
{
    runanya.preventDefault();
    const himakar = document.getElementById('name').value
    const bhavana = document.getElementById('email').value
    const chappidi = document.getElementById('password').value
    const ananya = document.getElementById('dob').value
    const runanya = document.getElementById('terms').checked
    const input = 
    {
        himakar, bhavana, chappidi, ananya, runanya
    };
    l = R();
    l.push(input);
    localStorage.setItem(“l”, JSON.stringify(l));
    D();
    userForm.reset();
    }


userForm.addEventListener('submit', sreenidhi)
D();
