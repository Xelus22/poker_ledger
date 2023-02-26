import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faDiscord, faYoutube, faInstagram, faTwitter, faTwitch, faGithub } from '@fortawesome/free-brands-svg-icons'

class Footer extends React.Component {
    render() {
        return(
            <nav id="footer" className="bg-[#161819]">
                <div className="container mx-auto pt-8 pb-4">
                    <div className="dark:text-white items-center justify-center text-center"
                        style={{
                            paddingBottom: '20px',
                        }}>
                        © {new Date().getFullYear()} Xelus
                    </div>
                    <div className="flex flex-wrap justify-center sm:-mx-1 md:-mx-px lg:-mx-2 xl:-mx-2 max-w-full">
                        {/* <div className="py-3 px-3">
                            <a href="mailto:xelus22@gmail.com" className="dark:text-white dark:hover:text-gray-400 text-white hover:text-gray-400 fa-2x">
                            <FontAwesomeIcon icon={faEnvelope}/>
                            </a>
                        </div> */}
                        <div className="py-3 px-3">
                            <a href="https://twitter.com/xelus22" className="dark:text-white dark:hover:text-gray-400 text-white hover:text-gray-400 fa-2x">
                            <FontAwesomeIcon icon={faTwitter}/>
                            </a>
                        </div>
                        <div className="py-3 px-3">
                            <a href="https://instagram.com/xelus_tech" className="dark:text-white dark:hover:text-gray-400 text-white hover:text-gray-400 fa-2x">
                            <FontAwesomeIcon icon={faInstagram}/>
                            </a>
                        </div>
                        <div className="py-3 px-3">
                            <a href="https://twitch.com/xelus22" className="dark:text-white dark:hover:text-gray-400 text-white hover:text-gray-400 fa-2x">
                            <FontAwesomeIcon icon={faTwitch}/>
                            </a>
                        </div>
                        <div className="py-3 px-3">
                            <a href="https://keyboardtreehouse.com/discord" className="dark:text-white dark:hover:text-gray-400 text-white hover:text-gray-400 fa-2x">
                            <FontAwesomeIcon icon={faDiscord}/>
                            </a>
                        </div>
                        <div className="py-3 px-3">
                            <a href="https://github.com/xelus22" className="dark:text-white dark:hover:text-gray-400 text-white hover:text-gray-400 fa-2x">
                            <FontAwesomeIcon icon={faGithub}/>
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Footer