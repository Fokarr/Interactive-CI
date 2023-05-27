import { animate, stagger } from "motion";

function initializeLogoAnimation() {
    const logoPieces = document.querySelectorAll(".piece");
    console.log(logoPieces)
    Array.from(logoPieces).forEach((piece, index) => {
        animate(piece, {
            opacity: 1,
            transform: ["translateY(100px)", "translateY(0px)"],
        }, {
            duration: 1,
            delay: 0.5 + index * 0.1,
        })
    });

    animate(".pronunciation", {
        opacity: 1,
    }, {
        duration: 1,
        delay: 1.5,
    });
}

export default initializeLogoAnimation;