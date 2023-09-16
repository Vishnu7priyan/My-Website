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
var profile = true;
var password = true;
$(document).ready(function () {
    $('#terminal').terminal(function (command , term ) {
        const history = term.history().data()
        grep = history[history.length -2]
        grep2 = history[history.length -3]
        function validate(){
            if(grep == 'cd password' | grep == 'cat secret'){
                window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygUOcmljayByb2xsIHNvbmc%3D'
    }
    else{
        term.echo('not valid')
    }
}

function which_ls(){
    if(grep == 'cd password'){
        term.echo('secret')
    }
    else if (grep == 'cd profile'){
        term.echo(`[[;#0ff;]summary ] \t`,{newline: false})
        term.echo(`[[;#0ff;]about] \t`,{newline: false})
        term.echo(`[[;#0ff;]blog] \t`,{newline: false})
        term.echo(`[[;#0ff;]other] \t`)
 
    }
    else{
         //term.echo(`[[;#0ff;]Here is list of available commands ]`)
            //term.echo(`Use cd to navigate to directory`)
            term.echo(`[[;white;]profile/] \t`, { newline: false })
            term.echo(`[[;#0ff;]pwd] \t`,{newline: false})
            term.echo(`[[;white;]password/]`)
                 
    }
}

        switch (command) {
            case 'ls':
                which_ls()
                break;

             
            case 'cd password':
                term.set_prompt('[[;white;]root@vishnu/password >> ]')
                break;
            
            case 'cd profile':
                term.set_prompt('[[;white;]root@vishnu/profile >> ]')
                break;

            case 'cat secret':
                if(profile == true){}
                validate()
                break;
                case 'cd home':
                    term.set_prompt('[[;white;]root@vishnu >> ]')
                    break;

                case 'hi':
                    term.echo('bro')
                    break;
            case 'cat summary':
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

                break;

            case 'pwd':
                term.echo('/root')
                break;
            cat 
            
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
                const resumeLink = document.createElement('a');
                resumeLink.href = 'resume.html';
                resumeLink.textContent = "Click me";

                term.echo(resumeLink)
                break;
            case 'cat about':
                // link element
                const aboutLink = document.createElement('a');
                aboutLink.href = '/about/about.html'; 
                aboutLink.textContent = 'click here to read more about me';

                // css styles to change the link color
                aboutLink.style.color = 'pink'; 

                // append the link element to the terminal
                term.echo('');
                term.echo(aboutLink);

                break;

            case 'cat blog':
                const blog_link = document.createElement('a');
                blog_link.href = "https://cyberdug.hashnode.dev"
                blog_link.textContent = "CyberDug"
                blog_link.target = 'blank';
                term.echo(blog_link)
                break; 

            case 'clear':
                    term.echo('command no') //this doesnt work ????? try something else
                break;

           
                
            case 'cd blog ':
            case 'cd about':
            case 'cd summary':
            case 'cd games':
                term.echo('Not a Directory')
                break;
                
            case 'test2':
                var div = $('<p style="color:blue;">Hello <strong>World</strong></p>')
                term.echo(div)
                break;
            case 'test3':
               // term.echo(small.innerHTML)
               //term.echo('<div class="large-font">File1.txt</div>');
               //term.setOptions({ fontSize: 14 });
               terminal.disable;
               break;
            case 'summary':
            case 'blog':
            case 'about':
            case 'resume':
                if (profile == true){
                    term.echo('use cat to view')
                }
                break;
            
        }
    }, {
        greetings: vishnu.innerHTML,

        prompt: '[[;white;]root@vishnu >> ] ',
        onInit: function (term) {
            // Enable HTML rendering for greetings
            term.echo('', {
                raw: true
            });
        }
    });
});



