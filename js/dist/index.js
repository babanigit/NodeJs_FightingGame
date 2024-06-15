"use strict";
document.addEventListener("DOMContentLoaded", function () {
    const canvas = document.querySelector("canvas");
    const c = canvas === null || canvas === void 0 ? void 0 : canvas.getContext("2d");
    canvas === null || canvas === void 0 ? void 0 : canvas.width = 1024;
    canvas === null || canvas === void 0 ? void 0 : canvas.height = 576;
    // Now you can safely use the canvas and context
});
