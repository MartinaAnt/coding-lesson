const mujNadpis = document.querySelector('h1');
mujNadpis.textContent = 'Nejlepší recept světa!';

const formular = document.querySelector('h2');
formular.style.color = 'red';

// výpis jména
document.querySelector('form').addEventListener('submit', () => {
  const nameValue = document.querySelector('input#jmeno').value;
  console.log(nameValue);
});

// validace formuláře
document.querySelector('form').addEventListener('submit', () => {
  event.preventDefault(); // Zastaví odeslání formuláře, což by způsobilo reload stránky
  const nameValue = document.querySelector('input#jmeno').value;
  if (!nameValue) {
    alert('Jméno musí být zadáno!');
  } else {
    console.log(nameValue);
  }
});

// poděkování
document.querySelector('input#jmeno').addEventListener('input', () => {
  const nameValue = document.querySelector('input#jmeno').value;
  const greetingDiv = document.getElementById('podekovani');
  greetingDiv.textContent = nameValue ? `Díky za přihlášení, ${nameValue}!` : '';
});

// odeslání formuláře do konzole
document.querySelector('form').addEventListener('submit', () => {
  event.preventDefault(); // Zastaví odeslání formuláře, což by způsobilo reload stránky
  const nameValue = document.getElementById('jmeno').value;
  const emailValue = document.getElementById('email').value;
  console.log(`Jméno: ${nameValue}, Email: ${emailValue}`);
});

/*



Jiná cesta ke stejnému cíli. Tady ale musíte zaevidovat JS funkci u daného HTML elementu <input oninput="podekovani()">


function vypisJmeno() {
    const nameValue = document.querySelector('input#jmeno').value;
    console.log(nameValue);
  }

function validujForm() {
  const nameValue = document.querySelector('input#jmeno').value;
  if (!nameValue) {
    alert('Jméno musí být zadáno!');
    event.preventDefault(); // Prevents form submission if validation fails
  } else {
    console.log(nameValue);
  }
}
 
function podekovani() {
  const nameValue = document.querySelector('input#jmeno').value;
  const greetingDiv = document.getElementById('podekovani');
  greetingDiv.textContent = nameValue ? `Díky za přihlášení, ${nameValue}!` : '';
}
 
function odesliForm() {
  validujForm();
  const nameValue = document.getElementById('name').value;
  const emailValue = document.getElementById('email').value;
  console.log(`Jméno: ${nameValue}, Email: ${emailValue}`);
  event.preventDefault(); // Prevents actual form submission for this example
}
*/
