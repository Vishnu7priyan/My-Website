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

var profile = false;
var password = false;
var home = true;
$(document).ready(function () {
    $('#terminal').terminal(function (command , term ) {
        switch (command) {
            case 'ls':
                if(home == true){
                    term.echo(`[[;white;]profile/] \t`, { newline: false })
                    term.echo(`[[;#0ff;]pwd] \t`,{newline: false})
                    term.echo(`[[;white;]password/] \t`,{newline: false})
                    term.echo(`[[;#0ff;]banner] \t`,{newline: false})
                    term.echo(`[[;#0ff;]history]`)
                }
                else if(password==true){
                    term.echo('secret')
                }
                else if (profile == true){
                    term.echo(`[[;#0ff;]summary ] \t`,{newline: false})
                    term.echo(`[[;#0ff;]about] \t`,{newline: false})
                    term.echo(`[[;#0ff;]blog] \t`,{newline: false})
                    term.echo(`[[;#0ff;]other] \t`)
                }
                break
            
            case 'cd ..':
                case 'cd':
                if (home == true){
                    term.echo('you are already in home :)')
                }
                else{
                term.set_prompt('[[;white;]vishnu@terminal >> ]')
                home = true;
                password=false;
                profile=false;}
                break;    


            case 'cd password':
                if (home == true){
                    term.set_prompt('[[;white;]vishnu@terminal ~/password >> ]')
                password = true;
                home = false;
                profile = false;
                }
