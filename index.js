const createNewBanner = (element_id, redirect_link, banner_img) => {
  var e = document.getElementById(element_id);
  var link = document.createElement("a"); // create the link
  var img = document.createElement("img");

  //set
  link.setAttribute("href", redirect_link);
  img.setAttribute("src", banner_img);

  //dom-orgenaizing
  link.appendChild(img); // append <img> to <a> element
  e.appendChild(link); // append <a> to <div> element

  //setting attributes
  img.setAttribute("height", "320px");
  img.setAttribute("width", "320px");

  
};


const saveData = () =>{
  var banners = [];
  const imges =  document.querySelectorAll("img");
  const hrefs =  document.querySelectorAll("a");

  var links = imges.length;
  for(var i =0; i<links;i++){
    var banner= {
      redirectLink: hrefs[i].href,
      bannerImg: imges[i].currentSrc
    }
    banners.push(banner)
  }
    localStorage.setItem("LinksImges", JSON.stringify(banners));  
}

const deleteData = () =>{
  localStorage.removeItem("LinksImges");  
  clearBox("banners-list");
}

const showBanners = (len) =>{
  var element_id = "banners-list";
  for(var i = 0; i< len; i++){
    createNewBanner(element_id,JSON.parse(localStorage.getItem("LinksImges"))[i].redirectLink,JSON.parse(localStorage.getItem("LinksImges"))[i].bannerImg);
  }
}

const clearBox = (elementID) => {
  var div = document.getElementById(elementID);
    
  while(div.firstChild) {
      div.removeChild(div.firstChild);
  }
}


window.onload = (event) => {

  // show all the browswe's saved linkes
  var list = localStorage.getItem("LinksImges") ? showBanners(JSON.parse(localStorage.getItem("LinksImges")).length) : [];

  //event listeners
  document.getElementById("my-form").addEventListener("submit", function (event) {
      event.preventDefault();
      var element_id = "banners-list";
      var redirect_link = document.getElementById("RedirectLink").value;
      var banner_img = document.getElementById("BannerImgUrl").value;
      createNewBanner(element_id, redirect_link, banner_img);
    });


};



/*
div -> a -> img
*/
