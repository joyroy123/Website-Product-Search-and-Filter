let products= {
    data: [
        {
            productName: "Regular White T-Shirt",
            category: "Topwear",
            price: "30",
            image: "whiteT-shirt.jfif",
        },
        {
            productName: "Beige Short Skirt",
            category: "Bottomwear",
            price: "49",
            image: "short-skirt.jfif",
        },
        {
            productName: "Sporty Smart Watch",
            category: "Watch",
            price: "99",
            image: "watch.jfif",
        },
        {
            productName: "Basic Knitted Top",
            category: "Topwear",
            price: "29",
            image: "top.jfif",
        },
        {
            productName: "Black Leather Jacket",
            category: "Jacket",
            price: "129",
            image: "jacket.jfif",
        },
        {
            productName: "Stylish Pink Trousers",
            category: "Bottomwear",
            price: "89",
            image: "trouser.jfif",
        },
        {
            productName: "Brown Men's Jacket",
            category: "Jacket",
            price: "189",
            image: "jacket1.jfif",
        },
        {
            productName: "Comfy Gray Pants",
            category: "Bottomwear",
            price: "49",
            image: "pant.jfif",
        },
    ],
};

for(let i of products.data){
    //create card
    let card = document.createElement("div");
    // card should have category and should stay hidden initially
    card.classList.add("card", i.category, "hide");
    // image div
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    // image tag
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
    // container
    let container =document.createElement("div");
    container.classList.add("container");
    //product name
    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerHTML= i.productName.toUpperCase();
    container.appendChild(name);
    // price
    let price = document.createElement("h6");
    price.classList.add("price");
    price.innerHTML="$" + i.price;
    container.appendChild(price);


    card.appendChild(container);
    document.getElementById("products").appendChild(card);
}
//parameter passed from button (Parametter same as category)
function filterProduct(value){
    //button class code
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach(button => {
        //check if value equals innerHTML
        if(value.toUpperCase() == button.innerHTML.toUpperCase()){
            button.classList.add("active");
        }
        else{
            button.classList.remove("active");
        }
    });

    // select all cards
    let elements = document.querySelectorAll(".card");
    //loop through all cards
    elements.forEach((element) => {
        // display all cards on 'All' button click
        if(value=="All"){
            element.classList.remove("hide");
        }else{
            // Check if a element contains category class
            if(element.classList.contains(value)){
                element.classList.remove("hide");
            } else{
                // hide other elements
                element.classList.add("hide");
            }
        }
    });
}

//Search button click
document.getElementById("search").addEventListener("click", () => {
    // initilizations
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".card");
    
    // loop through all elements
    elements.forEach((element,index) => {
        //check if text includes the search value
        if(element.innerHTML.includes(searchInput.toUpperCase())){
            //display matching card
            cards[index].classList.remove("hide");
        } else{
            //hide others
            cards[index].classList.add("hide");
        }
    })

});



//Initially display all products
window.onload = () =>{
    filterProduct("All");
}