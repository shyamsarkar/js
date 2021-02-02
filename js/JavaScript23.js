let randomBtn = document.getElementById("randomBtn");
let UserInput = document.getElementById("UserInput");
let TextArea = document.getElementById("TextArea");
let All_li = document.querySelectorAll("li");       //for all the li(=keyboard buttons)
let shiftl = document.getElementById('shiftl');
let shiftr = document.getElementById('shiftr');
let Space_btn = document.getElementById('Space_btn');
let AltBtn = document.getElementById('AltBtn');
let Text_number = 0;

randomBtn.addEventListener('click', function () {
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
    Suggested_btn(T_A_T);


    // User Typing
    UserInput.addEventListener('keypress', Typing);


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
        }
        Only_one_spelling.style.color = "green";
        Only_one_spelling.style.fontWeight = "bold";
        Text_number += 1;
    }
    T_A_T = TextArea.innerText[Text_number]
    Suggested_btn(T_A_T);

}


function Suggested_btn(TAT) {
    // For keyboard Input color
    All_li.forEach(function (element) {
        if (element.children[2] != null || element.children[2] != undefined) {
            // if main text = pressed text
            if (TAT == element.children[2].innerText.toLowerCase()) {
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
                Change_color(Space_btn);
            }
            else if(TAT == ";" && element.children[2].innerText == ":"){
                Change_color(element);
            }
            else if(TAT == ":" && TAT == element.children[2].innerText){
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
            else if(TAT =="Å"){
                Change_color(AltBtn);
                UserInput.value = "$0197";
            }
            else if(TAT == "_" && element.children[2].innerText=="-"){
                Change_color(element);
                Change_color(shiftl);
            }
            else if(TAT=="%" && element.children[2].innerText=="5"){
                Change_color(shiftr);
                Change_color(element);
            }
            else if(TAT=="?" && element.children[2].innerText=="/"){
                Change_color(shiftl);
                Change_color(element);
            }
            else if(TAT=='>' && element.children[2].innerText=="."){
                Change_color(shiftl);
                Change_color(element);
            }
            else if(TAT=='<' && element.children[2].innerText==","){
                Change_color(shiftl);
                Change_color(element);
            }
            else if(TAT=="'" && element.children[2].innerText=='"'){
                Change_color(shiftl);
                Change_color(element);
            }
            else if(TAT=="{" && element.children[2].innerText=="["){
                Change_color(shiftl);
                Change_color(element);
            }
            else if(TAT=="}" && element.children[2].innerText=="]"){
                Change_color(shiftl);
                Change_color(element);
            }
            else if(TAT=="+" && element.children[2].innerText=="="){
                Change_color(shiftl);
                Change_color(element);
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
    `v vk b bZ m Å _ , ,s vks vkS va v% d [k x ?k p N t > V B M < .k r Fk n /k u i Q c Hk e ; j y o 'k "k l g {k = K J M+ <+`,
    `uke 'koijh{kk djksM cka;s uhps gYdk d{kk eEeh diMk cukuk peMh 'kklu ikji= 'kgj fy, mdlkuk ugha dSls E;kuh fofo/k vkids ;ksX;rk fojks/k vuqnku m/kj dsoy esa vk'p;Z LFkkukUrj.k Fkk ls lsuk 'kCn vLlh djuk dDdk {kek bdkbZ mlds cktw os tywl dkyk vkB okWeu dzkdjh owyu djhc ge uhps fo/kku VekVj vfuok;Z esjs dwVuhfr v/;k; `,
    ` [kkuk ikuh I;klh o"kkZ U;k;ky; vk;dj E;k;Ww IykWoj jkLrk ns'k /kzqo NksVk nksigj vYier dkL; ij U;k;] lqj{kk vk'khokZn dDdh ,d unh 'kjhd Nr ,d vjc lkPNh Fkk: fLFkj xhyk cuk;k f'k"; cksyk NqvkNwr dSEil vk'khokZn dksbZ fdrus 'kjhj djHkj elkyk VsfyQksu chl lkS fy[kuk ukd [kq"d] fQj ipkl bZ'oj ikuh] laLFkk dksguh gksuk voSrfud oRl lHkh bu Bhd lkr v.kqce /kU;okn fdlds vuqPNsn fdLlk jLlh rd ?kj ihuk jLlh Hkh mij vkjke fgUnh O;olk; D;k vcrd vknr vf/kfu;e mn; cMk 'kkld yksx etnwjh] dGs'kh eU=h fof/k lksuk Hkkjh pkdw psgjk ckn njoktk ty mPp fnu `,
    `la?k tkuk vkuk vf/kdkj lkFk laj{kd twYe u;k U;k;k/kh'k pPpk NksVk /kkxk tc ;krk;kr dk'k yEck gFkkSMk nl Fks dPpk >kMw yYyk czksdsu Hka;dj nwjn'kZu vU; vki Iyklh i{kh cky esEuk LFkk;h ukS ns[kuk thHk vfuok;Z ckjg igys Hkkx Hkksjgs Lo;alsod vkfo"dkj lqb vxz i[rwu Nkrh I;kl dzekxr lj Fkh ckjhl] lkfgR; vPNk L;kgh ikap ,dkxzrk L;kgh ckny olh;r ?kfV;k osru dkSu lkeus 'kadj ;g fo/ks;d D;ksa xzg.k ,dkxz vkleku dqN gS Kkld loZlEefr fey tSlk pkj fMCck pkyhl nka;s izR;sd cw lkB Bhd `,
    `nwjHkk"k la'kks/ku fgLlk fu.kZ; /ku vkosnui= lqcg dku lR; cnu lykg in Hkh lc bZa/ku gkFk ys[kk gFksyh NksVk lQsn gekjk lw[kk tks yk[k nks ,sud ey; pquko og m/kj jktnwr ok;q;ku fdLls mi;ksx iqjkuk mu vf/kd lnk fctyh fny dDdh cgqr Hkk"kk b/kj laLdkj lwjt rhu lquk ds vkSj lwpuki= Hkhxk] /;ku >aMk ;q)dky jkr Js;l >xM+k x.krU= le; uCcs lhes.V fd J uolsuk cgqer vkns'k chtxf.kr ydMh nks 'krZ ?kfV;k jLlh ?kj [kjkc dgk gtkj vodk'k uk[kwu R;kxi= isV ysfdu gfFk;k X;kjg de vc`,
    `vxj czt fdjk;k okD; 'kd fMCck le; vaxwBh iw[rk fdLlk xzg ekU;] gksxk }kjk Hkfj;s rhl ljdkj v/;kns'k gfFk;kj dqygkMh N% la[;k rkjk yky vPNk mls FkaMk lkfj.kh dh gqDdk eSa nwj dGsg oS/k ;k vc x;k lR;k`];
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

function Change_color(Button_number){
    Button_number.style.backgroundColor = "#28a745";
    Button_number.style.bordercolor = "#28a745";
}


// Clear User Input
function ClearUserInput(){
    UserInput = document.getElementById("UserInput");
    UserInput.value ="";
}