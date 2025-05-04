function showNav () {
    document.getElementById("navlinks").style.display = "block";
}
function hideNav () {
    document.getElementById("navlinks").style.display = "none";
}

function scrollGallery(direction) {
    const gallery = document.getElementById('gallery');
    const scrollAmount = 300; // pixels

    gallery.parentElement.scrollBy({
        left: direction * scrollAmount,
        behavior: 'smooth'
    });
}

