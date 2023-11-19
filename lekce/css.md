Většina tohoto textu pochází z podkladů ke kurzu Knihovny z jara 2020. Tímto děkuji neznámému autorovi.
https://naucse.python.cz/2020/praha-jaro-knihovny/sessions/html-css/

# Úvod do CSS

V přechozí lekci sis zkusila navrhnout webovou stránku jen pomocí HTML a&nbsp;asi jsi zjistila, že taková stránka
vypadá dosti nevábně. Asi jako nevybarvené omalovánky. Ve světě webových stránek jsou právě kaskádové styly (**CSS**)
naše pastelky (**barvičky**).

Pro zopakování **CSS** znamená **Cascading Styles Sheets** (v češtině: Kaskádové styly).

## Aplikace CSS stylů

Máte napsanou HTML stránku a&nbsp;teď si asi říkáte, musím to celé přepisovat, když chci mít růžové pozadí a&nbsp;žluté písmo?
Opověď zní: "Ano, můžu. Ale naštěstí nemusím!". Existují tři způsoby jak dodat HTML stránce grafický styl:

1. **Inline**: CSS styly jsou vložené přímo v HTML tagu zadané pomocí atributu **style**.

   ```html
   <p style="color: red">text</p>
   ```

Tímto zápisem říkáme, že celý text v odstavci má mít červenou barvu.

2.  **Interní CSS**: CSS styly jsou vkládané pomocí tagu `<style> </style>` do hlavičky dokumentu `<head> </head>`:

    ```html
    <!DOCTYPE html>
    <html>
      <head>
        <title>CSS Example</title>
        <style>
          p {
            color: red;
          }

          a {
            color: orange;
          }
        </style>
      </head>
      <body>
        <p>Ahoj pyladies!</p>
        <p>
          <a href="https://naucse.python.cz/">Oranžový odkaz na nauč se</a>
        </p>
      </body>
    </html>
    ```

3.  **Externí CSS**: Poslední možností je uložit CSS jako externí soubor (přípona \*.css). Vytvoř si soubor `styl.css`
    a&nbsp;ulož ho do stejné složky, kde máš html soubor. Do souboru vlož jen vnitřek z předchozího příkladu:

    `styl.css`:

    ```css
    p {
      color: red;
    }

    a {
      color: orange;
    }
    ```

    Nyní svému HTML musíš říct, kde má hledat soubory se stylem:

    `moje_stranka.html`:

    ```html
    <!DOCTYPE html>
    <html lang="html">
      <head>
        <title>CSS Example</title>
        <link rel="stylesheet" href="style.css" />
      </head>
      <body>
        <p>Ahoj pyladies!</p>
        <p>
          <a href="https://naucse.python.cz/">Oranžový odkaz na nauč se</a>
        </p>
      </body>
    </html>
    ```

Odkaz na CSS obstaral tag `<link>`, který má dva atributy. Atribut **rel** udává vztah (relationship) mezi
současným HTML a&nbsp;odkazovaným dokumentem. Hodnotou _stylesheet_ říkáme, že má očekávat **css** soubor.
Atribut **href** (hypertext reference) odkazuje na umístění souboru, které může být relativní i&nbsp;absolutní.

> [warning] Pozor!
> Je dobrou praxí style do HTML nezadávat, abychom oddělili strukturu dokumentu **HTML** od jeho stylu **CSS**.
> Inline CSS používáme jen v případě, pokud je důležité, aby byl text červený bez ohledu na css uložené v hlavičce.

## Syntaxe CSS

Ve zkratce se syntaxe skládá ze **selektorů**, **vlastností** a&nbsp;**hodnot**. Výhodou je, že už známe Python, takže si
můžeme pomoci jeho syntaxí. Představ si, že selektor je **slovník**, **vlastnost** je klíč a&nbsp;hodnota je **hodnota**.
Definici slovníku známe, ale co s tím, co kam ukládat? Vysvětlíme si to postupně na příkladu:

```css
body {
  font-size: 14px;
  color: deeppink;
}
```

