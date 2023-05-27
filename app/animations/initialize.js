import initializeHeadingAnimation from "./heading";
import initializeLogoAnimation from "./logo";
import initializePageTransition from "./page";
import initializeLinkAnimations from "./links";
import initializeLoadingAnimation from "./loading";
import initializeNavbarAnimation from "./navbar";

async function initializeAnimations()  {
    await initializeLoadingAnimation();
    initializePageTransition();
    initializeNavbarAnimation();
    // base delay of pagetransition 
    initializeHeadingAnimation();
    initializeLogoAnimation();
    initializeLinkAnimations();
}

export default initializeAnimations;