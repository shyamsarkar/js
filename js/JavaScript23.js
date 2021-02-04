let randomBtn = document.getElementById("randomBtn");
let UserInput = document.getElementById("UserInput");
let TextArea = document.getElementById("TextArea");
let All_li = document.querySelectorAll("li");       //for all the li(=keyboard buttons)
let shiftl = document.getElementById('shiftl');
let shiftr = document.getElementById('shiftr');
let Space_btn = document.getElementById('Space_btn');
let AltBtn = document.getElementById('AltBtn');
let Text_number = 0;
let BackSpaceVar = 0;
let SuccessColor = "#28a745";
let DangerColor = "#dc3545";

randomBtn.addEventListener('click', function (){
    Text_number = 0;
    ClearUserInput();
    UserInput.focus();
    // TextArea.innerHTML = "";
    For_Text_only = allTextNote();
    RandomNumber = For_Text_only.length-Math.ceil(Math.random()*For_Text_only.length);
    if(RandomNumber<0){
        RandomNumber=-RandomNumber;
    }
    TextFile = For_Text_only[RandomNumber];

    SingleText = [];
    Array.from(TextFile).forEach(function (elemnt) {
        SingleText += elemnt;
    })

    // convert all button to Default color first
    ResetColor();

    // Converting Into Span Tag
    Full_Html_File = [];
    for (index = 0; index < SingleText.length; index++) {
        Full_Html_File += `<span id="${index}">` + SingleText[index] + `</span>`;
    }

    TextArea.innerHTML = Full_Html_File;           //Showing Text in Text Area

    // Change Button Name
    randomBtn.innerText = "Reload";

    // Taking Single Spelling From Text Area
    let T_A_T = TextArea.innerText[Text_number];
    Suggested_btn(T_A_T, SuccessColor);


    // User Typing
    UserInput.addEventListener('keydown', Typing);


})










/*         FUNCTION AREA          */

function Typing(PressedSpelling){
    // variable for text area spelling
    let Only_one_spelling = document.getElementById(Text_number);

    // convert all button to Default color first
    ResetColor();


    // For TextArea (Text color Green + Bold)
    if (TextArea.innerText[Text_number] == PressedSpelling.key) {
        if(PressedSpelling.key == " "){
            ClearUserInput();
            BackSpaceVar = 0
        }
        Only_one_spelling.style.color = "green";
        Only_one_spelling.style.fontWeight = "bold";
        Text_number += 1;
    }
    else if(PressedSpelling.key == "Backspace"){
        if(BackSpaceVar>0){
            BackSpaceVar -=1;
        }
        else if(Text_number>0){
            Text_number -= 1;
        }
        else{
            let Backspace = document.getElementById('Backspace');
            ResetColor();
            Backspace.style.backgroundColor = DangerColor;
        }
        Only_one_spelling = document.getElementById(Text_number);
        Only_one_spelling.style.color = "black";
        Only_one_spelling.style.fontWeight = "normal";
    }
    else{
        Suggested_btn(PressedSpelling.key, DangerColor)
        BackSpaceVar += 1;
    }
    T_A_T = TextArea.innerText[Text_number]
    if(T_A_T == undefined){
        randomBtn.click();
    }
    Suggested_btn(T_A_T, SuccessColor);



}


