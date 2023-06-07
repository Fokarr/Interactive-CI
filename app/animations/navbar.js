import { animate } from "motion";
import CONSTANTS from "../helper/constants.js";

function initializeNavbarAnimation() {
    let burgerMenu = document.getElementsByClassName("menu__burger")[0];
    let nav = document.getElementsByClassName("nav")[0];
    let menu = document.getElementsByClassName("menu__container")[0];

    burgerMenu.addEventListener("click", () => {
        if(burgerMenu.classList.contains("active")) {
            nav.classList.remove("active");
            burgerMenu.classList.remove("active");
            menu.classList.remove("active");
            animate(menu, {
                transform: "translate(120%, 120%)",
                borderTopLeftRadius: "13337px",
                opacity: 0,
                //backgroundColor: CONSTANTS.COLORS.black,
            }, {
                duration: 1,
                easing: "ease-in-out"
            })
        } else {
            animate(menu, {
                transform: "translate(0%, 0%)",
                borderTopLeftRadius: "0px",
                backgroundColor: CONSTANTS.COLORS.red,
                opacity: 1,
            }, {
                duration: 1,
                easing: "ease-in-out"
            })
            nav.classList.toggle("active");
            burgerMenu.classList.toggle("active");
            menu.classList.toggle("active");
        }
        

        
    });
}

export default initializeNavbarAnimation;