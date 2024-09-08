// let products = {
//     data: [{
//             productName: "Regular White T-Shirt",
//             category: "Topwear",
//             price: "30",
//             image: "https://www.snitch.co.in/cdn/shop/products/Amin4144.jpg?v=1661251916.jpg",
//         },
//         {
//             productName: "Beige Short Skirt",
//             category: "Bottomwear",
//             price: "49",
//             image: "https://static.zara.net/assets/public/e521/4c16/c4f44023bc37/f81c0b1a5bea/01300290443-p/01300290443-p.jpg?ts=1721224798459&w=824.jpg",
//         },
//         {
//             productName: "Sporty SmartWatch",
//             category: "Watch",
//             price: "99",
//             image: " https://www.fastrack.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw30b96182/images/Fastrack/Catalog/38102PP01_1.jpg?sw=600&sh=600.jpg",
//         },
//         {
//             productName: "Basic Knitted Top",
//             category: "Topwear",
//             price: "29",
//             image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWPhrX-_wlDRdV2007L2iyHw__4tXqH0vV2g&s.jpg",
//         },
//         {
//             productName: "Black Leather Jacket",
//             category: "Jacket",
//             price: "129",
//             image: "https://assets.ajio.com/medias/sys_master/root/20221104/hP9X/63653182f997ddfdbd591ecf/-473Wx593H-469291589-black-MODEL.jpg",
//         },
//         {
//             productName: "Stylish Pink Trousers",
//             category: "Bottomwear",
//             price: "89",
//             image: "https://pbs.twimg.com/media/EtDZOFaUcAIsgIH.jpg",
//         },
//         {
//             productName: "Brown Men's Jacket",
//             category: "Jacket",
//             price: "189",
//             image: "https://static.toiimg.com/photo/6993575.cms?imgsize=24153 ",
//         },
//         {
//             productName: "Comfy Gray Pants",
//             category: "Bottomwear",
//             price: "49",
//             image: " https://m.media-amazon.com/images/I/61IV4a3ZUnL._AC_UF1000,1000_QL80_.jpg.jpg",
//         },
//     ],
// };
let products = {data:[
    {productName: "tata altroz",
        category:'car',
        price:'8 lakhs',
        image:'https://stimg.cardekho.com/images/carexteriorimages/930x620/Tata/Punch/10681/1691392713058/front-left-side-47.jpg',
    },
    {productName: "tata punch",
        category:'car',
        price:'10 lakhs',
        image:'https://htcms-prod-images.s3.ap-south-1.amazonaws.com/htmobile1/tata_punch/images/colour_tata-punch_tropical-mist-with-black-roof_600x400.jpg'
    },
    {productName: "mahindra thar",
        category:'car',
        price:'10 lakhs',
        image:'https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Mahindra_Thar_Photoshoot_At_Perupalem_Beach_%28West_Godavari_District%2CAP%2CIndia_%29_Djdavid.jpg/1200px-Mahindra_Thar_Photoshoot_At_Perupalem_Beach_%28West_Godavari_District%2CAP%2CIndia_%29_Djdavid.jpg',
    },
    {productName: "royal enfield bullet",
     category: 'bike',
     price :'2 lakhs',   
     image:'https://www.bikes4sale.in/pictures/default/royal-enfield-classic-350-redditch-green/royal-enfield-classic-350-redditch-green-640.jpg',
    },
    {productName: "electra bullet",
        category: 'bike',
        price :'1.5 lakhs',   
        image:'https://upload.wikimedia.org/wikipedia/commons/6/6a/Royal_Enfield_Bullet_Electra_350%2C_pure_black_model_05.jpg',
       },
       {productName: "suzuki burgman",
        category: 'scooty',
        price :' 68000 thousand',   
        image:'https://static.toiimg.com/thumb/msid-65053435,width-1070,height-580,imgsize-116031,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg',
       },
       {productName: "suzuki acess 125",
        category: 'scooty',
        image:'https://static.autox.com/uploads/bikes/2023/03/suzuki-access-125.jpg',
        price:'94000 thousand',
       },
       {productName: "ola s1 pro",
        category: 'scooty',
        image:'https://www.otocapital.in/_next/image?url=https%3A%2F%2Fassets.otocapital.in%2Fproduction%2Famethyst-ola-s1-pro-image.png&w=1024&q=75',
        price:'1.43 lakhs',
       },
       {productName: "pulsar rs 200",
        category: 'bike',
        image:'  https://m.media-amazon.com/images/I/51Bwgp3URHL._SX425_.jpg',
        price:'1.8 lakhs',
       },



]}