function Suggested_btn(TAT, ToChange) {
    // For keyboard Input color
    All_li.forEach(function (element) {
        if (element.children[2] != null || element.children[2] != undefined) {
            // if main text = pressed text
            if (TAT == element.children[2].innerText.toLowerCase()) {
                if(element.children[2].innerText == "\""){
                    Change_color(shiftl, ToChange);
                }
                if(element.children[2].innerText == "~"){
                    Change_color(shiftr, ToChange);
                }
                Change_color(element, ToChange);
            }
            // for capital Letter
            else if (TAT == element.children[2].innerText.toUpperCase()) {
                Change_color(element, ToChange);
                if (TAT == 'A' || TAT == 'S' || TAT == 'D' || TAT == 'F' || TAT == 'G' || TAT == 'Q' || TAT == 'W' || TAT == 'E' || TAT == 'R' || TAT == 'T' || TAT == 'B' || TAT == 'V' || TAT == 'C' || TAT == 'X' || TAT == 'Z') {
                    shiftr.style.backgroundColor = ToChange;
                    shiftr.style.bordercolor = ToChange;
                }
                else {
                    shiftl.style.backgroundColor = ToChange;
                    shiftl.style.bordercolor = ToChange;
                }
            }
            else if (TAT == " ") {
                Change_color(Space_btn, ToChange);
            }
            else if(TAT == ";" && element.children[2].innerText == ":"){
                Change_color(element, ToChange);
            }
            else if(TAT == ":" && TAT == element.children[2].innerText){
                Change_color(element, ToChange);
            }
            else if(TAT == "\\" && element.children[2].innerText =="\\"){
                Change_color(element, ToChange);
            }
            else if(TAT == "|" && element.children[2].innerText =="\\"){
                Change_color(element, ToChange);
                Change_color(shiftl, ToChange);
            }
            else if(TAT =="'" && element.children[2].innerText =="\""){
                Change_color(element, ToChange);
            }
            else if(TAT =="\`" && element.children[2].innerText =="~"){
                Change_color(element, ToChange);
            }
            else if(TAT =="Å"){
                Change_color(AltBtn);
                UserInput.value = "$0197";
            }
            else if(TAT == "_" && element.children[2].innerText=="-"){
                Change_color(element, ToChange);
                Change_color(shiftl, ToChange);
            }
            else if(TAT=="%" && element.children[2].innerText=="5"){
                Change_color(shiftr, ToChange);
                Change_color(element, ToChange);
            }
            else if(TAT=="?" && element.children[2].innerText=="/"){
                Change_color(shiftl, ToChange);
                Change_color(element, ToChange);
            }
            else if(TAT=='>' && element.children[2].innerText=="."){
                Change_color(shiftl, ToChange);
                Change_color(element, ToChange);
            }
            else if(TAT=='<' && element.children[2].innerText==","){
                Change_color(shiftl, ToChange);
                Change_color(element, ToChange);
            }
            else if(TAT=="'" && element.children[2].innerText=='"'){
                Change_color(shiftl, ToChange);
                Change_color(element, ToChange);
            }
            else if(TAT=="{" && element.children[2].innerText=="["){
                Change_color(shiftl, ToChange);
                Change_color(element, ToChange);
            }
            else if(TAT=="}" && element.children[2].innerText=="]"){
                Change_color(shiftl, ToChange);
                Change_color(element, ToChange);
            }
            else if(TAT=="+" && element.children[2].innerText=="="){
                Change_color(shiftl, ToChange);
                Change_color(element, ToChange);
            }
            else{}
        }
    })

}




/* All The Text will come In this function */

