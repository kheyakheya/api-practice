const loadPhone=async(search,dataLim)=>{
    const url=`https://openapi.programming-hero.com/api/phones?search=${search}`;
  
    const res=await fetch(url);
    const data=await res.json();
    displayPhone(data.data,dataLim);
}

const displayPhone=(phones,dataLim)=>{
    
    if(dataLim && phones.length>8){
        phones=phones.slice(0,8);
        const showAll=document.getElementById("show-all");
        showAll.classList.remove("d-none");
    }
    else{
        const showAll=document.getElementById("show-all");
        showAll.classList.add("d-none");
    }
    const container=document.getElementById("phone-container");
    container.innerHTML="";
    // no phone message
    const noPhone=document.getElementById("no-phone-message");
    if(phones.length===0){
        noPhone.classList.remove("d-none");
    }
    else{
        noPhone.classList.add("d-none");
    }
//   display all phone
    phones.forEach(phone => {
        
         const div=document.createElement("div");
         div.classList.add("col");
         div.innerHTML=`
         
    <div class="card p-4">
      <img  src="${phone.image}" class="card-img-top img-fluid" alt="...">
      <div class="card-body">
        <h5 class="card-title">A${phone.phone_name}</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <button onclick=loadPhoneDetails('${phone.slug}') href="#" class="btn btn-primary">show etails</button>
       </div>
      
         `;
         container.appendChild(div);
        
    });
//  stop loader
toggleSpinner(false);
}
const processSearch=(dataLimit)=>{
    toggleSpinner(true);
    const searchField=document.getElementById("search-field");
    const searchText=searchField.value;
    loadPhone(searchText,dataLimit);
}
document.getElementById("btn-search").addEventListener('click', function (){
// start loader
    processSearch(10);
})


const toggleSpinner = isLoading=>{
    const loaderSection=document.getElementById("loader");
    if(isLoading){
        loaderSection.classList.remove("d-none");
    }
    else{
        loaderSection.classList.add("d-none");
    }
}
// load show all
document.getElementById("btn-show-all").addEventListener("click", function (){
    processSearch();
});
const loadPhoneDetails=>(){

}
// loadPhone ();
