const pImage = document.querySelector('#profile_pic');
const pName = document.querySelector('#pName');
const profession = document.querySelector('#profession');
const desc = document.querySelector('#description');
const surpriseBtn = document.querySelector('#random');

const profiles = [
    {
        p_name: "Anna Jhonson",
        profile: "WEB DESIGNER",
        description: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
        img: "./download (1).jfif"
    }
    ,
    {
        p_name: "Peter Jones",
        profile: "INTERN",
        description: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
        img: "./download.jfif"
    }
    ,
    {
        p_name: "Bill Anderson",
        profile: "THE BOSS",
        description: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic.",
        img: "./images.jfif"
    }
    ,
    {
        p_name: "Susan Smith",
        profile: "WEB DEVELOPER",
        description: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
        img: "./images (2).jfif"
    }
];

let index = 0;

const leftArrow = document.querySelector('#goLeft');
const rightArrow = document.querySelector('#goRight');

leftArrow.addEventListener('click',function(){
    index = (index==0) ? profiles.length-1 : --index;
    display(profiles[index]);
});

rightArrow.addEventListener('click',function(){
    index = (index+1)%profiles.length;
    display(profiles[index]);
});

function display(ob){
    pImage.src = ob.img;
    pName.textContent = ob.p_name;
    profession.textContent = ob.profile;
    desc.textContent = ob.description;
}

surpriseBtn.addEventListener('click',function(){
    const rand = Math.floor(Math.random()*profiles.length);
    display(profiles[rand]);
});
