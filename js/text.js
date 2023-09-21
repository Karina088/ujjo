const text = ["HELLO, I’M LAUREN AND AS A LIFELONG ADVENTUROUS EATER, I’VE TRIED A LOT OF CRAZY THINGS, BUT I NEVER THOUGHT HOT SAUCE IN COFFEE WAS A SANE OPTION UNTIL A FRIEND DARED ME TO TRY IT.", "<br>", "<br>", "AND IT SUCKED.", "<br>",  "<br>", "BUT I WONDERED IF THERE WAS A WAY TO ADD SPICE TO MY COFFEE. WHEN THERE WAS NO EASY SOLUTION, UJJO WAS BORN.", "<br>",  "<br>", "UJJO (OOO-JOE): THE WORD FOR “FIRE” IN KONKANI, SPOKEN ON THE WEST COAST OF INDIA, IS AN HOMAGE AND A LOVE LETTER TO MY DAD, AN INDIAN IMMIGRANT WHO INSTILLED A FIRE IN MY PALATE – AND MY HEART – FROM THE VERY BEGINNING."];

let line = 0;
let count = 0;
let result = "";

function typeLine() {
    let interval = setTimeout(()=>{
        result += text[line][count];
        document.querySelector(".typing").innerHTML = result + "|";
        count++;
        if (count >= text[line].length) {
            count = 0;
            line++;
            if (line == text.length) {
                clearTimeout(interval);
                document.querySelector(".typing").innerHTML = result;
                return true;
            }
        }
        typeLine();
    }
    , 50);
}
typeLine();