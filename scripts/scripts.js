function handleChange() {
    var x = document.getElementById("referredby");

    if (x.value === "magic") {
        document.getElementById("more-detail").classList.remove("hidden");
    } else {
        document.getElementById("more-detail").classList.add("hidden");
    }
}

document.getElementById("referredby").addEventListener("change", handleChange)






