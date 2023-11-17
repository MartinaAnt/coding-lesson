# Úvod do JavaScriptu

## Co je JavaScript?

JavaScript je skriptovací jazyk používaný k tvorbě interaktivních a dynamických webových stránek. Je interpretovaný, což znamená, že běží přímo v prohlížeči, a umožňuje manipulaci s obsahem stránky a reakce na uživatelské akce.

Byl vynalezen Brendenem Eichem.

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

Poznámka: Prohlížeč čte kód v pořadí, v jakém se v souboru objevuje. Pokud se JavaScript načte první a má ovlivnit HTML, které ještě nebylo načteno, mohou vzniknout problémy. Starším řešením bylo umístit JavaScript na konci `</body>`, novější řešení pracují s koncepty `defer` nebo `async`. My budeme používat externí JS a budeme ovlivňovat i podobu HTML, takže si přidáme `defer`

```html
<script src="script.js" defer></script>
```

## Příklad "Hello world!"

Seznámení s JavaScriptem je už náročnější než seznámení s HTML a CSS.

1. Jděte na svou testovací stránku s receptem a vytvořte nový soubor pojmenovaný `script.js` a uložte jej.
2. Ve vašem souboru `index.html` zadejte tento kód na nový řádek, právě před uzavírací značkou `</head>`:

   ```html
   <script src="script.js"></script>
   ```

3. Přidejte tento kód do souboru script.js:

   ```javascript
   const mujNadpis = document.querySelector('h1');
   mujNadpis.textContent = 'Nejlepší recept světa!';
   ```

Ujistěte se, že jsou soubory HTML a JavaScript uloženy. Poté načtěte index.html ve svém prohlížeči. Nadpis vaší webové stránky se změnil!

### Co se stalo?

Text nadpisu se změnil pomocí JavaScriptu. Udělali jste to pomocí funkce zvané querySelector(), která získá odkaz na váš nadpis a uloží ho do proměnné pojmenované mujNadpis. To je podobné tomu, co jsme dělali s výběrem v CSS (nazývali jsme to selektor). Když chcete něco udělat s prvkem, musíte jej nejprve vybrat.

Poté kód nastaví hodnotu vlastnosti textContent proměnné mujNadpis (která představuje obsah nadpisu) na 'Nejlepší recept světa!'.

## JavaScript výstup

V Pythonu máme `print()`, v JS máme `console.log()`, `alert()` nebo zápis přímo do HTML pomocí `document.write()`.

```javascript
console.log('Ahoj, tady tvůj bug.');
```

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

## Datové typy

| Proměnná | Popis                                                                                                                                           | Příklad                                         |
| -------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------- |
| String   | řetězec v jednoduchých nebo dvojitých uvozovkách                                                                                                | 'Bob', "Bob"                                    |
| Number   | číslo                                                                                                                                           | 1                                               |
| Boolean  | boolean s malými písmeny                                                                                                                        | true/false                                      |
| Array    | struktura, která vám umožňuje uložit více hodnot v jednom odkazu, na každého člena pole se dostaneme pomocí indexu, tedy takto: mojePromenna[0] | [1, 'Bob', 'Steve', 10]                         |
| Object   | To může být cokoli. Vše v JavaScriptu je objekt.                                                                                                | let mojePromenna = document.querySelector('h1') |

## Operátory neznámé v pythonu

### Přísná rovnost

Provádí test na to, zda jsou dvě hodnoty stejné a stejného datového typu. Vrací výsledek true/false (Boolean).  
`===`

```javascript
let mojePromenna = 3;
mojePromenna === 4;
```

### Negace

Nerovná se. Vrací logicky opačnou hodnotu toho, co předchází. Převede true na false atd.
Když je použito vedle operátoru rovnosti, operátor negace testuje, zda dvě hodnoty nejsou stejné.

`!, !==`

Pro "Not" je základní výraz true, ale porovnání vrací false, protože ho záporně ovlivňujeme:

```javascript
let mojePromenna = 3;
!(mojePromenna === 3);
```

"Does-not-equal" dává v zásadě stejný výsledek s odlišnou syntaxí. Zde testujeme "je mojePromenna NEROVNO 3". Vrací false, protože mojePromenna JE rovno 3:

```javascript
let mojePromenna = 3;
mojePromenna !== 3;
```

## Podmínky

Podmínky jsou kódové struktury používané k testování, zda výraz vrací true nebo ne. Velmi běžnou formou podmínek je instrukce if...else. Např.

```javascript
let zmrzka = 'čokoláda';
if (zmrzka === 'čokoláda') {
  alert('Miluju čokoládovou zmrzlinu!');
} else {
  alert('Ale má oblíbená je čokoládová …');
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

Poznámka: Příkaz `return` říká prohlížeči, aby vrátil hodnotu proměnné result z funkce, takže je k dispozici k použití.

## Události

A máme tady tu slavnou dynamickou interakci s uživatelem.
Skutečná interaktivita na webových stránkách vyžaduje manipulaci s událostmi. Jedná se o kódové struktury, které naslouchají aktivitě v prohlížeči a spouštějí kód jako odpověď.

Nejjasnějším příkladem je manipulace s událostí kliknutí, která je vyvolána prohlížečem při kliknutí na něco myší. Pro demonstraci zadejte do konzole následující kód a poté klikněte na aktuální webovou stránku:

```javascript
document.querySelector('html').addEventListener('click', () => {
  alert('Au! Přestaňte do mě šťourat!');
});
```

Existuje několik způsobů, jak připojit manipulátor událostí k elementu. Zde vybíráme element <html>. Poté zavoláme jeho funkci addEventListener(), předáváme název události, na kterou naslouchat ('click') a funkci, která se spustí, když událost nastane.

Funkci, kterou jsme právě předali addEventListener(), nazýváme anonymní funkce, protože nemá jméno.

## Manipulace s obsahem stránky

Pomocí JavaScriptu můžeme měnit obsah stránky dynamicky. To zahrnuje přidávání, odebírání a měnění prvků na stránce v reálném čase. Pracovta se dá jak s HTML, tak CSS.

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

Stejně jako s řadou jiných věcí, existuje v JS řada způsobů, jak vybrat DOM element.
Některé jsou modernější, jiné se dnes už tak nepoužívají, každopádně nejčastější jsou:

- `querySelectorAll(element)` pro výběr všech daných elementů na stránce
- `getElementById()` pro výběr podle specifického atributu id
- `getElementsByClassName()` pro výběr podle tzv. class (sloužící k definici CSS)

## Komentáře

Komentáře jsou úryvky textu, které lze přidat spolu s kódem. Prohlížeč ignoruje text označený jako komentáře. Komentáře v JavaScriptu můžete psát stejně jako v CSS:

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
který v JS nemá pevné základy. **Angular** je velmi komplexní, i proto je spíš na ústupu, ale zároveň právě proto a také protože je nejstarší z těch tří, jede na něm řada firem a velkých projektů.