const allTextNote = () => {
    let FileContent = [`dj dj dj dj dk dk dk dk dl dl dl dl d; d; d; ;d ;d ;d ;d ld ld ld ld lj lj lj lj l; l; l; l; ;l ;l ;l ;l ls ls ls ls ;s ;s ;s ;s js js js js ds ds ds ds os os os os od od od od id id id id do do do do di di di di ej ej ej ej je je je je ek ek ek ek ie ie ie ie oe oe oe oe ei ei ei ei eo eo eo eo le le le le ;e ;e ;e ;e el el el el`,
    `e; e; e; e; dy dy dy dy lt lt lt lt yd yd yd yd ;t ;t ;t ;t tl tl tl tl tl,d ,d ,d ,d ,l ,l ,l ,l ,s ,s ,s ,s d, d, d, d, l, l, l, l, ;, ;, ;, ;, ,; ,; ,; ,; ,e ,e ,e ,e e, e, e, e, e, o, o, o, o, ,i ,i ,i ,i i, i, i, i, i,`,
    `io io io io oi oi oi oi il il il il ol ol ol ol md md md md dm dm dm dm me me me me dr dr dr dr rd rd rd rd mu mu mu mu mi mi mi mi mo mo mo mo om om om om um um um um dt dt dt dt td td td td yt yt yt yt ty ty ty ty`,
    `dp dp dp pd pd pd pd pe pe pe pe ep ep ep ep pr pr pr pr rp rp rp rp pt pt pt pt tp tp tp tp py py py py yp yp yp yp up up up up pu pu pu pu pi pi pi pi ip ip ip ip op op op op po po po po pl pl pl pl lp lp lp lp gd gd gd gd dg dg dg dg`,
    `xt xt xt xt tx tx tx tx ex ex ex ex xe xe xe xe xl xl xl xl lx lx lx lx x; x; x; x; ;x ;x ;x ;x jx jx jx jx xj xj xj xj dk dk dk dk lk lk lk lk ;k ;k ;k rk rk rk rk tk tk tk tk yk yk yk yk uk uk uk uk ik ik ik ik ok ok ok ok pk pk pk pk lk lk lk lk xk xk xk xk ;k ;k ;k ;k ok ok ok ok ik ik ik ik tk tk tk tk yk yk yk yk pk pk pk pk nk nk nk nk vk vk vk vk`,
    `vd vd vd vd dv dv dv dv ve ve ve ve ev ev ev ev iv iv iv iv vi vi vi vi vp vp vp vp pv pv pv pv vl vl vl vl lv lv lv lv vj vj vj vj jv jv jv jv v; v; v; v; ;v ;v ;v ;v bp bp bp bp pb pb pb pb`,
    `v vk b bZ m _ , ,s vks vkS va v% d [k x ?k p N t > V B M < .k r Fk n /k u i Q c Hk e ; j y o 'k "k l g {k = K J M+ <+`,
    `ge rqe dc tc le lc oj /kj yM+ ej lj jl ?kl Ql ou xu lu ju dy ty ij er /kj Hkj uHk dl dj deyk xeyk lerk Qluk lduk Qly jeu xje dje ljd gS Fkk gksxk jguk ejuk fl[kkuk Jh Hkkjr sls in feyrk ugha egku slk ysdj thou vius vius dgk fd vkSj tk,xk xqLlk crk;k lqcg mBdj eglwl gksrk rks ysfdu le; [ksy ikyu`,
    `dk'k vkjke dsoy ydMh owyu rhu pkj lqb etnwj djuk m/kj mcyuk mls diMk unh ikuh ckny >xM+k og ok;q;ku tks fy[kuk Hkhxk }kjk vfuok;Z vf/kfu;e mdlkuk ekur ds fy;s pkgrk grqEgkjs fy, gks ldrk gS ladsr dks okgu lekt vius iwtk djus dgrk cu xbZ gSAmldk ckn gksxk lj vkjke dPpk ydMh tc ;krk;kr Nr`,
    `ekjuk ekjuk ekjuk ekjuk dkVuk dkVuk dkVuk dkVuk j[kuk j[kuk j[kuk j[kuk pksaV igqapkuk	pksaV igqapkuk	pksaV igqapkuk	pksaV igqapkuk nkSjuk	nkSjuk	nkSjuk	nkSjuk i<+uk	i<+uk	i<+uk	i<+uk lkspuk	lkspuk	lkspuk	lkspuk i<+kuk	i<+kuk	i<+kuk	i<+kuk idM+uk	idM+uk	idM+uk	idM+uk [kjhnuk	[kjhnuk	[kjhnuk	[kjhnuk ykuk	ykuk	ykuk	ykuk yM+uk	yM+uk	yM+uk	yM+uk ckr djuk	ckr djuk	ckr djuk	ckr djuk pyuk	pyuk	pyuk	pyuk dguk	dguk	dguk	dguk fn[kuk	fn[kuk	fn[kuk	fn[kuk jksuk	jksuk	jksuk	jksuk cksyuk	cksyuk	cksyuk	cksyuk rksM+uk	rksM+uk	rksM+uk	rksM+uk mxuk	mxuk	mxuk	mxuk ysuk	ysuk	ysuk	ysuk nsuk	nsuk	nsuk	nsuk vkuk vkuk vkuk vkuk 'kw# djuk 'kw# djuk 'kw# djuk 'kw# djuk [kkuk [kkuk [kkuk [kkuk ns[kuk ns[kuk ns[kuk ns[kuk eglwwl djuk eglwwl djuk eglwwl djuk eglwwl djuk NksM+uk NksM+uk NksM+uk NksM+uk cukuk cukuk cukuk cukuk thruk thruk thruk thruk
        `];
    return FileContent;
}


// Reset All The Buttons Color

function ResetColor(){
    // convert all button to Default color first
    All_li.forEach(function (element) {
        element.style.backgroundColor = "#17a2b8";
        element.style.borderColor = "#17a2b8";
    })
}


// Change Color of buttons

function Change_color(Button_number, ToChange){
    Button_number.style.backgroundColor = ToChange;
    Button_number.style.bordercolor = ToChange;
}


// Clear User Input
function ClearUserInput(){
    UserInput = document.getElementById("UserInput");
    UserInput.value ="";
}