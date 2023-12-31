# Úvod do JavaScriptu

## Co je JavaScript?

JavaScript je skriptovací jazyk používaný k tvorbě interaktivních a dynamických webových stránek. Běží přímo v prohlížeči a umožňuje manipulaci s obsahem stránky a reakce na uživatelské akce. Byl vynalezen Brendenem Eichem.

JavaScript samotný je relativně kompaktní, ale velmi flexibilní. Vývojáři napsali různé nástroje nad jádrem jazyka JavaScript odemykající obrovské množství funkcionalit. Mezi ně patří:

- Rozhraní (API) pro prohlížeč vestavěná do webových prohlížečů, poskytující funkce jako dynamické vytváření HTML a nastavování CSS stylů.
- API od třetích stran, která umožňují vývojářům začlenit funkcionalitu z jiných poskytovatelů obsahu, jako je Twitter nebo Facebook.
- Frameworky a knihovny od třetích stran, které lze aplikovat na HTML k urychlení práce na vytváření webových stránek a aplikací.

## Jak přidat JavaScript do tvé webové stránky

1. Interní JavaScript

   V souboru `index.html` se zadá kód na nový řádek v rámci tagu `</head>`, ideálně na úplně poslední místo.
   Toto provádí stejnou práci jako prvek `<link>` pro CSS. Přidává JavaScript na stránku tak, aby mohl ovlivnit HTML (spolu s CSS a čímkoli dalším na stránce).

   ```html
   <script>
     const mujNadpis = document.querySelector('h1');
     mujNadpis.textContent = 'Nejlepší recept světa!';
   </script>
   ```

2. Externí JavaScript

   Pokud chcete přidat JavaScript kód v samostatném souboru, vložíte odkaz na něj také do `<script>` tagu.

   ```html
   <script src="script.js"></script>
   ```

3. Inline JavaScript

   Někdy můžete narazit na kusy JavaScript kódu kdekoliv uvnitř HTML. Tomu se říká _handler_ a slouží ke spuštění určité části kódu pouze pro danou část HTML.

   ```html
   <form onsubmit="validujForm()"></form>
   ```

Poznámka: Prohlížeč čte kód v pořadí, v jakém se v souboru objevuje. Pokud se JavaScript načte první a má ovlivnit HTML, které ještě nebylo načteno, mohou vzniknout problémy. Starším řešením bylo umístit JavaScript na konci `</body>`, novější řešení pracují s&nbsp;koncepty `defer` nebo `async`. My budeme používat externí JS a budeme ovlivňovat i podobu HTML, takže si přidáme `defer`

```html
<script src="script.js" defer></script>
```

## Úvodní příklad

Seznámení s JavaScriptem je už náročnější než seznámení s HTML a CSS. Ale protože už znáte Python, řada konceptů vám bude povědomá.

1. Jděte na svou testovací stránku s receptem a vytvořte nový soubor pojmenovaný `script.js` a uložte jej.
2. Ve vašem souboru `index.html` zadejte tento kód na nový řádek, právě před uzavírací značkou `</head>`:

   ```html
   <script src="script.js" defer></script>
   ```

3. Přidejte tento kód do souboru script.js:

   ```javascript
   const mujNadpis = document.querySelector('h1');
   mujNadpis.textContent = 'Nejlepší recept světa!';
   ```

Ujistěte se, že jsou soubory HTML a JavaScript uloženy. Poté načtěte `index.html` ve svém prohlížeči. Nadpis vaší webové stránky se změnil!

### Co se stalo?

Text nadpisu se změnil pomocí JavaScriptu. Udělali jste to pomocí funkce zvané `querySelector()`, která získá odkaz na váš nadpis a uloží ho do proměnné pojmenované `mujNadpis`. To je podobné tomu, co jsme dělali s výběrem v CSS (nazývali jsme to selektor). Když chcete něco udělat s prvkem, musíte jej nejprve vybrat.

Poté kód nastaví hodnotu vlastnosti textContent proměnné `mujNadpis` (která představuje obsah nadpisu) na 'Nejlepší recept světa!'.

## JavaScript výstup

V Pythonu máme `print()`, v JS máme `console.log()`, `alert()` nebo zápis přímo do HTML pomocí `document.write()`.

```javascript
console.log('Ahoj, tady tvůj recept.');
```

