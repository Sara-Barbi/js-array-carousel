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

for(let ii=0; ii<= imgArr.length; ii++){
    contenutoRowPrinc +=`
    <div class=" myheight">
        <img id="img-active" class="item" src="${imgArr[ii]}"></img>
    </div>`
}

document.getElementById("img_principale").innerHTML = contenutoRowPrinc;