
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
$(document).ready(function () {
    $('#terminal').terminal(function (command, term ) {
        switch (command) {
            case 'ls':
                term.echo(`about    certificates    summary     blog `)
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
            case 'about':
                // link element
                const aboutLink = document.createElement('a');
                aboutLink.href = '/about.html'; 
                aboutLink.textContent = 'click here to read more about me';

                aboutLink.style.color = 'pink'; 

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
                    term.echo('command no')
                break;

            case 'test':
                term.exec([
                    'pwd',
                    'cat blog',
                    'cat resume'
                 ]);
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
            default:
                term.echo(" ");
                break;
        }
    }, {
        greetings: vishnu.innerHTML,

        prompt: '[[;lightgreen;]>>> ] ',
        onInit: function (term) {
            // Enable HTML rendering for greetings
            term.echo('', {
                raw: true
            });
        }
    });
});