A kde najít tu JS konzoli? Tam, kde jsme si ukazovali zdrojový kód jakékoliv webové stránky - v tzv. Inspektoru. Zkuste:

- **Mac**: `Cmd + Opt + J`
- **Windows**: `Ctrl + Shift + J`

a vyberte záložku `Console`. Jak už bylo řešeno, JS běží přímo v prohlížeči, takže tuto konzoli můžete použít na jakékoliv webové stránce. Další příklady si tak můžete zkoušet přímo tam.

## Proměnné

Proměnné jsou kontejnery, které uchovávají hodnoty. Začnete tím, že deklarujete proměnnou klíčovým slovem `let`, následovaným názvem, který dáte proměnné:

```javascript
let mojePromenna;
```

Středník na konci řádku ukazuje, kde končí příkaz. Je vyžadován pouze tehdy, když potřebujete oddělit příkazy na jediném řádku. Někteří lidé však věří, že je dobré mít středníky na konci každého příkazu. Existují další pravidla, kdy byste měli a neměli používat středníky.

JavaScript je citlivý na velká a malá písmena stejně jako Python.

Po deklaraci proměnné jí můžete přiřadit hodnotu:

```javascript
mojePromenna = 'Bob';
```

Také můžete provést obě tyto operace na stejném řádku:

```javascript
let mojePromenna = 'Bob';
```

Hodnotu získáte zavoláním názvu proměnné:

```javascript
mojePromenna;
```

Po přiřazení hodnoty proměnné ji můžete později v kódu změnit:

```javascript
let mojePromenna = 'Bob';

let mojePromenna = 'Marley';

mojePromenna;
```

Pokud se jedná o proměnnou, kterou ale měnit nechceme, místo `let` použijeme `const`:

```javascript
const mojePromenna = 'Navždy Bob';
```

## Základní datové typy

| Proměnná | Popis                                                                                                                                           | Příklad                                         |
| -------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------- |
| String   | řetězec v jednoduchých nebo dvojitých uvozovkách                                                                                                | 'Bob', "Bob"                                    |
| Number   | číslo                                                                                                                                           | 1                                               |
| Boolean  | boolean s malými písmeny                                                                                                                        | true/false                                      |
| Array    | struktura, která vám umožňuje uložit více hodnot v jednom odkazu, na každého člena pole se dostaneme pomocí indexu, tedy takto: mojePromenna[0] | [1, 'Bob', 'Steve', 10]                         |
| Object   | To může být cokoli. Vše v JavaScriptu je objekt.                                                                                                | let mojePromenna = document.querySelector('h1') |

## Operátory neznámé v Pythonu

### Přísná rovnost

Provádí test na to, zda jsou dvě hodnoty stejné a stejného datového typu. Vrací výsledek true/false (Boolean).  
`===`

```javascript
let mojePromenna = 3;
mojePromenna === 3; /* true */
mojePromenna === '3'; /* false */

/* porovnání známé z Pythonu: */
mojePromenna == '3'; /* true */
```

### Negace

Nerovná se. Vrací logicky opačnou hodnotu toho, co předchází. Převede true na false atd.
Když je použito vedle operátoru rovnosti, operátor negace testuje, zda dvě hodnoty nejsou stejné.

`!, !==`

Pro "Not" je základní výraz true, ale porovnání vrací false, protože ho záporně ovlivňujeme:

```javascript
let mojePromenna = 3;
!(mojePromenna === 3); /* false */
```

"Does-not-equal" dává v zásadě stejný výsledek s odlišnou syntaxí. Zde testujeme "je mojePromenna NEROVNO 3?". Vrací false, protože mojePromenna JE rovno 3:

```javascript
let mojePromenna = 3;
mojePromenna !== 3; /* false */
```

## Podmínky

Podmínky jsou kódové struktury používané k testování, zda výraz vrací true nebo ne. Hlavní (ne jedinou) formou podmínek je instrukce if ... else if ... else. Např.

```javascript
let zmrzka = 'čokoláda';
if (zmrzka === 'čokoláda') {
  alert('Miluju čokoládovou zmrzlinu!');
} else {
  alert('Ale já mám radši čokoládovou…');
}
```

### Výraz uvnitř if ()

Výraz uvnitř if () je test. Tento test používá operátor přísné rovnosti (jak je popsáno výše), aby porovnal proměnnou zmrzka s řetězcem "čokoláda" a zjistil, zda jsou tyto dvě hodnoty stejné. Pokud toto porovnání vrátí true, spustí se první blok kódu. Pokud porovnání není pravdivé, spustí se druhý blok kódu – po příkazu else.