- **selektor**: Určuje, na který tag chceme aplikovat styl a&nbsp;můžeme si ho představit jako jméno proměnné slovníku. V
  příkladu je to tag **body**.

- **vlastnost (property)**: Jak už název napovídá, říká nám, kterou vlastnost daného tagu chceme měnit. V příkladu
  máme vlastnosti dvě **font-size (velikost písma)** a&nbsp;**color (barvu písma)**. Když zůstaneme u&nbsp;Pythonu, tak můžeme
  vlastnost připodobnit ke klíči slovníku.

- **hodnota (value)**: Hodnota je hodnota vlastnosti, je to trochu definice kruhem, ale snad je to zřejmé. Hodnotu
  stejně jako v Pythonu píšeme za dvojtečku.

> [warning] Pozor!
> Neberte příklad s Pythonem doslova, jednotlivé páry vlastnost:hodnota se v CSS oddělují středníkem.
> Stejně tak selektor se nepřiřazuje k "slovníku" znaménkem rovná se, ale jen mezerou.

### Jednotky délky

Možná sis v předchozím příkladu všimla podivné jednotky u&nbsp;font-size - **px**, to je jednotka pixelu. Co je to pixel?
Je to bod na tvé obrazovce, který může mít v jeden okamžik jen jednu barvu. Možná si vzpomínáš na pravěk počítačů,
kdy obrázky vypadaly nějak takto:

![srdce](static/heart.png)

Na srdíčku jsou vidět jednotlivé čtverečky. A jeden ten čtvereček je pixel. S dnešním _Ultra HD_ rozlišením už
jednotlivé pixely (čtverečky) neuvidíš.

A jaké jednotky délky můžeš používat? V CSS se dělí na **absolutní** a&nbsp;**relativní**. Zde je seznam:

- **absolutní**:
  - **cm**: centimetr
  - **mm**: milimetr
  - **in**: palec (1in = 96px = 2.54cm)
  - **px**: pixel (1px = 1/96 palce)
  - **pt**: bod (1pt = 1/72 palce)
  - **pc**: picas (1pc = 12 pt)
- **relativní**:
  - **em**: násobek velikosti písma
  - **ex**: násobek velikosti písma na x-ové souřadnici (zřídka používané)
  - **ch**: násobek šířky znaku 0 (nula)
  - **rem**: násobek velikosti písma kořenového tagu (elementu)
  - **vw**: procentní bod šířky okna prohlížeče
  - **vh**: procentní bod výšky okna prohlížeče
  - **vmin**: procentní bod menšího rozměru z okna prohlížeče
  - **vmax**: procentní bod většího rozměru z okna prohlížeče
  - **%**: procentní bod velikosti nadřazeného elementu (tagu)

## Barvy

CSS poskytuje **16&nbsp;777&nbsp;216** různých barev. A jak barvy zadávat, když jich je tolik?

Nemusíš se bát, že bys musela znát názvy všech barev. Pokud znáš anglický název dané barvy, můžeš ho zkusit, a&nbsp;pro ty jiné
barvy tu jsou číselné zápisy. Jak jinak, programátoři mají čísla rádi. Způsoby zadávání barev:

