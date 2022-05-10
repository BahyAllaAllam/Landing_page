/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active

// Get the sections in the page
const sections = document.getElementsByTagName("section");
// Get the ul element in the navbar
const navListUl = document.getElementById("navbar__list");

// A function to determine which element is in the viewport returns true or false
function elementInViewport(element) {
    
    // Getting the element position in the viewport
    const rect = element.getBoundingClientRect();
    
    // check if the element in the viewport
    if (rect.top >= 0 && (rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) || rect.height >= (window.innerHeight || document.documentElement.clientHeight)) && rect.top < (window.innerHeight || document.documentElement.clientHeight)){
        return (true);
    } else {
        return (false);
    };
    
};

// A function to create the links in the navbar
function createNavMenu(){
    
    // A link to scroll to top immediately 
    navListUl.innerHTML = '<li><a href= "#top" class = "menu__link" id = "active">Landing Page</a></li>';
    
    // A for loop to loop over the sections in the page
    for (const section of sections){
        
        // Creating the li element
        let listItem = document.createElement('li');
        
        // Add the li element *I just created in the previous step* to the ul element in the navbar  
        navListUl.appendChild (listItem);
        
        // Creating and adding anchor tag to the li element
        listItem.innerHTML = '<a class = "menu__link"></a>';
        
        // Get the anchor tag i just created 
        let navAnchor = listItem.firstElementChild;
        
        // Add the attribute *href* to the anchor tag 
        navAnchor.setAttribute("href", "#" + section.id);
        
        // Add the text content of the anchor tag
        navAnchor.textContent = section.dataset.nav;

        };
    
    };

// Using onscroll property an event that handle the scroll event targeting the window and assign it to function
window.onscroll = function(){
    
    // Get the anchors tag
    const anchors = document.querySelectorAll('nav a');
    
    // Loop over the sections in the page
    for(const section of sections){
        
        // Check if this section is having the active class or not 
        if (section.className === "your-active-class"){
            
            // Remove the active class if it having it
            section.removeAttribute("class")
        };
        
        // Using the previous function to check if this section in the viewport
        if (elementInViewport(section)){
            
            // Then add the active class to it
            section.setAttribute("class", "your-active-class");
            
            // Looping over the anchors tag
            for(const anchor of anchors){
                
                // Check if there any active anchor
                if(anchor.id === "active"){
                    
                    // Remove the highlight from the anchors if there is any   
                    anchor.removeAttribute("id");
                };
                
                // Check if the anchor is refers to the section in the viewport
                if (section.dataset.nav === anchor.innerHTML){
                    
                    // Then highlight the anchor tag in the nav
                    anchor.setAttribute("id", "active");
                };  
            };
        };
    };
};

// Calling the function create navbar menu
createNavMenu();