## Funkce

Již jste viděli některé použití funkcí. Například:

```javascript
let mojePromenna = document.querySelector('h1');
```

```javascript
alert('ahoj!');
```

Tyto funkce, `document.querySelector` a `alert`, jsou zabudované do prohlížeče.

Pokud vidíte něco, co vypadá jako název proměnné, ale následuje za ním závorka – () – pravděpodobně se jedná o funkci. Funkce přijímají argumenty stejně jako v Pythonu.

Můžete samozřejmě také definovat vlastní funkce. V následujícím příkladu vytvoříme jednoduchou funkci, která bere dva argumenty a násobí je:

```javascript
function nasobeni(cislo1, cislo2) {
  let result = cislo1 * cislo2;
  return result;
}
```

Poznámka: Příkaz `return` znáte, funguje stejně jako v Pythonu. Říká prohlížeči, aby vrátil hodnotu proměnné result z&nbsp;funkce, takže je k&nbsp;dispozici k použití.

## Cykly

I ty má JS stejně jako Python a dokonce jsou si velmi podobné. `for` pro pevný počet opakování a `while` pro
fungování dokud platí podmínka. Jen samotná syntax se opět trochu liší.

Takto můžete vytvořit seznam čísel včetně odpovídajících HTML tagů pomocí obou typů cyklů:

```javacript
  document.write("<ul>");

  for (let i = 1; i <= 10; i++)
      document.write("<li>" + i + "</li>");

  document.write("</ul>");
```

```javacript
  document.write("<ul>");

  let i = 1;
  while (i <= 10) {
      document.write("<li>" + i + "</li>");
      i++;
  }

  document.write("</ul>");
```

## Události

A máme tady tu slavnou dynamickou interakci s uživatelem.
Skutečná interaktivita na webových stránkách vyžaduje manipulaci s&nbsp;událostmi. Jedná se o kódové struktury, které naslouchají aktivitě v prohlížeči a spouštějí kód jako odpověď.

Nejjasnějším příkladem je manipulace s událostí kliknutí `click`, která je vyvolána prohlížečem při kliknutí na něco myší. Pro demonstraci zadejte do konzole následující kód a poté klikněte na aktuální webovou stránku:

```javascript
document.querySelector('html').addEventListener('click', () => {
  alert('Au! Přestaňte do mě šťourat!');
});
```

Existuje několik způsobů, jak připojit manipulátor událostí k elementu. Zde vybíráme element `<html>`. Poté zavoláme jeho funkci `addEventListener()`, předáváme název události, na kterou naslouchat ('click') a funkci, která se spustí, když událost nastane.

Kompletní seznam událostí, na které se dá reagovat najdete například zde: https://www.w3schools.com/jsref/dom_obj_event.asp. Pojmenování událostí je dané, nelze například `submit` nahradit českým `odeslat`.

_Poznámka_: Funkci, kterou jsme právě předali `addEventListener()`, nazýváme anonymní funkce, protože nemá jméno. Vyjadřuje ji jen konstrukt `() => {}`

## Manipulace s obsahem stránky

Pomocí JavaScriptu můžeme měnit obsah stránky dynamicky. To zahrnuje přidávání, odebírání a měnění prvků na stránce v&nbsp;reálném čase. Pracovat se dá jak s HTML, tak CSS.

### Dokumentový objektový model (DOM)

Každý dokument, který je aktuálně načten ve vašem prohlížeči, je reprezentován objektovým modelem dokumentu neboli **Document Object Model** - **DOM**. Jedná se o reprezentaci ve "stromové struktuře" vytvořenou prohlížečem, která umožňuje snadný přístup k HTML struktuře programovacím jazykům. Například prohlížeč sám jej používá k aplikaci stylování a dalších informací na správné elementy při vykreslování stránky. Vy, jako vývojář, pak můžete pomocí JavaScriptu manipulovat s DOM po vykreslení stránky.

Konkrétní příklad už jsme si vyzkoušeli, když jsme změnili nadpis naší stránky o receptech.

```javascript
const mujNadpis = document.querySelector('h1');
mujNadpis.textContent = 'Nejlepší recept světa!';
```

