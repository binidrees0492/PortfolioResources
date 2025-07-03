document.addEventListener("DOMContentLoaded", () => {
    const gallery = document.getElementById("gallery");

    // List of image filenames — update manually or fetch from server API
    const imageList = [
        "image1.jpg",
        "image2.png",
        "photo3.jpeg",
        "example4.webp"
        // Add more or fetch via API
    ];

    gallery.innerHTML = ''; // Clear loading text

    imageList.forEach(filename => {
        const div = document.createElement("div");
        div.className = "thumb";

        div.innerHTML = `
      <img src="imgs/${filename}" alt="${filename}">
      <div class="caption">${filename}</div>
    `;
        gallery.appendChild(div);
    });
});
