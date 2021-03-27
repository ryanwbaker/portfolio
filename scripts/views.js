/* Global Vars */
var scrollToTopBtn = document.querySelector(".scrollToTopBtn"); // Scroll button
var postElement = document.getElementById('project-cards-container'); // where posts are inserted
var allButton = document.getElementById('filter-all');
var portfolioNavButton = document.getElementById('portfolio-nav');
var aboutNavButton = document.getElementById('about-nav');
var contactNavButton = document.getElementById('contact-nav');
var projectsButton = document.getElementById('filter-projects');
var reflectionsButton = document.getElementById('filter-reflections');
var buttonContainer = document.getElementById('pagination-container');
var postContainer = document.getElementById('full-post-container');
var projectsContainer = document.getElementById('projects');
var aboutContainer = document.getElementById('about');
var contactContainer = document.getElementById('contact');

var postsPerPage = 6;
var activePage = 1;
var numPages = Math.ceil(blogdata.length/postsPerPage);
var activePosts = [...blogdata];

/* Sidebar */
function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("myOverlay").style.display = "block";
}
 
function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";
}

/* Scroll Button */
document.addEventListener("scroll", handleScroll);

function handleScroll() {
  var scrollableHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var GOLDEN_RATIO = 0.2;

  if ((document.documentElement.scrollTop / scrollableHeight ) > GOLDEN_RATIO) {
    //show button
    scrollToTopBtn.style.display = "block";
  } else {
    //hide button
    scrollToTopBtn.style.display = "none";
  }
}

scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


/* Main States
 * States: Portfolio, About, Contact, or Blog Post 
*/

const selectMainState = (state='portfolio') => {
    location.hash = state;
    w3_close();
    renderMainState();
}

const renderMainState = () => {
    var state;
    if (location.hash == ""){
        state = "portfolio"
        location.hash = "portfolio"
    }
    else {
        state = location.hash.slice(1);
    }

    if(state == 'portfolio'){
        projectsContainer.style.display='block';
        aboutContainer.style.display='none';
        contactContainer.style.display='none';
        postContainer.style.display='none';

        portfolioNavButton.classList.add('w3-text-teal')
        aboutNavButton.classList.remove('w3-text-teal')
        contactNavButton.classList.remove('w3-text-teal')

        updatePosts('ALL')
        activePage = 1;
        renderPosts();
    }
    else if(state == 'about'){
        projectsContainer.style.display='none';
        aboutContainer.style.display='block';
        contactContainer.style.display='none';
        postContainer.style.display='none';

        portfolioNavButton.classList.remove('w3-text-teal')
        aboutNavButton.classList.add('w3-text-teal')
        contactNavButton.classList.remove('w3-text-teal')
    }
    else if(state == 'contact'){
        projectsContainer.style.display='none';
        aboutContainer.style.display='none';
        contactContainer.style.display='block';
        postContainer.style.display='none';

        portfolioNavButton.classList.remove('w3-text-teal')
        aboutNavButton.classList.remove('w3-text-teal')
        contactNavButton.classList.add('w3-text-teal')
    }

    //render post
    else{
        portfolioNavButton.classList.add("w3-text-teal");
        projectsContainer.style.display='none';
        aboutNavButton.classList.remove("w3-text-teal");
        contactNavButton.classList.remove("w3-text-teal");
        aboutContainer.style.display='none';
        contactContainer.style.display='none';

        postContainer.style.display='block';
        $('#blog-content').load(`posts/${state}.html`, (err)=>{
            console.log(err)
            // alert('Post not found! Redirecting to main portfolio.');
            // selectMainState('portfolio');
        });
        
    }
    
}


/* Render Blog States
 * States: All, Projects, Reflections 
*/

const getPage = (pageId) =>{
    var pageNum = parseInt(pageId.slice(12));
    activePage = pageNum;
    renderPosts();
}

const nextPage = () => {
    if (activePage + 1 <= numPages){
        activePage++;
        renderPosts();
    }
}

const prevPage = () => {
    if (activePage - 1 >= 1){
        activePage--;
        console.log(activePage);
        renderPosts();
    }
}

const renderButtons = ()=>{
    str = ''
    buttonContainer.innerHTML = '';

    // for 5 page buttons
    var startPage = (activePage - 4) > 1 ? (activePage - 4) : 1;
    var endPage = (startPage + 4) > numPages ? numPages : (startPage + 4);
    
    (activePage == 1) ? str=str : str = str + `<a id='page-left' class="w3-bar-item w3-button w3-hover-black" onclick="prevPage()">«</a>`
    for(i = startPage; i <= endPage; i++){
        str = str + `<a id='page-button-${i}' class="w3-bar-item w3-button w3-hover-black" onclick="getPage(this.id)">${i}</a>`
    }
    (activePage == numPages) ? str=str : str = str + `<a id='page-right' class="w3-bar-item w3-button w3-hover-black" onclick="nextPage()">»</a>`

    buttonContainer.innerHTML = str;
    document.getElementById(`page-button-${activePage}`).classList.add('w3-dark-grey')
}

const renderPosts = ()=>{
    postElement.innerHTML='';
    var str = "";
    var startIndex = (activePage*postsPerPage) - postsPerPage;
    var endIndex = (activePage*postsPerPage) - 1;
    activePosts.forEach((el, index)=>{
        if((index >= startIndex) && (index <= endIndex)){
            str = str + `<div id='post-${el.id}'class="w3-third w3-container w3-margin-bottom blog-post" onclick="selectMainState('${el.id}')">
                            <img src="${el.img}" alt="Norway" style="width:100%" class="w3-hover-opacity">
                            <div class="w3-container w3-white">
                                <p><span class="post-title"><b>${el.title}</b></span><br>${el.type}<br>${el.date}<hr>${el.desc}</p>
                            </div> 
                        </div>`
        }
    });
    postElement.innerHTML = str;
    renderButtons();
}

const updatePosts = (blogState) =>{
    activePosts.splice(0, activePosts.length);
    if (blogState == 'ALL'){
        allButton.classList.remove('w3-white')
        allButton.classList.add('w3-black')
        projectsButton.classList.remove('w3-black')
        projectsButton.classList.add('w3-white')
        reflectionsButton.classList.remove('w3-black')
        reflectionsButton.classList.add('w3-white')
    }
    else if (blogState == 'Projects'){
        allButton.classList.remove('w3-black')
        allButton.classList.add('w3-white')
        projectsButton.classList.remove('w3-white')
        projectsButton.classList.add('w3-black')
        reflectionsButton.classList.remove('w3-black')
        reflectionsButton.classList.add('w3-white')
    }
    else {
        allButton.classList.remove('w3-black')
        allButton.classList.add('w3-white')
        projectsButton.classList.remove('w3-black')
        projectsButton.classList.add('w3-white')
        reflectionsButton.classList.remove('w3-white')
        reflectionsButton.classList.add('w3-black')
    }
    blogdata.forEach((el)=>{
        if ((blogState == 'ALL' || blogState == 'Projects') && el.type == 'Project'){
            activePosts.push(el)
        }
        else if ((blogState == 'ALL' || blogState == 'Reflections') && el.type == 'Reflection'){
            activePosts.push(el)
        }
    });
    numPages = Math.ceil(activePosts.length/postsPerPage);
    activePage = 1;
    renderPosts();
}


