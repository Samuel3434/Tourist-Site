document.addEventListener("scroll", function () {
    const timelineEvents = document.querySelectorAll(".timeline-event");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                }
            });
        },
        { threshold: 0.3 }
    );

    timelineEvents.forEach((event) => {
        observer.observe(event);
    });
});
