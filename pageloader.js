
window.onload = function() {
   
    if (!sessionStorage.getItem('loaderShown')) {
        // Set a flag in session storage
        sessionStorage.setItem('loaderShown', 'true');
        
        setTimeout(function() {
            window.location.href = "my_blog.html";
        }, 2000); 
    } else {
      
        window.location.href = "my_blog.html";
    }
};