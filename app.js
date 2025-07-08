document.addEventListener('DOMContentLoaded', () => {
const projectsContainer = document.getElementById('projects');
const paginationLinksContainer = document.getElementById('pagination-links');
const popup = document.getElementById('image-popup');
const popupImage = document.getElementById('popup-image');
const thumbnailGallery = document.getElementById('thumbnail-gallery');
const dismissBtn = document.querySelector('#image-popup .dismiss-btn');
const addProjectBtn = document.getElementById('add-project-btn');
const addProjectModal = document.getElementById('add-project-modal');
const closeModalBtn = document.getElementById('close-modal-btn');
const submitProjectBtn = document.getElementById('submit-project-btn');
const addCommentBtn = document.getElementById('add-comment-btn');
const commentsContainer = document.getElementById('comments-container');
const formError = document.getElementById('form-error');

// Check if projects is defined and is an array
if (!Array.isArray(projects)) {
    projectsContainer.innerHTML = '<p class="text-center text-red-600 col-span-full">Error: Projects data is not available or invalid.</p>';
    paginationLinksContainer.innerHTML = '<p class="text-center text-red-600">Unable to load tags.</p>';
    return;
}

// Filter functionality
let currentTag = null;

function updateNavbars() {
    // Generate pagination links from tags
    const allTags = ['All', ...new Set(projects.flatMap(p => p.tags))];
    paginationLinksContainer.innerHTML = allTags.map(tag => `
        <button class="pagination-link ${tag === (currentTag || 'All') ? 'active' : ''}" data-tag="${tag}">${tag}</button>
    `).join('');
}

function updateActiveButton(container, className, value) {
    container.querySelectorAll(`.${className}`).forEach(btn => {
        btn.classList.toggle('active', btn.dataset[className.split('-')[0]] === value);
    });
}

paginationLinksContainer.addEventListener('click', (e) => {
    const target = e.target.closest('.pagination-link');
    if (target) {
        currentTag = target.dataset.tag === 'All' ? null : target.dataset.tag;
        updateActiveButton(paginationLinksContainer, 'pagination-link', currentTag || 'All');
        renderProjects();
    }
});

function renderProjects() {
    projectsContainer.innerHTML = '';
    if (!Array.isArray(projects)) {
        projectsContainer.innerHTML = '<p class="text-center text-red-600 col-span-full">Error: Projects data is not available or invalid.</p>';
        return;
    }
    const filteredProjects = projects.filter(p => {
        return currentTag === null || p.tags.includes(currentTag);
    });
    if (filteredProjects.length === 0) {
        projectsContainer.innerHTML = '<p class="text-center text-gray-600 col-span-full">No projects match the selected tag.</p>';
        return;
    }
    filteredProjects.forEach((project, index) => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card bg-white rounded-lg shadow-lg p-4 fade-in';
        projectCard.style.animationDelay = `${index * 0.1}s`;
        projectCard.style.borderLeftColor = project.color || '#000';

        const commentLimit = window.innerWidth <= 640 ? 1 : window.innerWidth <= 1024 ? 2 : 3;

        projectCard.innerHTML = `
            <div class="title-tags-container">
                <h2 class="text-xl font-bold text-${project.color || 'blue'}-600">${project.title}</h2>
                <div class="flex flex-wrap gap-1">
                    ${project.tags.slice(0, 5).map(tag => `
                        <span class="bg-${project.color || 'blue'}-100 text-${project.color || 'blue'}-800 text-xs px-2 py-0.5 rounded-full">${tag}</span>
                    `).join('')}
                </div>
            </div>
            <p class="text-gray-600 mb-3 text-sm"><strong>Market:</strong> ${project.market}</p>
            <div class="w-full mb-3">
                <iframe src="${project.videoUrl}" frameborder="0" allowfullscreen class="w-full h-56 rounded lazy"></iframe>
            </div>
            <div class="image-gallery relative mb-3">
                <button class="carousel-btn left">←</button>
                <div class="image-gallery-inner flex space-x-3">
                    ${project.images.map(img => `
                        <img src="${img}" alt="${project.title}" class="gallery-image w-40 h-24 object-cover rounded cursor-pointer lazy" data-project-id="${index}">
                    `).join('')}
                    ${project.images.map(img => `
                        <img src="${img}" alt="${project.title}" class="gallery-image w-40 h-24 object-cover rounded cursor-pointer lazy" data-project-id="${index}">
                    `).join('')}
                </div>
                <button class="carousel-btn right">→</button>
            </div>
            <p class="text-gray-600 mb-3 text-sm">${project.description}</p>
            <div class="comments mb-3">
                <h3 class="text-base font-semibold mb-1.5">Client Comments</h3>
                <div class="comments-list">
                    ${project.comments.map((comment, idx) => `
                        <p class="${idx >= commentLimit ? 'comment-hidden' : ''} comment text-gray-600 mb-1.5 border-${project.color || 'blue'}-600"><strong>${comment.client}</strong>: ${comment.text}</p>
                    `).join('')}
                </div>
                ${project.comments.length > commentLimit ? `<button class="toggle-comments text-${project.color || 'blue'}-600 hover:text-${project.color || 'blue'}-800 text-xs">Show ${project.comments.length - commentLimit} more</button>` : ''}
            </div>
            <a href="${project.videoUrl}" target="_blank" class="inline-block bg-${project.color || 'blue'}-600 text-white px-3 py-1.5 rounded text-sm hover:bg-${project.color || 'blue'}-700 transition-colors">View Project</a>
        `;

        projectsContainer.appendChild(projectCard);

        // Image carousel
        const imageGallery = projectCard.querySelector('.image-gallery-inner');
        const imageLeftBtn = projectCard.querySelector('.image-gallery .carousel-btn.left');
        const imageRightBtn = projectCard.querySelector('.image-gallery .carousel-btn.right');
        let imageCurrentIndex = 0;
        const imageWidth = 172;
        const imageMaxIndex = project.images.length - Math.floor(projectCard.offsetWidth / imageWidth);

        imageGallery.addEventListener('mouseenter', () => imageGallery.classList.add('paused'), {passive: true});
        imageGallery.addEventListener('mouseleave', () => imageGallery.classList.remove('paused'), {passive: true});

        imageLeftBtn.addEventListener('click', {
            handleEvent: () => {
                if (imageCurrentIndex > 0) {
                    imageCurrentIndex--;
                    imageGallery.style.transition = 'transform 0.5s ease';
                    imageGallery.style.transform = `translateX(-${imageCurrentIndex * imageWidth}px)`;
                } else {
                    imageCurrentIndex = project.images.length;
                    imageGallery.style.transform = `translateX(-${imageCurrentIndex * imageWidth}px)`;
                    requestAnimationFrame(() => {
                        imageGallery.style.transition = 'transform 0.5s ease';
                    });
                }
            }, passive: true
        });

        imageRightBtn.addEventListener('click', {
            handleEvent: () => {
                if (imageCurrentIndex < imageMaxIndex) {
                    imageCurrentIndex++;
                    imageGallery.style.transition = 'transform 0.5s ease';
                    imageGallery.style.transform = `translateX(-${imageCurrentIndex * imageWidth}px)`;
                } else {
                    imageCurrentIndex = 0;
                    imageGallery.style.transform = `translateX(0)`;
                    requestAnimationFrame(() => {
                        imageGallery.style.transition = 'transform 0.5s ease';
                    });
                }
            }, passive: true
        });

        imageGallery.addEventListener('animationiteration', () => {
            imageCurrentIndex = 0;
            imageGallery.style.transform = 'translateX(0)';
            requestAnimationFrame(() => {
                imageGallery.style.transition = 'transform 0.5s ease';
            });
        }, {passive: true});

        // Image popup with thumbnails
        projectCard.querySelectorAll('.gallery-image').forEach((img, imgIndex) => {
            img.addEventListener('click', () => {
                popupImage.src = img.src;
                popup.style.display = 'flex';
                thumbnailGallery.innerHTML = project.images.map((thumb, thumbIndex) => `
                    <img src="${thumb}" alt="${project.title}" class="thumbnail ${thumbIndex === imgIndex ? 'active' : ''}" data-img-index="${thumbIndex}">
                `).join('');
                thumbnailGallery.dataset.projectId = index;
            });
        });

        // Toggle comments
        const toggleBtn = projectCard.querySelector('.toggle-comments');
        if (toggleBtn) {
            toggleBtn.addEventListener('click', () => {
                const hiddenComments = projectCard.querySelectorAll('.comment-hidden');
                const isExpanded = toggleBtn.textContent.includes('less');
                hiddenComments.forEach(comment => {
                    comment.classList.toggle('comment-hidden', isExpanded);
                });
                toggleBtn.textContent = isExpanded ? `Show ${project.comments.length - commentLimit} more` : `Show less`;
            });
        }
    });
    // Re-observe fade-in elements after rendering
    document.querySelectorAll('.fade-in').forEach(element => observer.observe(element));
}

// Thumbnail click handler
thumbnailGallery.addEventListener('click', (e) => {
    const thumbnail = e.target.closest('.thumbnail');
    if (thumbnail) {
        const projectId = parseInt(thumbnailGallery.dataset.projectId);
        const imgIndex = parseInt(thumbnail.dataset.imgIndex);
        popupImage.src = projects[projectId].images[imgIndex];
        thumbnailGallery.querySelectorAll('.thumbnail').forEach(thumb => thumb.classList.remove('active'));
        thumbnail.classList.add('active');
    }
});

// Lazy load images
const lazyImages = document.querySelectorAll('img.lazy');
const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.src;
            img.classList.remove('lazy');
            observer.unobserve(img);
        }
    });
}, {threshold: 0.1});
lazyImages.forEach(img => imageObserver.observe(img));

