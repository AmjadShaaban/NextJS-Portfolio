const main = {
  id: 0,
  title: 'Project PoS',
  body: `Project PoS is a MERN Stack Point of Sale application for small businesses ( MVP Demo for Pizzeria ).
    This MVP was built from scratch in little less than 4 weeks for my bootcamps final project (& my 1st typescript project).`,
  image: '/images/reactts.png',
  repoLink: 'https://github.com/AmjadShaaban/ProjectThree'
};
const featured1 = {
  id: 1,
  title: 'My Corner (This Page)',
  body: `My personal web corner app built using SSR NextJS React coded in Typescript`,
  image: '/images/nextjs.png',
  repoLink: 'https://github.com/AmjadShaaban/NextJS-Portfolio'
};

const featured2 = {
  id: 2,
  title: 'Memory Game',
  body:
    'React memory game app, using bootstrap and css grid to display the images',
  image: '/images/memorygame.png',
  repoLink: 'https://github.com/AmjadShaaban/ReactMemoryGame'
};
const project1 = {
  id: 3,
  title: 'eat my sCRAPe',
  body:
    'Hacker news scraper my 1st MERN stack app, comments are full mongoDB CRUD',
  image: '/images/myscraper.png',
  repoLink: 'https://github.com/AmjadShaaban/eatmyscrape'
};

const project2 = {
  id: 4,
  title: 'JS Trivia Game',
  body: 'Plain old HTML CSS JS(JQuery) trivia game using JS timers',
  image: '/images/triviajs.png',
  repoLink: 'https://github.com/AmjadShaaban/Trivia-JS'
};
const project3 = {
  id: 5,
  title: 'Friend Finder',
  body: `a compatibility-based "FriendFinder" application -- basically a dating app. This full-stack site will take in results from your users' surveys, then compare their answers with those from other users. The app will then display the name and picture of the user with the best overall match.`,
  image: '/images/friendfinder.png',
  repoLink: 'https://github.com/AmjadShaaban/FriendFinder'
};

const featured = [featured1, featured2];
const projects = [project1, project2, project3];
const data = { main, featured, projects };

export default data;
