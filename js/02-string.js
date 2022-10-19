/*
STRING - tekstas
reiksmes konstravimas:
- viengubos kabutes (')
- dvygubos kabutes (")
- bektikas/apostrofas (`)
Specialusis atvejis:
- jei tekste yra kabutes, jas norint padaryti ne komandiniu simboliu, o tekstiniu simboliu, galima ta kabute "eskeipinti" -> \
*/

console.log('2' + '2');
console.log(2 + 2);
console.log(2 + '2');
console.log('2' + 2);


const firstName = 'Petras';
console.log(firstName);

const lastName = "Petraitis";
console.log(lastName);

const fullName = firstName + ' ' + lastName;
console.log(fullName);

const kabutes = 'Cia tures buti 2 kabutes.';
console.log(kabutes);

const kabutes2 = 'Dvyguba kabute (").';
console.log(kabutes2);

const kabutes1 = "Vienguba kabute (').";
console.log(kabutes1);

// const kabutes12 = "Vienguba (') ir dvyguba (") kabutes .";
// console.log(kabutes12);

// const kabutes22 = 'Vienguba (') ir dvyguba (") kabutes .';
// console.log(kabutes22);

const kabute11 = "Vienguba (') ir" + ' dvyguba (") kabutes.';
console.log(kabute11);

const kabute22 = "Vienguba (') ir dvyguba (\") kabutes.";
console.log(kabute22);


const kabute33 = 'Vienguba (\') ir dvyguba (") kabutes.';
console.log(kabute33);

const kabute44 = 'Vienguba (\') ir dvyguba (\") kabutes.';
console.log(kabute33);

const multiline = 'AAAAAAAA\n\r\
bbbb';
console.log(multiline);

const HTML = '<header>\n\
                <img>\n\
                <nav>\n\
                    <a></a>\n\
                    <a></a>\n\
                    <a></a>\n\
                </nav>\n\
            </header>';
console.log(HTML);

const backtip = `Kabute.`;
console.log(backtip);

const backtip12 = `Vienguba (') ir dvyguba (") kabutes.`;
console.log(backtip12);

const backtip123 = `Vienguba ('), dvyguba (") ir backtip (\`) kabutes.`;
console.log(backtip123);

const HTML2 = `<header>
    <img>
    <nav>
        <a></a>
        <a></a>
        <a></a>
    </nav>
</header>`;

console.log(HTML2);

// Hi there, Chuck!
const username = 'Chuck';

const hi1 = 'Hi there, ' + username + '!';
console.log(hi1);

const hi2 = "Hi there, " + username + "!";
console.log(hi2);

const hi3 = `Hi there, ` + username + `!`;
console.log(hi3);

const hiBacktik = `Hi there, ${username}!`;
console.log(hiBacktik);

const n1 = 7;
const n2 = 5;
const sum = n1 + n2;

const sumStringKabute = n1 + ' + ' + n2 + ' = ' + sum;
console.log(sumStringKabute);

const sumStringKabute2 = n1 + ' + ' + n2 + ' = ' + n1 + n2;
console.log(sumStringKabute2);

const sumStringKabute3 = n1 + ' + ' + n2 + ' = ' + (n1 + n2);
console.log(sumStringKabute3);

const sumString = `${n1} + ${n2} = ${sum}`;
console.log(sumString);

const sumString2 = `${n1} + ${n2} = ${n1 + n2}`;
console.log(sumString2);