let shiftl = document.getElementById('shiftl');
let shiftr = document.getElementById('shiftr');
let Space_btn = document.getElementById('Space_btn');
let All_li = document.querySelectorAll("li");       //for all the li(=keyboard buttons)
let Text_area = document.getElementById("Text_area");

let randomBtn = document.getElementById("randomBtn");       //Random button
let body_tag = document.querySelector("body");             // Body Tag
Return_pressed_spelling = "";                               //Pressed Button

// Event when clicked random Button

randomBtn.addEventListener('click', function () {
    Text_number = 0;
    Text_area.innerHTML = "";
    TextFile = allTextNote();           //function for Loading All Text
    SingleText = [];
    Array.from(TextFile).forEach(function (elemnt) {
        SingleText += elemnt;
    })
    
    
    // convert all button to Default color first
    ResetColor();
    


    // Showing All Text in Text Area
    Full_Html_File = [];
    for (index = 0; index < SingleText.length; index++) {
        Full_Html_File += `<span id="${index}">` + SingleText[index] + `</span>`;
    }
    Text_area.innerHTML = Full_Html_File;  //Showing Text in Text Area

    // Change Random Button Name into Reload
    randomBtn.innerText = "Reload";


    let T_A_T = Text_area.innerText[Text_number];
    Suggested_btn(T_A_T);

    //  For all pressed Key 
    body_tag.addEventListener('keypress', function (spelling) {
        // variable for text area spelling
        let Only_one_spelling = document.getElementById(Text_number);
        
        // convert all button to Default color first
        ResetColor();



        // For TextArea (Text color Green + Bold)
        if (Text_area.innerText[Text_number] == spelling.key) {
            Only_one_spelling.style.color = "green";
            Only_one_spelling.style.fontWeight = "bold";
            Text_number += 1;
        }
        T_A_T = Text_area.innerText[Text_number]
        Suggested_btn(T_A_T);


    })

})



const allTextNote = () => {
    let line1 = [`dj dj dj dj dk dk dk dk dl lt lt lt lt yd yd yd yd ;t ;t ;t ;t tl tl tl tl tl le le le ;e ;e ;e ;e el el el el e; e; e; e; dy dy dy dy`];
    let line2 = [`dl dl dl d; d; d; ;d ;d ;d ;d ld ld ld ld lj lj lj lj xt xt xt xt tx tx tx tx ex ex ex ex xe xe xe xe xl xl xl xl lx lx lx lx x; x; x; x; ;x ;x ;x ;x jx jx jx jx xj xj xj xj`];
    let line3 = [`l; l; l; l; ;l ;l ;l ;l ls ls ls ls ;s ;s ;s ;s js js dp dp dp pd pd pd pd pe pe pe pe ep ep ep ep pr pr pr pr rp rp rp rp pt pt pt pt tp tp tp tp py py py py yp yp yp yp up up up up pu pu pu pu pi pi pi pi ip ip ip ip op op op op po po po po pl pl pl pl lp lp lp lp gd gd gd gd dg dg dg dg`];
    let line4 = [`js js ds ds ds ds os os os os od od od od id id id id dk dk dk dk lk lk lk lk ;k ;k ;k rk rk rk rk tk tk tk tk yk yk yk yk uk uk uk uk ik ik ik ik ok ok ok ok pk pk pk pk`];
    let line5 = [`do do do do di di di di ej ej ej ej je je je je ek ek lk lk lk lk xk xk xk xk ;k ;k ;k ;k ok ok ok ok ik ik ik ik tk tk tk tk yk yk yk yk pk pk pk pk nk nk nk nk vk vk vk vk`];
    let line6 = [`ek ek ie ie ie ie oe oe oe oe ei ei ei ei eo eo eo eo le vd vd vd vd dv dv dv dv ve ve ve ve ev ev ev ev iv iv iv iv vi vi vi vi vp vp vp vp pv pv pv pv vl vl vl vl lv lv lv lv vj vj vj vj jv jv jv jv v; v; v; v; ;v ;v ;v ;v bp bp bp bp pb pb pb pb`];
    let line7 = [`,d ,d ,d ,d ,l ,l ,l ,l ,s ,s ,s ,s d, d, d, d, l, l, l, l, ;, ;, ;, ;, ,; ,; ,; ,; ,e ,e ,e ,e e, e, e, e, e, o, o, o, o, ,i ,i ,i ,i i, i, i, i, i,`];
    let line8 = [`io io io io oi oi oi oi il il il il ol ol ol ol md md md md dm dm dm dm me me me me dr dr dr dr rd rd rd rd mu mu mu mu mi mi mi mi mo mo mo mo om om om om um um um um dt dt dt dt td td td td yt yt yt yt ty ty ty ty`]
    let FileArray = [line1, line2, line3, line4, line5, line6, line7, line8];
    let FileContent = FileArray[Math.floor(Math.random()*FileArray.length)];
return FileContent;
}

