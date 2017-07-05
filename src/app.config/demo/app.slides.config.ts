import { PageSlide, PageSlides } from '../../models/page-slides';


var AppSlidesConfig: PageSlides = new PageSlides();

AppSlidesConfig.slides = [
    {
        title: "Welcome to the Docs!",
        description: "The <b>Ionic Component Documentation</b> showcases a number of useful components that are included out of the box with Ionic.",
        image: "assets/img/ica-slidebox-img-1.png",
    },
    {
        title: "What is Ionic?",
        description: "<b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.",
        image: "assets/img/ica-slidebox-img-2.png",
    },
    {
        title: "What is Ionic Cloud?",
        description: "The <b>Ionic Cloud</b> is a cloud platform for managing and scaling Ionic apps with integrated services like push notifications, native builds, user auth, and live updating.",
        image: "assets/img/ica-slidebox-img-3.png",
    },
    {
        title: "Ready to Play?",
        description: "Continue",
        image: "assets/img/ica-slidebox-img-4.png",
    }
];

AppSlidesConfig.component = "slides-page";

export { AppSlidesConfig }