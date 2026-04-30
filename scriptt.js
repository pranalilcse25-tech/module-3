const form = document.querySelector(".form-container");

document.querySelectorAll("input[type=range]").forEach(range => {
    const span = document.createElement("span");
    span.innerText = range.value;
    range.after(span);

    range.addEventListener("input", () => {
        span.innerText = range.value;
    });
});

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.querySelector("input[name=name]").value;
    const email = document.querySelector("input[name=email]").value;

    if(name === "" || email === "") {
        alert("Please fill all fields!");
        return;
    }

    alert("Feedback submitted successfully!");
});

document.querySelectorAll("textarea").forEach(area => {
    const counter = document.createElement("small");
    counter.innerText = "0 characters";
    area.after(counter);

    area.addEventListener("input", () => {
        counter.innerText = area.value.length + " characters";
    });
});


form.addEventListener("reset", function() {
    setTimeout(() => {
        alert("Form reset!");
    }, 100);
});