function Suggested_btn(TAT) {
    // For keyboard Input color
    All_li.forEach(function (element) {
        if (element.children[2] != null || element.children[2] != undefined) {
            // if main text = pressed text
            if (TAT == element.children[2].innerText.toLowerCase()) {
                // element.style.backgroundColor = "#28a745";
                // element.style.bordercolor = "#28a745";
                if(element.children[2].innerText == "\""){
                    Change_color(shiftl);
                }
                if(element.children[2].innerText == "~"){
                    Change_color(shiftr);
                }
                Change_color(element);
            }
            // for capital Letter
            else if (TAT == element.children[2].innerText.toUpperCase()) {
                // element.style.backgroundColor = "#28a745";
                // element.style.bordercolor = "#28a745";
                Change_color(element);
                if (TAT == 'A' || TAT == 'S' || TAT == 'D' || TAT == 'F' || TAT == 'G' || TAT == 'Q' || TAT == 'W' || TAT == 'E' || TAT == 'R' || TAT == 'T' || TAT == 'B' || TAT == 'V' || TAT == 'C' || TAT == 'X' || TAT == 'Z') {
                    shiftr.style.backgroundColor = "#28a745";
                    shiftr.style.bordercolor = "#28a745";
                }
                else {
                    shiftl.style.backgroundColor = "#28a745";
                    shiftl.style.bordercolor = "#28a745";
                }
            }
            else if (TAT == " ") {
                // Space_btn.style.backgroundColor = "#28a745";
                // Space_btn.style.bordercolor = "#28a745";
                Change_color(Space_btn);
            }
            else if(TAT == ";" && element.children[2].innerText == ":"){
                // element.style.backgroundColor = "#28a745";
                // element.style.bordercolor = "#28a745";
                Change_color(element);
            }
            else if(TAT == ":" && TAT == element.children[2].innerText){
                // element.style.backgroundColor = "#28a745";
                // element.style.bordercolor = "#28a745";
                Change_color(element);
            }
            else if(TAT == "\\" && element.children[2].innerText =="\\"){
                Change_color(element);
            }
            else if(TAT == "|" && element.children[2].innerText =="\\"){
                Change_color(element);
                Change_color(shiftl);
            }
            else if(TAT =="'" && element.children[2].innerText =="\""){
                Change_color(element);
            }
            else if(TAT =="\`" && element.children[2].innerText =="~"){
                Change_color(element);
            }
            else{}
        }
    })

}


function ResetColor(){
    // convert all button to Default color first
    All_li.forEach(function (element) {
        element.style.backgroundColor = "#17a2b8";
        // element.style.backgroundColor = "#343a40";
        // element.style.backgroundColor = "#000";
    })
}

function Change_color(Button_number){
    Button_number.style.backgroundColor = "#28a745";
    Button_number.style.bordercolor = "#28a745";
}