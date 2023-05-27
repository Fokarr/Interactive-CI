import lottie from "lottie-web";
import { animate } from "motion";
import EXORD_SWOOSH from "../../public/animations/exord_swoosh.json";

async function initializeLoadingAnimation() {
    await new Promise(async (resolve) => {
        const loadingText = document.querySelector(".loading__text");
    
        const loadingContainer = document.querySelector("#loading");
        /*const loadingAnimation = document.querySelector("#loading .lottie");
        const loadingAnimationOptions = {
            container: loadingAnimation,
            renderer: "svg",
            loop: false,
            autoplay: true,
            animationData: EXORD_SWOOSH,
        };

        lottie.loadAnimation(loadingAnimationOptions);*/
        animate(loadingText, {
            opacity: [0, 1],
            y: [20, 0],
        }, {
            duration: 1,
            easing: "ease-in-out",
        });

        await animate(loadingContainer, {
            opacity: [1, 0],
        }, {
            duration: 1,
            delay: 2,
        }).finished;

        loadingContainer.style.display = "none";
        console.log("finished")
        resolve();
    });
    
}

export default initializeLoadingAnimation;