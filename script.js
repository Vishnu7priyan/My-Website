var name = `

█▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀█
█░░╦─╦╔╗╦─╔╗╔╗╔╦╗╔╗░░█
█░░║║║╠─║─║─║║║║║╠─░░█
█░░╚╩╝╚╝╚╝╚╝╚╝╩─╩╚╝░░█
█▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄█

ls to know more :)  
`
function changeToHackerTheme() {
    // Select the elements you want to change colors for (e.g., all elements with text color)
    const elementsToChange = document.querySelectorAll('*');
  
    // Iterate through the selected elements and change their color to green
    elementsToChange.forEach((element) => {
      element.style.color = 'green';
    });
  }
function font(){
    var large_name = `
    ##     ## ####  ######  ##     ## ##    ## ##     ##     ########  ########  #### ##    ##    ###    ##    ## 
    ##     ##  ##  ##    ## ##     ## ###   ## ##     ##     ##     ## ##     ##  ##   ##  ##    ## ##   ###   ## 
    ##     ##  ##  ##       ##     ## ####  ## ##     ##     ##     ## ##     ##  ##    ####    ##   ##  ####  ## 
    ##     ##  ##   ######  ######### ## ## ## ##     ##     ########  ########   ##     ##    ##     ## ## ## ## 
     ##   ##   ##        ## ##     ## ##  #### ##     ##     ##        ##   ##    ##     ##    ######### ##  #### 
      ## ##    ##  ##    ## ##     ## ##   ### ##     ##     ##        ##    ##   ##     ##    ##     ## ##   ### 
       ###    ####  ######  ##     ## ##    ##  #######      ##        ##     ## ####    ##    ##     ## ##    ## 
    
                                    hi👨‍💻  welcome to my personal website! 
    `
    var small_name = 'vishnupriyan'
    window.addEventListener('DOMContentLoaded', function () {
        // Detect screen width and perform actions accordingly
        const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    
        if (screenWidth >= 768) {
            return large_name;
        }
        else{
            return small_name;
        }
    });
}
