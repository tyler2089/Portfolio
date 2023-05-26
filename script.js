let projects = document.getElementsByClassName('projects');
let projectTags = document.getElementsByClassName('project-tag');
let aboutMeText = document.getElementById('about-me-text');
let tylerPic = document.getElementById('tyler-pic');
let navBarLinks = document.getElementsByClassName('hover-underline-animation');
// Mobile Friendly
let width = window.outerWidth;
let height = window.outerHeight;
if (width < 1000)
{
    for (let i = 0; i < projects.length; i++)
    {
        projects[i].style.width = '80%'
        projects[i].style.height = '50%';
    }

    for (let i = 0; i < navBarLinks.length; i++)
    {
        navBarLinks[i].style.margin = '0% 3%';
    }
    document.getElementById('main-page').className = 'main-page-mobile';
    tylerPic.style.visibility = 'hidden';
    aboutMeText.style.width = '80%';
    console.log(width);
}



// Project Animations

for (let i = 0; i < projects.length; i++)
{
    projects[i].addEventListener('mouseover', function() 
    {projectTags[i].style.transform = 'scale(1.1)';
     projectTags[i].style.transform = 'translate(-35%, 40%)'});
    projects[i].addEventListener('mouseout', function()
    {projectTags[i].style.transform = 'scale(1.0)'});
}
function untransform(projectTag)
{
    projectTag.style.transform = 'scale(1.0)';
}
function transform(projectTag)
{
    projectTag.style.transform = 'scale(1.1)';
}