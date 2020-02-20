import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const sidebar = {
  title: 'Hi my name is Amjad',
  aboutMe: `I'm a Self-motivated team player with excellent communication skills and above all a curious learner, Im tech savey and most of my aquired skills are self-taught. recently graduated from Trilogy UPenn LPS Full Stack Coding Bootcamp, take a look around my work & if you like what you see please contact me.`,
  image: '/images/profile.png',
  social: [
    {
      name: 'GitHub',
      icon: GitHubIcon,
      url: 'https://github.com/AmjadShaaban'
    },
    { name: 'Twitter', icon: TwitterIcon, url: 'https://twitter.com/daAmjad' },
    {
      name: 'LinkedIn',
      icon: LinkedInIcon,
      url: 'https://www.linkedin.com/in/amjad-shaaban'
    }
  ]
};

export default sidebar;
