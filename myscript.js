let imgArr = [
    `consegna/img/01.jpg`,
    `consegna/img/02.jpg`,     
    `consegna/img/03.jpg`,
    `consegna/img/04.jpg`,
    `consegna/img/05.jpg`
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
]

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ulla',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ulla',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam',
]

let contenutoRowPrinc = '';
let contenutoRowSec = '';



for(let ii=0; ii < imgArr.length; ii++){
    contenutoRowPrinc +=`
    <div class=" myheight d_mynone" id="item-${ii+1}">
        <img id="img-active" class="item" src="${imgArr[ii]}"></img>     
        <div class="position-absolute text-white" id="title"><h3> ${title [ii]} </h3><p> ${text [ii]} </p> </div>
    </div>`;
}

document.getElementById("img_principale").innerHTML = contenutoRowPrinc ;


for(let index=0; index< imgArr.length; index++){
    contenutoRowSec +=`
    <div>
    <img id="img-active" class="item mystyle img-fluid" src="${imgArr[index]}"></img>
    </div>`;
}

document.getElementById("img_sec").innerHTML = contenutoRowSec;

document.getElementById("item-1").classList.add("d-block");
