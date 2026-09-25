import { createElement } from "react";
import { FiCoffee, FiGlobe, FiHeart, FiMail } from "react-icons/fi";
import { FaCodepen, FaFacebookF, FaGithub, FaLinkedinIn, FaPatreon, FaYoutube } from "react-icons/fa6";
import { Styled } from "./styled";

const links = [
    ["Portfolio", "https://www.ashishranjan.net/", FiGlobe],
    ["GitHub", "https://github.com/a2rp", FaGithub],
    ["CodePen", "https://codepen.io/ash1198", FaCodepen],
    ["LinkedIn", "https://www.linkedin.com/in/aashishranjan", FaLinkedinIn],
    ["Facebook", "https://www.facebook.com/theash.ashish/", FaFacebookF],
    [
        "YouTube",
        "https://www.youtube.com/@ashishranjan-ashz?sub_confirmation=1",
        FaYoutube,
    ],
    ["Support", "https://a2rp-donation-page.netlify.app/", FiHeart],
    ["Buy Me a Coffee", "https://buymeacoffee.com/a2rp", FiCoffee],
    ["Patreon", "https://patreon.com/a2rp", FaPatreon],
    ["Email", "mailto:ash.ranjan09@gmail.com", FiMail],
];

const Footer = () => (
    <Styled.Wrapper>
        <div className="footerCopy">
            Copyright &copy; {new Date().getFullYear()}{" "}
            <a
                href="https://www.ashishranjan.net/"
                target="_blank"
                rel="noopener noreferrer"
            >
                Ashish Ranjan
            </a>
        </div>
        <div className="footerLinks" aria-label="Social and support links">
            {links.map(([label, href, Icon]) => (
                <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    title={label}
                >
                    {createElement(Icon, { "aria-hidden": true })}
                </a>
            ))}
        </div>
    </Styled.Wrapper>
);

export default Footer;
