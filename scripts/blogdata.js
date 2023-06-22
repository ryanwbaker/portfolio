var blogdata = [
    {
        id: 13, //store HTML file as '[id#].html' in 'posts' folder
        title: 'Capstone: Equusense',
        type: 'Project', //'Project' or 'Reflection'
        date: '2023-04-30',
        desc: 'A Smart Watch for Horses', // keep it less than 10 words
        img: 'img/equusense_logo.png', //should be 4:3 ratio
    },
    {
        id: 12, //store HTML file as '[id#].html' in 'posts' folder
        title: 'Chem 209 Battlebox',
        type: 'Project', //'Project' or 'Reflection'
        date: '2019-11-15',
        desc: 'Escape Room Style Puzzle', // keep it less than 10 words
        img: 'img/chem-209-battlebox.jpg', //should be 4:3 ratio
    },
    {
        id: 11, //store HTML file as '[id#].html' in 'posts' folder
        title: 'Building a Power Supply',
        type: 'Project', //'Project' or 'Reflection'
        date: '2018-04-15',
        desc: 'BCIT Year 1 Capstone Project', // keep it less than 10 words
        img: 'img/2.jpg', //should be 4:3 ratio
    },
    {
        id: 10, //store HTML file as '[id#].html' in 'posts' folder
        title: 'Looking Back: Learning Strategies',
        type: 'Reflection', //'Project' or 'Reflection'
        date: '2021-04-19',
        desc: "Learning how to learn is useful.", // keep it less than 10 words
        img: 'img/learning-card.jpg', //should be 4:3 ratio
    },
    {
        id: 9, //store HTML file as '[id#].html' in 'posts' folder
        title: 'Looking Back: Study Plan',
        type: 'Reflection', //'Project' or 'Reflection'
        date: '2021-04-19',
        desc: "It's simple and it works!", // keep it less than 10 words
        img: 'img/study-plan.png', //should be 4:3 ratio
    },
    {
        id: 8, //store HTML file as '[id#].html' in 'posts' folder
        title: 'ENEL 300 Project',
        type: 'Project', //'Project' or 'Reflection'
        date: '2021-04-19',
        desc: 'Honkly: A Custom Car Horn!', // keep it less than 10 words
        img: 'img/honkly-card.jpeg', //should be 4:3 ratio
    },
    {
        id: 7, //store HTML file as '[id#].html' in 'posts' folder
        title: 'ENEL 300 Team Work',
        type: 'Reflection', //'Project' or 'Reflection'
        date: '2021-04-19',
        desc: 'Teamwork is critical for large projects!', // keep it less than 10 words
        img: 'img/teamwork-card.png', //should be 4:3 ratio
    },
    {
        id: 6, //store HTML file as '[id#].html' in 'posts' folder
        title: 'ENEL 300 Entrepreneurship',
        type: 'Reflection', //'Project' or 'Reflection'
        date: '2021-04-18',
        desc: 'What I Learned About Entrepreneurship in ENEL 300', // keep it less than 10 words
        img: 'img/entrepreneurship-card.jpg', //should be 4:3 ratio
    },
    {
        id: 5, //store HTML file as '[id#].html' in 'posts' folder
        title: 'Agile Project Management',
        type: 'Reflection', //'Project' or 'Reflection'
        date: '2021-04-18',
        desc: 'A Practical System With a Fitting Name', // keep it less than 10 words
        img: 'img/agile-pm-card.png', //should be 4:3 ratio
    },
    {
        id: 4, //store HTML file as '[id#].html' in 'posts' folder
        title: 'Looking Back on ENEL 361',
        type: 'Reflection', //'Project' or 'Reflection'
        date: '2021-04-02',
        desc: 'So this is why we studied chemistry...', // keep it less than 10 words
        img: 'img/361_card.jpg', //should be 4:3 ratio
    },
    {
        id: 3, //store HTML file as '[id#].html' in 'posts' folder
        title: 'Looking Back on ENEL 327',
        type: 'Reflection', //'Project' or 'Reflection'
        date: '2021-04-02',
        desc: 'Signals and Transforms: Challenging but Rewarding', // keep it less than 10 words
        img: 'img/327_card.jpg', //should be 4:3 ratio
    },
    {
        id: 2, //store HTML file as '[id#].html' in 'posts' folder
        title: 'Looking Back on ENCM 369',
        type: 'Reflection', //'Project' or 'Reflection'
        date: '2021-04-02',
        desc: 'This was my favourite ILS course!', // keep it less than 10 words
        img: 'img/mips_card.jpg', //should be 4:3 ratio
    },
    {
        id: 1, //store HTML file as '[id#].html' in 'posts' folder
        title: 'Saving Thanksgiving',
        type: 'Project', //'Project' or 'Reflection'
        date: '2018-10-08',
        desc: 'Two Ovens Failed at the Same Time on THANKSGIVING DAY!', // keep it less than 10 words
        img: 'img/thanksgiving_card.JPG', //should be 4:3 ratio
    }
];
blogdata = blogdata.sort((a, b) => a.date.localeCompare(b.date)).reverse();
blogdata.forEach((el) => {
    dateparts = el.date.split("-");
    switch(Number(dateparts[1])) {
        case 1:
            dateparts[1] = "January"
            break;
        case 2:
            dateparts[1] = "February"
            break;
        case 3:
            dateparts[1] = "March"
            break;
        case 4:
            dateparts[1] = "April"
            break;
        case 5:
            dateparts[1] = "May"
            break;
        case 6:
            dateparts[1] = "June"
            break;
        case 7:
            dateparts[1] = "July"
            break;
        case 8:
            dateparts[1] = "August"
            break;
        case 9:
            dateparts[1] = "September"
            break;
        case 10:
            dateparts[1] = "October"
            break;
        case 11:
            dateparts[1] = "November"
            break;          
        case 12:
            dateparts[1] = "December"
            break;
        default:
          "April"
      }
    el.date = dateparts[1] + " " + dateparts[2] + ", " + dateparts[0]
})