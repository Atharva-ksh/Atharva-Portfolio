import { MailIcon, GithubIcon, LinkedInIcon } from '@heroicons/react/outline';
import { PhoneIcon } from '@heroicons/react/solid';

function Footer () {
    let phone = '949-659-7894';
    return (
        <footer className="bg-gray-900 text-gray-300 py-4 text-center flex justify-evenly">
            <a href="https://github.com/Atharva-ksh"><img src='/images/github.png' className="h-6 w-6 inline rounded-lg" /></a>     
            <a href="https://www.linkedin.com/in/atharva-kshirsagar/"> <img src='/images/linkedin.png' className="h-6 w-6 inline rounded-lg" /></a>     
            <a href="mailto:akshirs1@uci.edu"> <MailIcon className="h-6 w-6 inline" /></a>      
            <a href={"tel:" + phone}> <PhoneIcon className="h-6 w-6 inline" /></a>      
        © All rights reserved.
        </footer>
    )
}

export default Footer;