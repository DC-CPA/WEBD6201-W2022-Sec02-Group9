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


        let AboutUsButton = document.getElementById("AboutUsButton");
        AboutUsButton.addEventListener("click", function()
        {
            location.href = "about.html";
        });
    }

    function DisplayProductsPage()
    {
        console.log("Products Page");
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

        switch(document.title)
        {
            case "Home":
                DisplayHomePage();
                break;
            case "Products":
                DisplayProductsPage();
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
        $('head').append('<link rel="shortcut icon" type="image/svg" href="../Images/site_icon_fas_user-secret.svg">');
    }

    // Event listener for hooking into the Start function
    window.addEventListener("load", Start); 


})(); 