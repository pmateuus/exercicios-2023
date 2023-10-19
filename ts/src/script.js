function toggleText() {
    const textResume = document.querySelector(".text-resume");
    const textResumeFull = document.querySelector(".text-resume-full");
    const readMoreButton = document.querySelector(".btn-show-more");
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
    const readMoreButton = document.querySelector(".btn-show-more");
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
    const postButton = document.querySelector(".post-button");
    const buttonNewTopic = document.querySelector(".btn-create-new-topic");
    const postSection = document.querySelector(".posts");
    const createTopicButton = document.querySelector(".btn-create-topic");
    const showPostsOcultosButton = document.querySelector(".ops-topic-subject");

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

    showPostsOcultosButton.addEventListener("click", function () {
        hideAll();
        postsOcultosSection.style.display = "block";
        postSection.style.display = "none";
        initialSection.style.display = "block";
    });

    postsOcultosSection.addEventListener("click", function () {
        hideAll();
        postsOcultosSection.style.display = "none";
        postSection.style.display = "block";
        initialSection.style.display = "block";
    });
});

// cy.get('[disabled]').click({force: true})