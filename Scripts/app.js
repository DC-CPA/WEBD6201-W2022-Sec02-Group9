//IIFE -- Imediately invoked function expression
// aka - anonymously self executing function
(function()
{
    function Start()
    {
        console.log("App Started!");
    }

    window.addEventListener("load", Start);

}())();