1.  **Slovně**: Barvu musíš zadávat anglickým názvem. Současné prohlížeče podporují
    [140 názvů barev](https://www.w3schools.com/colors/colors_names.asp).

2.  **RGB**: RGB znamená <span style="color:red">Red</span> - <span style="color:green">Green</span> -
    <span style="color:blue">Blue</span>. To, že se dá každá barva složit kombinací
    <span style="color:red">červené</span>, <span style="color:blue">modré</span> a
    <span style="color:green">zelené</span> barvy
    si už asi někde slyšela. Podivej se na ukázku a&nbsp;hned si řekneme více:

    ```css
    p {
      color: rgb(255, 255, 255);
    }
    h1 {
      color: rgb(100%, 100%, 100%);
    }
    ```

    V našem příkladu jsme zadali, že všechny odstavce (**p**) budou mít bílou barvu a&nbsp;stejně tak všechny nadpisy
    (**h1**) budou mít také bílou barvu. Obsah každé složky barvy můžeme vkládat pomocí procent, to je asi z příkladu
    zřejmé a&nbsp;pochopitelné. Ale co je za číslo **255**?

    Teď zase zpátky k matematice. Počítače pracují na principu **nul** a&nbsp;**jedniček**. Ano, týká se to i&nbsp;webových
    stránek. Pradávné počítače pracovaly s osmibitovými procesory, což zjednodušeně znamená 8 drátků, kam můžeme
    pouštět proud. Na každém drátku proud běží(1)/neběží(0). Tímto způsobem procesor umí pracovat s `2*2*2*2*2*2*2*2 = 2^8 = 256` hodnotami. Historicky se ustanovilo, že **8 bitů** bude jeden **bajt**. A obřím skokem, počítačoví
    inženýři prominou, se dostáváme k rgb.

    Matematiky a&nbsp;počítačové inženýry jsme odbyli, ale malíř by namítnul, že když smíchá
    <span style="color:red; font-weight: bold;">červenou</span>, <span style="color:green; font-weight: bold;">zelenou</span>
    a&nbsp;<span style="color:blue; font-weight: bold;">modrou</span> ve stejném poměru, tak dostane **černou**. Jak to
    , že jsme dostali bílou? Důvod je takový, že my
    nemícháme vodovky, ale světelné paprsky, které vytvářejí pixel. Takže když smícháš
    <span style="color:red; font-weight: bold;">červené</span>,
    <span style="color:green; font-weight: bold;">zelené</span> a&nbsp;
    <span style="color:blue; font-weight: bold;">modré</span> světlo dostaneš světlo...
    <span style="color:white; background-color: black">bílé</span>.

3.  **Hexadecimální zápis**: Zdál se ti předchozí výklad o rgb, bitech a&nbsp;bajtech složitý. Jsi ráda, že už trošku
    chápeš dvojkovou soustavu, tak věř, že to není všechno. Proč používat dvojkovou soustavu, když můžeme používat
    soustavu šestnáctkovou (hexadecimální). Proč by to někdo dělal? Programátoři jsou líní, to je často odpověd na
    takové otázky. Výklad číselných soustav je mimo rozsah tohoto kurzu více se dozvíte na
    [wikipedii](https://cs.wikipedia.org/wiki/%C5%A0estn%C3%A1ctkov%C3%A1_soustava). A co ty barvy, jak je máme
    zapisovat?

    ```css
    p {
      color: rgb(255, 255, 255);
    }

    h1 {
      color: rgb(100%, 100%, 100%);
    }
    h2 {
      color: #ffffff;
    }
    ```

    Všechny barvy v příkladu jsou bílé. Hexadecimální zápis znovu využívá principu RGB. Znak `#` značí, že se jedná
    o hexadecimální zápis. První dvě číslice jsou <span style="color:red; font-weight: bold;">červená</span>,
    prostřední dvě číslice jsou <span style="color:green; font-weight: bold;">zelená</span> a&nbsp;poslední
    dvě číslice jsou <span style="color:blue; font-weight: bold;">modré</span>.

4.  **HSL**: HSL znamená hue (barva), saturation (nasycení) a&nbsp;lightness (světlost). Hue nabývá hodnot od 0 do 360 a
    obsahuje celou barevnou škálu. Saturation a&nbsp;lightness nabývají procentuálních hodnot 0 až 100.

Zápis běžných barev:

- <span style="color:red; font-weight: bold;">červená</span>: color:red, color:#ff0000, color:rgb(255, 0, 0), color:hsl(0, 100%, 50%)
- <span style="color:green; font-weight: bold;">zelená</span>: color:green, color:#008000, color:rgb(0, 128, 0),
  color:hsl(0, 100%, 50%)
- <span style="color:blue; font-weight: bold;">modrá</span>: color:blue, color:#0000ff, color:rgb(0, 0, 255),
  color:hsl(0, 100%, 50%)
- <span style="color:brown; font-weight: bold;">hnědá</span>: color:brown, color:#a52a2a, color:rgb(165, 42, 42),
  color:hsl(0, 59%, 41%)
- <span style="color:black; font-weight: bold;">černá</span>: color:black, color:#000000, color:rgb(0, 0, 0),
  color:hsl(0, 0%, 0%)
- <span style="color:pink; font-weight: bold;">růžová</span>: color:pink, color:#ffc0cb, color:rgb(255, 192, 203),
  color:hsl(350, 100%, 88%)

> [note] **Color picker**  
> Teď už víš, jak zapisovat barvy a&nbsp;co ty čísla a&nbsp;písmena znamenají. Nicméně dneska už nikdo neskládá barvy pomocí
> nějakých hodnot od oka, ale existují nástroje na výběr barev. Zkus googlit **color picker**. Samotný google má
> aplikaci na výběr barev a&nbsp;měl by to být tvůj první výsledek vyhledávání.

**background-color**  
V příkladech ses setkala s vlastností `color`, která danému tagu říká, jakou barvu má použít. Ve většině případů je to
barva textu. Pokud chceš změnit barvu pozadí, tak použij vlastnost `background-color`:

```css
p {
  color: rgb(255, 0, 0);
  background-color: yellow;
}
```

## Text

Když se snažíš napsat nějaký dokument v textovém procesoru, tak nejčastěji budeš formátovat samotný text (velikost,
samotné písmo, zvýraznění textu atd.). Všechny tyto vlastnosti mají v CSS jméno a&nbsp;můžeme je libovolně konfigurovat.
Vlastnosti textu v dokumentaci CSS nalezneš pod těmito prefixy: `font-`, `text-`, `letter-`. Tady si ukážeme ty
nejčastější:

- **font-family**: určuje samotnou sadu písma (<span style="font-family:Arial">Arial</span>,
  <span style="font-family:Verdana">Verdana</span>, <span style="font-family:Comic Sans MS;">Comic Sans MS</span>):

  ```css
  body {
    font-family: Comic Sans MS, serif;
  }
  ```

- **font-size**: velikost písma (<span style="font-size:8px">8px</span>, <span style="font-size:12px">12px</span>,
  <span style="font-size:24px">24px</span>):
  ```css
  body {
    font-size: 24px;
  }
  ```
- **font-weight**: tloušťka písma (<span style="font-weight:bold">bold</span>, <span style="font-weight:bolder">bolder
  </span>, <span style="font-weight:lighter">lighter</span>):
  ```css
  body {
    font-weight: bold;
  }
  ```
- **font-style**: styl písma (<span style="font-style:italic">italic</span>, <span style="font-style:oblique">oblique
  </span>, <span style="font-style:normal">normal</span>):
  ```css
  body {
    font-style: italic;
  }
  ```
- **font-variant**: označuje kapitálky (<span style="font-variant:small-caps">small-caps</span>):
  ```css
  body {
    font-variant: small-caps;
  }
  ```
- **text-transform**: řídí velikost písmen (malé/velké) (<span style="text-transform:uppercase">uppercase</span>,
  <span style="text-transform:lowercase">lowercase</span>, <span style="text-transform:capitalize">capitalize</span>):
  ```css
  body {
    text-transform: uppercase;
  }
  ```
- **text-decoration**: nadtržení, podtržení a&nbsp;přeškrtnutí (<span style="text-decoration:overline">overline</span>,
  <span style="text-decoration:underline">underline</span>, <span style="text-decoration:line-through">line-through
  </span>):
  ```css
  body {
    text-decoration: underline;
  }
  ```
- **text-align**: horizontální zarovnání textu (vlevo, na střed, vpravo, do bloku)

  ```css
  body {
    text-align: right;
  }
  ```

    <!-- <div style="text-align:right">right</div>      
    <div style="text-align:center">center</div>
    <div style="text-align:left">left</div>
    <br> -->
    <!-- <div style="text-align:justify;"><span style="font-weight:bold">justify:</span> Lorem ipsum dolor sit amet,
     consectetuer adipiscing elit. Aliquam in lorem sit amet leo accumsan lacinia. Fusce nibh. Nulla est.
      Nullam at arcu a&nbsp;est sollicitudin euismod. Praesent id justo in neque elementum ultrices. Aliquam erat volutpat.
       Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        Maecenas aliquet accumsan leo. In sem justo, commodo ut, suscipit at, pharetra vitae, orci. Nullam eget nisl.
         Aliquam id dolor. Nulla non lectus sed nisl molestie malesuada. Donec quis nibh at felis congue commodo.
          Curabitur ligula sapien, pulvinar a&nbsp;vestibulum quis, facilisis vel sapien. </div> -->

  ```css
  body {
    text-align: justify;    /* do bloku
  }
  ```

- **text-indent**: odsazení textu
    <!-- <div style="text-indent:50px;"> Lorem ipsum dolor sit amet,
     consectetuer adipiscing elit. Aliquam in lorem sit amet leo accumsan lacinia. Fusce nibh. Nulla est.
      Nullam at arcu a&nbsp;est sollicitudin euismod. Praesent id justo in neque elementum ultrices. Aliquam erat volutpat.
       Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        Maecenas aliquet accumsan leo. In sem justo, commodo ut, suscipit at, pharetra vitae, orci. Nullam eget nisl.
         Aliquam id dolor. Nulla non lectus sed nisl molestie malesuada. Donec quis nibh at felis congue commodo.
          Curabitur ligula sapien, pulvinar a&nbsp;vestibulum quis, facilisis vel sapien. </div> -->

  ```css
  p {
    text-indent: 50px;
  }
  ```

- **letter-spacing**: mezery mezi písmeny
    <!-- <div style="letter-spacing:3px;"> Lorem ipsum dolor sit amet,
     consectetuer adipiscing elit. Aliquam in lorem sit amet leo accumsan lacinia. Fusce nibh. Nulla est.
      Nullam at arcu a&nbsp;est sollicitudin euismod. Praesent id justo in neque elementum ultrices. Aliquam erat volutpat.
       Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        Maecenas aliquet accumsan leo. In sem justo, commodo ut, suscipit at, pharetra vitae, orci. Nullam eget nisl.
         Aliquam id dolor. Nulla non lectus sed nisl molestie malesuada. Donec quis nibh at felis congue commodo.
          Curabitur ligula sapien, pulvinar a&nbsp;vestibulum quis, facilisis vel sapien. </div> -->

  ```css
  p {
    letter-spacing: 3px;
  }
  ```

- **word-spacing**: mezery mezi slovy
    <!-- <div style="word-spacing:2em;">
     Lorem ipsum dolor sit amet,
     consectetuer adipiscing elit. Aliquam in lorem sit amet leo accumsan lacinia. Fusce nibh. Nulla est.
      Nullam at arcu a&nbsp;est sollicitudin euismod. Praesent id justo in neque elementum ultrices. Aliquam erat volutpat.
       Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        Maecenas aliquet accumsan leo. In sem justo, commodo ut, suscipit at, pharetra vitae, orci. Nullam eget nisl.
         Aliquam id dolor. Nulla non lectus sed nisl molestie malesuada. Donec quis nibh at felis congue commodo.
          Curabitur ligula sapien, pulvinar a&nbsp;vestibulum quis, facilisis vel sapien. </div> -->

  ```css
  p {
    word-spacing: 2em;
  }
  ```

- **line-height**: velikost řádku
    <!-- <div style="line-height:5.0;"> Lorem ipsum dolor sit amet,
     consectetuer adipiscing elit. Aliquam in lorem sit amet leo accumsan lacinia. Fusce nibh. Nulla est.
      Nullam at arcu a&nbsp;est sollicitudin euismod. Praesent id justo in neque elementum ultrices. Aliquam erat volutpat.
       Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        Maecenas aliquet accumsan leo. In sem justo, commodo ut, suscipit at, pharetra vitae, orci. Nullam eget nisl.
         Aliquam id dolor. Nulla non lectus sed nisl molestie malesuada. Donec quis nibh at felis congue commodo.
          Curabitur ligula sapien, pulvinar a&nbsp;vestibulum quis, facilisis vel sapien. </div> -->

  ```css
  p {
    line-height: 5;
  }
  ```

## Krabicový model - okraje

CSS nahlíží na každý element jako na krabici (v originále **box model**). Zde bych
upozornila, že ve skutečnosti jsou to obdélníky - pořád jsme ve 2D prostoru, které jsou definované okolo každého
elementu. S vysvětlením nám pomůže obrázek.

![krabicový-model](static/css_box_model_chrome.png)

Co jednotlivé pojmy znamenají?:

- **padding**: vnitřní okraj k ohraničení (border)
- **border**: ohraničení
- **margin**: vnější okraj

Na příkladu to může vypadat takto:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Page Title</title>
    <style>
      h1 {
        font-size: 1.5em;
        background-color: #cccccc;
        margin: 20px;
        padding: 40px;
        border: 5px solid red;
      }
    </style>
  </head>
  <body>
    <h1>Nadpis</h1>
    <p>Odstavec</p>
  </body>
</html>
```

`margin` a&nbsp;`padding` se zadávají délkovými jednotkami. `border` je vlastnost, která spojuje tři vlastnosti dohromady
`border-width`, `border-style` a&nbsp;`border-color`. Hodnoty pro `border-style` jsou: _solid, dotted, dashed, double
, groove, ridge, inset, outset._

## Třídy a ID

**CSS Třída**:
Třída v CSS je jiná než v Pythonu, je to označení, které může být přiřazeno jednomu nebo více HTML elementům. Třídy umožňují skupinování a sdílení stejných stylů mezi různými elementy na stránce. Přidává se do HTML kódu pomocí atributu class. A ve stylesheetu je před názvem třídy tečka `.`, abychom ji odlišili od názvu HTML tagu.

```html
<div class="moje-trida">Obsah s třídou</div>
```

```css
.moje-trida {
  color: blue;
  font-size: 16px;
}
```

**CSS ID**:
ID v CSS je jedinečné označení, které může být přiřazeno jednomu konkrétnímu HTML elementu na stránce. ID slouží k jednoznačné identifikaci daného elementu a umožňuje přiřazení specifických stylů nebo manipulaci s tímto konkrétním prvkem. Přidává se do HTML kódu pomocí atributu id. Je důležité si uvědomit, že každý ID by měl být na stránce unikátní.
Při stylování přidáme před název id křížek `#`, abychom daný element odlišili od ostatních prvků.

```html
<p id="muj-id">Text s ID</p>
```

```css
#muj-id {
  text-align: center;
  font-weight: bold;
}
```

## Pak se ještě může hodit vědět, jak v CSS napsat komentář:

```
/* takhle */
```

## Praktické cvičení

Nastylujte si svoji stránku.

- obarvěte nadpis jinou barvou písma,
- obalte nadpis do jinak barevného podkladu
- zarovnejte obrázek na prostředek
- zarovnejte text postupu do bloku
- popusťte uzdu fantazii ;-)

## Závěr

V této hodině jsme nechtěli a&nbsp;ani nemohli obsáhnout všechny aspekty a&nbsp;zákoutí HTML a&nbsp;CSS a&nbsp;už vůbec ne celého
webového vývoje. Cílem bylo seznámit tě s principy, které teď už ovládáš a&nbsp;můžeš se pokročilá témata sama doučit.
Složité webové stránky se neobejdou bez JavaScriptu a&nbsp;serveru (backendu). Nicméně osobní webovou prezentaci si
dokážeš udělat právě jenom s&nbsp;HTML a&nbsp;CSS.

Syntaxi CSS lze zapisovat i tzv. **pythonic way**. Zkus se podívat na CSS preprocesor [Stylus](http://stylus-lang.com/).

Spoustu užitečných informací o webovým vývoji nalezneš na stránkách [w3school.com](https://www.w3schools.com/)
případně [mozilla developer](https://developer.mozilla.org/).

Na stránkách w3school nalezneš i&nbsp;sekci [How To](https://www.w3schools.com/howto/default.asp) (jak na to), kde je
obrovská databáze veškerých webových "vychytávek".
