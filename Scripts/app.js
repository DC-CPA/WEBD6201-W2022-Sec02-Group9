//IIFE -- Imediately invoked function expression
// aka - anonymously self executing function
/** app.js
 *  @authors    Katherine Bellman, Russell Waring
 *  @since      2022.02.07
 *  @version    1
 *              JavaScript file for injecting behaviour into our website.
 */
// IIFE -- Immediately Invoked Function Expression
// AKA -- Anonymous Self-Executing Function
(function()
{
    

    function DisplayHomePage()
    {
        // Name of button and id are same... this is a naming convention. Button is actually an 'html element'
        console.log("Home Page");
        
        
        //Displayed content
        let TextHero = 'As  students of Durham College\'s Computer Programming and Analysis Program. \n We were moulded into developers who put our clients needs first.\n Check out out software development services to get a taste of what we can do for you.\n';
        let AboutUsButton = document.getElementById("AboutUsButton");
        AboutUsButton.addEventListener("click", function()
        {
            location.href = "about.html";
        });

        let CodeHeroImage = '<img id="CodeHeroImage" class="img-fluid" src="../Assets/hero_image_code.png"/>'


        //Get access to div container for insertion
        let DocumentBodyInsert = document.body;
        let MainDivContainer = document.getElementsByTagName("main")[0];
        
        //Create container for Hero content
        let HeroParagraph = document.createElement('p');
        let HeroArticleContainer = document.createElement("article");

        //Page Hero image
        let HeroImage = document.createElement("img");

        //setting attributes of created elements
        HeroParagraph.setAttribute("id","HeroParagraph");
        HeroParagraph.setAttribute("class", "mt-3");
        HeroParagraph.textContent = TextHero;

        HeroArticleContainer.setAttribute("class", "container");
        
        HeroArticleContainer.innerHTML = HeroParagraph;
        MainDivContainer.appendChild(HeroArticleContainer);
        DocumentBodyInsert.a




    }

    function DisplayProjectsPage()
    {
        console.log("Projects Page");



    }

    function DisplayServicesPage()
    {
        console.log("Services Page");
    }

    function DisplayAboutPage()
    {
        console.log("About Page");
    }

    function DisplayContactPage()
    {
        console.log("Contact Page");
    }


    // named function option
    function Start() 
    {
        console.log("App Started!");

         //pop in the favicon
        AddToHead();
        //Change the navagation text
        changeNav();

        switch(document.title)
        {
            case "Home":
                DisplayHomePage();
                break;
            case "Projects":
                DisplayProjectsPage();
                break;
            case "Services":
                DisplayServicesPage();
                break;
            case "About Us":
                DisplayAboutPage();
                break;
            case "Contact Us":
                DisplayContactPage();
                break;
        }        
    }

    // Creates, sets  favicon to 
    function AddToHead()
    {
        console.log("favicon appended");
        // website favicon attribute setting
        $('head').append('<link rel="shortcut icon" type="image/svg" href="../Assets/site_icon_fas_user-secret.svg">');
    }

    function changeNav()
    {
        console.log('nav: "Products" changed to "Projects"');
        let navBarTarget = document.body.getElementsByClassName("nav-item")[1];
        let insertText  = document.createTextNode('<a class="nav-link" href="./products.html"><i class="fas fa-th"></i> Project </a>');
        navBarTarget.innerHTML = insertText.textContent;
        console.log(navBarTarget);
    }

    // Event listener for hooking into the Start function
    window.addEventListener("load", Start); 


})(); 