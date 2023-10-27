class DynamicContentUpdater {
    #i =1;
    constructor() {
        this.numMap = {
            1: {
                leftHalf:  `
                <h1 class="title">Yo yo yo!</h1>
                <a class="bodyText">My name is Joe O'Connell. I am a student, developer, and a human! Click through to learn more about me!</a>
                <button class="begin-button">Begin &rarr;</button>
                `,
                rightHalf: `
                <img src="joe.jpeg">
            `
            },
            2: {
                leftHalf:  `
                <h1 class="title">Student</h1>
                <a class="bodyText">I am a junior at UW Madison studing Computer Science and Finance. 
                While I will be reciving my bachelors in Bussiness, Computer science is my true passion.
                On campus I do my best to stay involed and make the most of my time at college. I am involved in 
                Alpha Kappa Psi, a business fraternity, and Badger Consulting, a student run consulting group for small businesses.
                </a>
                <button class="begin-button">Next &rarr;</button>
                `,
                rightHalf: `
                <img src="wisconsin.jpeg" class="image-container">
                <div class="links">
                    <a style="display: block;" href="https://badgerakpsi.org/">Alpha Kappa Psi</a>
                </div>
                <div class="links">
                <a style="display: block;" href="https://www.badgerconsultinguw.com/">Badger Consulting</a>
                </div>
                
            `
            },
            3: {
                leftHalf:  `
                <h1 class="title">Developer</h1>
                <h2 class="subheading">Loop Calculator</h2>
                <a class="bodyText">My senior year of high school I took my first computer science class.
                I quickly fell in love and wanted to do more than the class had to offer. My awesome teacher provided
                me with some resources to self teach Xcode. I spent a few months learning and creating my first app "Loop Calculator".
                This app was for caddys to enter their "loops" or rounds of golf. They can then view the loops on some ugly ui and see loop statistics.
                </a>
                <button class="begin-button">Next &rarr;</button>
                `,
                rightHalf: `
                <img src="loopcalc.jpg" class="image-container">
                <div class="links">
                <a style="display: block;" href="https://apps.apple.com/us/app/loop-calculator/id1571586084">App Store</a>
                </div>
            `
            },
            4: {
                leftHalf:  `
                <h1 class="title">Developer</h1>
                <h2 class="subheading">Arete</h2>
                <a class="bodyText">
                    Spring of my freshman year a high school friend of mine, Robert Sullivan, approached me about an app idea he wanted to persue.
                    That summer, we began learning Flutter to help us build this app. Once we had what we thought was a good understanding of
                     Flutter, we began building the app out. Rob quickly fell into frontend role while I handled the backend and dabbled in fronted when needed.
                     We went though the process for forming an LLC, "Arete Mobile LLC" and got the app up on the app store Summer of 2023. Arete allows 
                     users to select areas of their life they are trying to improve. Users set daily microgoals and reflect on the previous days microgoals. 
                     You can view your progress over time on you graph or in your journal. 
                </a>
                <button class="begin-button">Next &rarr;</button>
                `,
                rightHalf: `
                <img src="icon.png" class="image-container">
                <div class="links">
                <a style="display: block;" href="https://apps.apple.com/us/app/aret%C3%A9/id6444220987">App Store</a>
                </div>
                <div class="links">
                <a style="display: block;" href="https://pages.cs.wisc.edu/~jpo/AreteWebsite/areteMobile.html">Arete Website</a>
                </div>
            `
            },
            5: {
                leftHalf:  `
                <h1 class="title">Developer</h1>
                <h2 class="subheading">Techmates Group</h2>
                <a class="bodyText">
                    This summer(2023), I have had the pleasure to work for Techmates Group. TMG is a remote tech consulting firm
                    out of Ukraine. While they primarly specialize in e-commerce, I was placed on a team for a foortune 500 manufacturing company. The platform
                    our team is working on is used by the company internally as a place to view the status of their assembly lines. I 
                    have worked primarly in fronted for this Angular application. It has been an amazing way to expand my coding skills, but 
                    more importnantly to learn about the software devlopment process in an agile enviorment. 
                </a>
                <button class="begin-button">Next &rarr;</button>
                `,
                rightHalf: `
                <img src="tmg.jpeg" class="image-container">
                <div class="links">
                <a style="display: block;" href="https://www.tmg.io/">TMG Website</a>
                </div>
            `
            },
            6:{
                leftHalf:  `
                <h1 class="title">Human</h1>
                <a class="bodyText">
                    I am also a human born and raised in La Grange IL. In my free time I love to stay active weather its
                    going to the gym, going for a run or just walking to class. I dont consider myself a huge sports person but 
                    am a die hard bears fan, addicted to golf, and a bowler. I enjoy spending time with family and friends.
                    Lastly, I love music, especially live!
                </a>
                `,
                rightHalf: `
                <img src="human.jpeg" class="image-container">
				<div class="links">
					<a style="display: block;" href="resume.pdf">Resume</a>
                </div>
				<div class="links">
					<a style="display: block;" href="https://www.linkedin.com/in/joe-oc-uw25/">LinkedIn</a>
                </div>
            `
            }
        };
        this.leftHalf = document.querySelector('.left-half');
        this.rightHalf = document.querySelector('.right-half');
        this.beginButton = document.querySelector('.begin-button');
        this.#i = 1;
        this.beginButton.addEventListener('click', this.updateContent.bind(this));
    }

    updateContent() {
        this.#i++;
        this.leftHalf.innerHTML = this.numMap[this.#i].leftHalf;

        this.rightHalf.innerHTML = this.numMap[this.#i].rightHalf;
        this.beginButton = document.querySelector('.begin-button');
        this.beginButton.addEventListener('click', this.updateContent.bind(this));
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const dynamicUpdater = new DynamicContentUpdater();
});
