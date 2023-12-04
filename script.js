
function onButtonClick(event, className) {
    const galleryItems = document.querySelectorAll('.photo');
    console.log(galleryItems);
    galleryItems.forEach((item) => {
        if(!item.classList.contains(className) && className != "all") {
            item.style.display = "none";
        } else {
            item.style.display = "block";
        }
    })
}