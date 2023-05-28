let projects = document.getElementsByClassName('project-img');
let projectContainer = document.getElementsByClassName('projects');
let projectTags = document.getElementsByClassName('project-tag');
let aboutMeText = document.getElementById('about-me-text');
let tylerPic = document.getElementById('tyler-pic');
let navBarLinks = document.getElementsByClassName('hover-underline-animation');
let aboutMeBoxes = document.getElementsByClassName('text');


// Mobile Friendly
let width = window.outerWidth;
let height = window.outerHeight;
if (width < 1000)
{
    for (let i = 0; i < projectContainer.length; i++)
    {
        projectContainer[i].style.width = '80%'
        projectContainer[i].style.height = '50%';
    }

    for (let i = 0; i < navBarLinks.length; i++)
    {
        navBarLinks[i].style.margin = '0% 3%';
    }


    for (let i = 0; i < aboutMeBoxes.length; i++)
    {
        aboutMeBoxes[i].style.width = '80%';
    }
    document.getElementById('main-page').className = 'main-page-mobile';
    tylerPic.style.visibility = 'hidden';
    aboutMeText.style.width = '80%';
    console.log(width);
}



// About Me Animation
for (let i = 0; i < aboutMeBoxes.length; i++)
{
    aboutMeBoxes[i].addEventListener('mouseover', function()
    {
        aboutMeBoxes[i].style.transform = 'translateY(4%) scale(1.1)';
    });

    aboutMeBoxes[i].addEventListener('mouseout', function()
    {
        aboutMeBoxes[i].style.transform = ('scale(1.0)');
    });
}