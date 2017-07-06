import { PageSlide, PageSlides } from '../../models/page-slides';


var AppSlidesConfig: PageSlides = new PageSlides();

var pageSlide1: PageSlide = {
    title: "WELCOME_TO_THE_DOCS",
    description: "The <b>Ionic Component Documentation</b> showcases a number of useful components that are included out of the box with Ionic.",
    image: "assets/img/ica-slidebox-img-1.png",
};
var pageSlide2: PageSlide = {
    title: "What is Ionic?",
    description: "<b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.",
    image: "assets/img/ica-slidebox-img-2.png",
};
var pageSlide3: PageSlide = {
    title: "What is Ionic Cloud?",
    description: "The <b>Ionic Cloud</b> is a cloud platform for managing and scaling Ionic apps with integrated services like push notifications, native builds, user auth, and live updating.",
    image: "assets/img/ica-slidebox-img-3.png",
};

var pageSlide4: PageSlide = {
    title: "Ready to Play?",
    description: "GUIDE_CONTINUE",
    image: "assets/img/ica-slidebox-img-4.png",
};

AppSlidesConfig.slides.push(pageSlide1);
AppSlidesConfig.slides.push(pageSlide2);
AppSlidesConfig.slides.push(pageSlide3);
AppSlidesConfig.slides.push(pageSlide4);

AppSlidesConfig.component = "slides-page";

export { AppSlidesConfig }