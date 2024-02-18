document.addEventListener('DOMContentLoaded', function() {
    
    var titles = [["VIRGO'S GROOVE", "https://i.scdn.co/image/ab67616d00001e020e58a0f8308c1ad403d105e7"], ["All Night", "https://i.scdn.co/image/ab67616d00001e0289992f4d7d4ab94937bf9e23"], ["HEATED", "https://i.scdn.co/image/ab67616d00001e020e58a0f8308c1ad403d105e7"], ["Diva", "https://i.scdn.co/image/ab67616d00001e02e13de7b8662b085b0885ffef"], ["XO", "https://i.scdn.co/image/ab67616d00001e020d1d6e9325275f104f8e33f3"], ["ALIEN SUPERSTAR", "https://i.scdn.co/image/ab67616d00001e020e58a0f8308c1ad403d105e7"], ["Blue (feat. Blue Ivy)", "https://i.scdn.co/image/ab67616d00001e020d1d6e9325275f104f8e33f3"], ["Listen (From the Motion Picture \"Dreamgirls\")", "https://i.scdn.co/image/ab67616d00001e02026e88f624dfb96f2e1ef10b"], ["Haunted", "https://i.scdn.co/image/ab67616d00001e020d1d6e9325275f104f8e33f3"], ["Hold Up", "https://i.scdn.co/image/ab67616d00001e0289992f4d7d4ab94937bf9e23"], ["Irreplaceable", "https://i.scdn.co/image/ab67616d00001e02026e88f624dfb96f2e1ef10b"], ["PURE/HONEY", "https://i.scdn.co/image/ab67616d00001e020e58a0f8308c1ad403d105e7"], ["MY HOUSE", "https://i.scdn.co/image/ab67616d00001e020e05818e7479f703c800a3ff"], ["Halo", "https://i.scdn.co/image/ab67616d00001e02e13de7b8662b085b0885ffef"], ["Drunk in Love (feat. Jay-Z)", "https://i.scdn.co/image/ab67616d00001e020d1d6e9325275f104f8e33f3"], ["***Flawless (feat. Chimamanda Ngozi Adichie)", "https://i.scdn.co/image/ab67616d00001e020d1d6e9325275f104f8e33f3"], ["Don't Hurt Yourself (feat. Jack White)", "https://i.scdn.co/image/ab67616d00001e0289992f4d7d4ab94937bf9e23"], ["Get Me Bodied - Extended Mix", "https://i.scdn.co/image/ab67616d00001e02026e88f624dfb96f2e1ef10b"], ["I'M THAT GIRL", "https://i.scdn.co/image/ab67616d00001e020e58a0f8308c1ad403d105e7"], ["Sorry", "https://i.scdn.co/image/ab67616d00001e0289992f4d7d4ab94937bf9e23"], ["BIGGER", "https://i.scdn.co/image/ab67616d00001e0260e232dede80f62f9bfc8eda"], ["Formation", "https://i.scdn.co/image/ab67616d00001e0289992f4d7d4ab94937bf9e23"], ["Crazy In Love (feat. Jay-Z)", "https://i.scdn.co/image/ab67616d00001e0245680a4a57c97894490a01c1"], ["I Miss You", "https://i.scdn.co/image/ab67616d00001e02ff5429125128b43572dbdccd"], ["I Care", "https://i.scdn.co/image/ab67616d00001e02ff5429125128b43572dbdccd"], ["Ring The Alarm", "https://i.scdn.co/image/ab67616d00001e02026e88f624dfb96f2e1ef10b"], ["FIND YOUR WAY BACK", "https://i.scdn.co/image/ab67616d00001e0260e232dede80f62f9bfc8eda"], ["SUMMER RENAISSANCE", "https://i.scdn.co/image/ab67616d00001e020e58a0f8308c1ad403d105e7"], ["Jealous", "https://i.scdn.co/image/ab67616d00001e020d1d6e9325275f104f8e33f3"], ["Standing on the Sun Remix (feat. Mr. Vegas)", "https://i.scdn.co/image/ab67616d00001e020d1d6e9325275f104f8e33f3"], ["Countdown", "https://i.scdn.co/image/ab67616d00001e02ff5429125128b43572dbdccd"], ["ALREADY", "https://i.scdn.co/image/ab67616d00001e0260e232dede80f62f9bfc8eda"], ["End of Time", "https://i.scdn.co/image/ab67616d00001e02ff5429125128b43572dbdccd"], ["Broken-Hearted Girl", "https://i.scdn.co/image/ab67616d00001e02e13de7b8662b085b0885ffef"], ["AMERICA HAS A PROBLEM", "https://i.scdn.co/image/ab67616d00001e020e58a0f8308c1ad403d105e7"], ["COZY", "https://i.scdn.co/image/ab67616d00001e020e58a0f8308c1ad403d105e7"], ["I Been On - Homecoming Live", "https://i.scdn.co/image/ab67616d00001e028e525253c87c568cd84e491b"], ["PLASTIC OFF THE SOFA", "https://i.scdn.co/image/ab67616d00001e020e58a0f8308c1ad403d105e7"], ["Video Phone (feat. Lady Gaga)", "https://i.scdn.co/image/ab67616d00001e02fc6b7160550354d9266b1f09"], ["Love Drought", "https://i.scdn.co/image/ab67616d00001e0289992f4d7d4ab94937bf9e23"], ["Rocket", "https://i.scdn.co/image/ab67616d00001e020d1d6e9325275f104f8e33f3"], ["Party (feat. Andr\u00e9 3000)", "https://i.scdn.co/image/ab67616d00001e02ff5429125128b43572dbdccd"], ["Single Ladies (Put a Ring on It)", "https://i.scdn.co/image/ab67616d00001e02e13de7b8662b085b0885ffef"], ["Resentment", "https://i.scdn.co/image/ab67616d00001e02026e88f624dfb96f2e1ef10b"], ["Smash Into You", "https://i.scdn.co/image/ab67616d00001e02e13de7b8662b085b0885ffef"], ["Pretty Hurts", "https://i.scdn.co/image/ab67616d00001e020d1d6e9325275f104f8e33f3"], ["No Angel", "https://i.scdn.co/image/ab67616d00001e020d1d6e9325275f104f8e33f3"], ["Daddy Lessons", "https://i.scdn.co/image/ab67616d00001e0289992f4d7d4ab94937bf9e23"], ["Pray You Catch Me", "https://i.scdn.co/image/ab67616d00001e0289992f4d7d4ab94937bf9e23"], ["Radio", "https://i.scdn.co/image/ab67616d00001e02e13de7b8662b085b0885ffef"]];
    
    function updateImage() {
        // Check if the index is stored in local storage
        if (localStorage.getItem('randomImageIndex')) {
            // Retrieve the stored index
            var storedIndex = parseInt(localStorage.getItem('randomImageIndex'));
        } else {
            // Generate a random index if not stored
            var storedIndex = Math.floor(Math.random() * titles.length +1);
            // Store the index in local storage
            localStorage.setItem('randomImageIndex', storedIndex);
        }
        // Set the image source
        document.getElementById("dynamicTitle").textContent= titles[storedIndex][0]
        document.getElementById('albumImage').src = titles[storedIndex][1];

        setTimeout(function() {
            
            // Remove the stored index from local storage
            localStorage.removeItem('randomImageIndex');
        }, 86400000); // 24 hours in milliseconds
    }
   
    

    updateImage();
    var interval = setInterval(updateImage, 86400000);
});