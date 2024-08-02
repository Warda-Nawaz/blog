const postsElement = document.getElementById('posts');

document.addEventListener('DOMContentLoaded', function() {
    
    const likeButtons = document.querySelectorAll('.like-button');
    likeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const likesCountSpan = this.nextElementSibling;
            let likesCount = parseInt(likesCountSpan.textContent.split(' ')[0]);
            likesCount++;
            likesCountSpan.textContent = `${likesCount} likes`;
        });
    });

    const posts = document.querySelectorAll('.post');
    posts.forEach(post => {
        post.addEventListener('click', function() {
            window.location.href = 'posts.html';
        });
    });

    const post_ = document.querySelectorAll('.post1');
    post_.forEach(post => {
        post.addEventListener('click', function() {
            window.location.href = 'podcasts.html';
        });
    });

    const homeButtons = document.querySelectorAll('.homepage, .Home');
    homeButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            window.location.href = 'my_blog.html';
        });
    });

});