// Fade-in animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {threshold: 0.1});

// Modal handling
addProjectBtn.addEventListener('click', () => {
    addProjectModal.style.display = 'flex';
    formError.style.display = 'none';
    document.getElementById('project-title').value = '';
    document.getElementById('project-description').value = '';
    document.getElementById('project-video-url').value = '';
    document.getElementById('project-images').value = '';
    document.getElementById('project-tags').value = '';
    document.getElementById('project-color').value = '';
    document.getElementById('project-major-category').value = '';
    document.getElementById('project-market').value = '';
    commentsContainer.innerHTML = `
        <div class="comment-entry mb-2">
            <input type="text" class="comment-client" placeholder="Client Name">
            <input type="text" class="comment-text" placeholder="Comment Text">
        </div>
    `;
});

closeModalBtn.addEventListener('click', () => {
    addProjectModal.style.display = 'none';
});

addCommentBtn.addEventListener('click', () => {
    const newCommentEntry = document.createElement('div');
    newCommentEntry.className = 'comment-entry mb-2';
    newCommentEntry.innerHTML = `
        <input type="text" class="comment-client" placeholder="Client Name">
        <input type="text" class="comment-text" placeholder="Comment Text">
    `;
    commentsContainer.appendChild(newCommentEntry);
});

submitProjectBtn.addEventListener('click', () => {
    const title = document.getElementById('project-title').value.trim();
    const description = document.getElementById('project-description').value.trim();
    const videoUrl = document.getElementById('project-video-url').value.trim();
    const images = document.getElementById('project-images').value.split(',').map(url => url.trim()).filter(url => url);
    const tags = document.getElementById('project-tags').value.split(',').map(tag => tag.trim()).filter(tag => tag);
    const color = document.getElementById('project-color').value;
    const majorCategory = document.getElementById('project-major-category').value.trim();
    const market = document.getElementById('project-market').value.trim();
    const comments = Array.from(commentsContainer.querySelectorAll('.comment-entry')).map(entry => ({
        client: entry.querySelector('.comment-client').value.trim(),
        text: entry.querySelector('.comment-text').value.trim()
    })).filter(comment => comment.client && comment.text);

    // Validation
    if (!title || !description || !color || !majorCategory || !market) {
        formError.textContent = 'Please fill in all required fields correctly.';
        formError.style.display = 'block';
        return;
    }
    if (videoUrl && !/^(https?:\/\/)/.test(videoUrl)) {
        formError.textContent = 'Please enter a valid URL for Video URL';
        formError.style.display = 'block';
        return;
    }

    // Add new project
    const newProject = {
        title,
        description,
        videoUrl: videoUrl || 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        images: images.length ? images : ['https://picsum.photos/1200/900?random=1'],
        tags: tags.length ? tags : ['General'],
        color: color || 'blue',
        majorCategory: majorCategory || 'General',
        market: market || 'Unknown',
        comments: comments.length ? comments : [{client: 'Anonymous', text: 'No comments yet.'}]
    };
    projects.push(newProject);

    // Generate and download updated projects.js
    const fileContent = `const projects = ${JSON.stringify(projects, null, 2)};`;
    const blob = new Blob([fileContent], {type: 'application/javascript'});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'projects.js';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    // Close modal and re-render
    addProjectModal.style.display = 'none';
    updateNavbars();
    renderProjects();
});

// Initial render
updateNavbars();
renderProjects();

// Close popup
dismissBtn.addEventListener('click', () => {
    popup.style.display = 'none';
    thumbnailGallery.innerHTML = '';
});

// Update comment visibility on resize
window.addEventListener('resize', () => renderProjects(), {passive: true});
});
