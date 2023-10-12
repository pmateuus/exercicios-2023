function toggleText() {
    const textResume = document.querySelector(".text-resume");
    const textResumeFull = document.querySelector(".text-resume-full");
    const readMoreButton = document.querySelector(".read-more-button");
    const resume = document.getElementById("resume");

    if (textResume.style.display === "none" || textResume.style.display === "") {
        textResume.style.display = "block";
        textResumeFull.style.display = "none";
        readMoreButton.textContent = "Ver mais";
        resume.classList.remove("expanded");
    } else {
        textResume.style.display = "none";
        textResumeFull.style.display = "block";
        readMoreButton.textContent = "Ver menos";
        resume.classList.add("expanded");
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const readMoreButton = document.querySelector(".read-more-button");
    if (readMoreButton) {
        readMoreButton.addEventListener("click", toggleText);
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const initialSection = document.querySelector(".initial");
    const createTopicSection = document.querySelector(".create-topic");
    const successMessageSection = document.querySelector(".success-message");
    const sentTopicContainer = document.querySelector(".sent-topic-container");
    const postsOcultosSection = document.querySelector(".posts-ocultos");
    const discoverLink = document.querySelector(".discover-link");
    const postButton = document.querySelector(".post-button");
    const buttonNewTopic = document.querySelector(".button-new-topic");
    const postSection = document.querySelector(".posts"); 
    const createTopicButton = document.querySelector(".button-topico"); 

    const editTopicButton = document.querySelector(".edit-topic"); //id edit-topic 

    function hideAll() {
        initialSection.style.display = "none";
        createTopicSection.style.display = "none";
        successMessageSection.style.display = "none";
        sentTopicContainer.style.display = "none";
        postsOcultosSection.style.display = "none";
        postSection.style.display = "none";
    }

    buttonNewTopic.addEventListener("click", function () {
        hideAll();
        createTopicSection.style.display = "block";
        postSection.style.display = "block";
    });

    postButton.addEventListener("click", function () {
        hideAll();
        successMessageSection.style.display = "block";
        sentTopicContainer.style.display = "block";
        postSection.style.display = "block";
    });

    createTopicButton.addEventListener("click", function () {
        hideAll();
        createTopicSection.style.display = "block";
        postSection.style.display = "block";
    });

    editTopicButton.addEventListener("click", function (e) {
        e.preventDefault();
        hideAll();
        createTopicSection.style.display = "block";
        postSection.style.display = "block";
    });

    discoverLink.addEventListener("click", function (e) {
        e.preventDefault();
        hideAll();
        postsOcultosSection.style.display = "block";
        initialSection.style.display = "block";
        postSection.style.display = "none";
    });
});


