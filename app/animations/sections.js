import { animate, scroll } from "motion";

function initializeSectionsAnimation() {
    document.querySelectorAll("section").forEach((section) => {
        scroll(animate(header, { y: [-400, 400] }), {
          target: header
        });
    });      
}

export default initializeSectionsAnimation;