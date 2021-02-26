export function presentationHandler() // Gestion de la phrase de présentation en intro
{
    const introPresentation = document.getElementById("intro-presentation")
    const highlighterWrapper = introPresentation.querySelectorAll(".highlighterWrapper");
    const intPrsX = introPresentation.offsetTop;

    console.log(highlighterWrapper);

    highlighterWrapper.forEach(l => l.setAttribute("style", "top: "+intPrsX+"px;"));
}