//create card and append it products container
for (let i of products.data){
    let card  = document.createElement("div");

    card.classList.add("card", i.category, "hide");

    let imgContainer = document.createElement("div")
    imgContainer.classList.add("image-container");
    let image = document.createElement("img");
    image.setAttribute("src",i.image)
    imgContainer.appendChild(image)
    card.appendChild(imgContainer)

    let container = document.createElement('div')
    container.classList.add('product-name')
    let name = document.createElement('h2')
    name.innerText = i.productName
    container.appendChild(name)

    let price = document.createElement('h4');
    price.innerText = '₹' + i.price
    container.appendChild(price)

    card.appendChild(container)
    document.getElementById("products").appendChild(card);


}

// for (let i of products.data) {
//     //Create Card
//     let card = document.createElement("div");
//     //Card should have category and should stay hidden initially
//     card.classList.add("card", i.category, "hide");
//     //image div
//     let imgContainer = document.createElement("div");
//     imgContainer.classList.add("image-container");
//     //img tag
//     let image = document.createElement("img");
//     image.setAttribute("src", i.image);
//     imgContainer.appendChild(image);
//     card.appendChild(imgContainer);
//     //container
//     let container = document.createElement("div");
//     container.classList.add("container");
//     //product name
//     let name = document.createElement("h5");
//     name.classList.add("product-name");
//     name.innerText = i.productName.toUpperCase();
//     container.appendChild(name);
//     //price
//     let price = document.createElement("h6");
//     price.innerText = "$" + i.price;
//     container.appendChild(price);

//     card.appendChild(container);
//     document.getElementById("products").appendChild(card);
// }

function filterProduct(value){

    let buttons = document.querySelectorAll('.button-value');
    buttons.forEach((button) => {
        console.log(value)
        if(value.toUpperCase() === button.innerText.toUpperCase()){
            button.classList.add('active')
        }else{
            button.classList.remove('active')
        }
    });

    let elements = document.querySelectorAll(".card")

    elements.forEach((element) => {
        if(value === 'all'){
            element.classList.remove('hide');
    }else if(element.classList.contains(value)){
            element.classList.remove("hide")
    }else{
       element.classList.add("hide");
    }
})
}

document.getElementById("search").addEventListener("click", () => {
    //initializations
    let searchInput = document.getElementById("search-input").value.toLowerCase();
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".card");
  
    //loop through all elements
    elements.forEach((element, index) => {
      //check if text includes the search value
      if (element.innerText.includes(searchInput)) {
        //display matching card
        cards[index].classList.remove("hide");
      } else {
        //hide others
        cards[index].classList.add("hide");
      }
    });
  });




// function filterProduct(value) {
//     //Button class code
//     let buttons = document.querySelectorAll(".button-value");
//     buttons.forEach((button) => {
//       //check if value equals innerText
//       if (value.toUpperCase() == button.innerText.toUpperCase()) {
//         button.classList.add("active");
//       } else {
//         button.classList.remove("active");
//       }
//     });
  
//     //select all cards
//     let elements = document.querySelectorAll(".card");
//     //loop through all cards
//     elements.forEach((element) => {
//       //display all cards on 'all' button click
//       if (value == "all") {
//         element.classList.remove("hide");
//       }
//       else if(element.classList.contains(value)){
//                   element.classList.remove("hide")
//       }
//     //    else {
//     //     //Check if element contains category class
//     //     if (element.classList.contains(value)) {
//     //       //display element based on category
//     //       element.classList.remove("hide");
//     //     } 
   
//       else {
//           //hide other elements
//           element.classList.add("hide");
//         }
//       }
//     );
//   }
window.onload = () => {
    filterProduct('all')
};
