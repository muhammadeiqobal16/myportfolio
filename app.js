import animation from "./script/animation.js";
import formHandler from "./script/form.js";

document.addEventListener(`DOMContentLoaded`, () => {
    document.addEventListener(`scroll`, animation);
    formHandler();
});