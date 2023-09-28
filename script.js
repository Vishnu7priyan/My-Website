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
          else{
                    term.echo('Return to home using cd ..')
                }
                break;
            case 'cd profile':
                if (home == true){ password = false;
                    profile = true;
                    home = false;
                    term.set_prompt('[[;white;]vishnu@terminal ~/profile >> ]')
                    }
                else{
                    term.echo('Return to home using cd ..')
                }
                break;

            case 'cat secret':
                if(password == true){
                    window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygUOcmljayByb2xsIHNvbmc%3D'

                }
                else{
                    term.echo('I think you are in wrong directory');
                }                break

            case 'cat summary':
                if(profile == true){

                term.echo(`
    name: 
    [[;#0ff;]Vishnupriyan]`);
    term.echo(`
    email: 
    vishnupriyan1904@gmail.com`);
    term.echo(`
    github:
    https://github.com/vishnu7priyan`)
    term.echo(`
    twitter: 
    https://twitter.com/vishnuwebsec`);
    term.echo(`
    blog: 
    https://cyberdug.hashnode.dev/`);
    term.echo('');
                }
                else{
                    term.echo('I think you are in wrong directory');
                }  
                break;

            case 'pwd':
                if(home == true){
                    term.echo('/vishnu')
                }
                else if(password==true){
                    term.echo('/vishnu/password')
                }
                else if (profile == true){
                   term.echo('/vishnu/profile')
                }
                break
            
            case 'cat':
                $.get("https://api.thecatapi.com/v1/images/search?size=small", function (data) {
                    const catImageUrl = data[0].url;
                    const img = $('<img width="300" height="200" src="' + catImageUrl + '">');
                    img.width= 500;
                    term.echo(img);
                });
                term.echo("You mean this cat?? ")

                break;

            case 'cat resume':
                if(profile == true){
                    const resumeLink = document.createElement('a');
                    resumeLink.href = 'resume.html';
                    resumeLink.textContent = "Click me";
    
                    term.echo(resumeLink)
                }
                else{
                    term.echo('I think you are in wrong directory');
                }                
                break;

$(document).ready(function () {
    // Initialize the terminal
    var terminal = $('#terminal').terminal(function (command) {
        // Your terminal logic here
        // For example, handle commands or display output.
    }, {
        prompt: '>',
        name: 'my-terminal'
    });

    function detectScreenSize() {
        var width = $(window).width();

        if (width < 768) {
            $('#greeting').text('Welcome to the mobile version of the terminal!');
        } else {
            $('#greeting').text('Welcome to the desktop version of the terminal!');
        }
    }

    detectScreenSize();

    $(window).resize(function () {
        detectScreenSize();
    });
});