Kromě textového obsahu můžete měnit mnohem víc. Třeba atributy tagů:

```javascript
const link = document.querySelector('a');
link.href = 'https://pyladies.cz/';
```

A nebo i CSS!

```javascript
const formular = document.querySelector('h2');
formular.style.color = 'red';
```

Případně není nutné něco měnit, může nám jít jen o získání dané hodnoty. V následujícím kódu najdeme HTML tag `input` s vlastním id `jmeno` a zjistíme jeho aktuální hodnotu.

```javascript
const jmeno = document.querySelector('input#jmeno').value;
```

Stejně jako s řadou jiných věcí, existuje v JS několik způsobů, jak dělat to samé, tedy vybrat DOM element.
Některé jsou modernější, jiné se dnes už tak nepoužívají, ale dost možná se s nimi potkáte. Nejčastější jsou:

- `querySelector(tag#id.class)` pro výběr prvního tagu, id nebo třídy (tzv. class) na stránce
- `querySelectorAll(element)` pro výběr všech daných elementů na stránce
- `getElementById(jmeno_id)` pro výběr podle specifického atributu id
- `getElementsByClassName(jmeno_tridy)` pro výběr podle třídy (sloužící k definici CSS)

## Komentáře

Komentáře jsou úryvky textu, které lze přidat spolu s kódem. Stejně jako terminál, i prohlížeč ignoruje text označený jako komentáře. Komentáře v JavaScriptu můžete psát stejně jako v CSS:

```javascript
/*
Všechno mezi je komentář.
Všechno mezi je komentář.
Všechno mezi je komentář.
*/

// A toto je jednořádkový komentář.
```

## Co dál?

Pokud to myslíš s tvorbou webových stránek vážně, tak je potřeba se naučit JavaScript a&nbsp;nějaký framework. Velmi
populární pro začátek je framework [Bootstrap](https://getbootstrap.com/), který pochází od vývojářů twitteru.
W3school vyvíjí vlastní framework [W3.CSS](https://www.w3schools.com/w3css/), který je pro začátek asi nejlepší volbou.

A pak jsou tady "_těžké váhy_" frontend frameworků, které stojí hlavně na JavaScriptu:

- [React](https://reactjs.org/)
- [Angular](https://angular.io/)
- [Vue.js](https://vuejs.org/)

Pro začátečníky se doporučuje **React** nebo **Vue**. **React** má nejširší základnu uživatelů, **Vue** je jednodušší především pro člověka,
který v&nbsp;JS nemá pevné základy. **Angular** je velmi komplexní, i proto je spíš na ústupu, ale zároveň právě proto a také protože je nejstarší z&nbsp;těch tří, jede na něm řada firem a velkých projektů.
<br>
<br>
<br>

# A teď praktické cvičení

Formuláře jsou klíčovým prvkem interaktivity na webových stránkách. JavaScript nám poskytuje nástroje k manipulaci s formuláři, což zahrnuje získávání a nastavování hodnot, validaci vstupů a reakce na události spojené s formulářem.

## Úkol 1: Základní formulář

Vytvořte jednoduchý HTML formulář obsahující pole pro zadání jména a emailu a tlačítko s nápisem "Odeslat". Napište JavaScript kód, který po stisknutí tlačítka vypíše jméno zadané v poli do konzole.

_Nápověda 1_: Lépe se vám bude hledat HTML element, když mu přiřadíte atribut "id" `<input id="jmeno">` a hledat budete jako `document.querySelector('input#jmeno')`.

_Nápověda 2_: Událost pro odeslání se nazývá `submit`.

## Úkol 2: Validace formuláře

Rozšiřte předchozí formulář o validaci. Přidejte podmínku, která zkontroluje, zda bylo jméno zadáno. Pokud není, vypište chybovou zprávu. Pokud je jméno zadáno, vypište ho do konzole.

## Úkol 3: Dynamická odezva na změny

Napište JavaScript kód, který dynamicky reaguje na změny v polích a aktualizuje výstup v reálném čase. Pokud uživatel zadá jméno, měl by se okamžitě přímo na webové stránce zobrazit text "Díky za přihlášení, [zadané jméno]!". (ne v konzoli, ale přímo u formuláře.)

## Úkol 4: Odesílání formuláře

Napište JavaScript kód, který zachytí událost odeslání formuláře a provede jednoduchou akci, například výpis všech zadaných údajů do konzole.
