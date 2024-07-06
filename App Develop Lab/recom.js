function changeImage(categoryId, direction) {
    const imageElement = document.getElementById(`image${categoryId.charAt(categoryId.length - 1)}`);
    const currentImageSrc = imageElement.src;
    
    // Extract the numeric part from the current image source
    const match = currentImageSrc.match(/(\d+)\.jpg$/);
    let currentImageNumber = match ? parseInt(match[1], 10) : 1;

    const totalImages = 3; // Replace with the actual number of images for each category

    currentImageNumber += direction;

    // Wrap around if exceeding the total number of images
    if (currentImageNumber > totalImages) {
        currentImageNumber = 1;
    } else if (currentImageNumber < 1) {
        currentImageNumber = totalImages;
    }

    // Update the image source
    imageElement.src = `category${categoryId.charAt(categoryId.length - 1)}_image${currentImageNumber}.jpg`;
}
