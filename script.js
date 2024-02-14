document.addEventListener('DOMContentLoaded', function() {
    // Array of titles
    var titles = ["VIRGO'S GROOVE", 'All Night', 'HEATED', 'Diva', 'XO', 'ALIEN SUPERSTAR', 'Blue (feat. Blue Ivy)', 'Listen (From the Motion Picture "Dreamgirls")', 'Haunted', 'Hold Up', 'Irreplaceable', 'PURE/HONEY', 'MY HOUSE', 'Halo', 'Drunk in Love (feat. Jay-Z)', '***Flawless (feat. Chimamanda Ngozi Adichie)', "Don't Hurt Yourself (feat. Jack White)", 'Get Me Bodied - Extended Mix', "I'M THAT GIRL", 'Sorry', 'BIGGER', 'Formation', 'Crazy In Love (feat. Jay-Z)', 'I Miss You', 'I Care', 'Ring The Alarm', 'FIND YOUR WAY BACK', 'SUMMER RENAISSANCE', 'Jealous', 'Standing on the Sun Remix (feat. Mr. Vegas)', 'Countdown', 'ALREADY', 'End of Time', 'Broken-Hearted Girl', 'AMERICA HAS A PROBLEM', 'COZY', 'I Been On - Homecoming Live', 'PLASTIC OFF THE SOFA', 'Video Phone (feat. Lady Gaga)', 'Love Drought', 'Rocket', 'Party (feat. André 3000)', 'Single Ladies (Put a Ring on It)', 'Resentment', 'Smash Into You', 'Pretty Hurts', 'No Angel', 'Daddy Lessons', 'Pray You Catch Me', 'Radio'];

    // Get the current date
    var currentDate = new Date();
    // Get the day of the month (1-31)
    var dayOfMonth = currentDate.getDate();

    // Select a title from the array based on the day of the month
    var selectedTitleIndex = dayOfMonth % titles.length;
    var selectedTitle = titles[selectedTitleIndex];

    // Set the title of the page
    document.title = selectedTitle;

    // Remove the selected title from the array
    titles.splice(selectedTitleIndex, 1);

    // Update the content of the <h1> element
    document.getElementById('title').textContent = selectedTitle;
});
