// src/components/header/index.jsx
import { useEffect, useMemo, useState } from "react";
import { FiCheckCircle, FiMoon, FiShield, FiSun } from "react-icons/fi";
import { Styled } from "./styled";

const THEME_LS_KEY = "software-testing-core-notes-theme";

const Header = () => {
    const [theme, setTheme] = useState(() =>
        localStorage.getItem(THEME_LS_KEY) || "dark",
    );

    useEffect(() => {
        document.documentElement.toggleAttribute(
            "data-theme",
            theme === "light",
        );
        localStorage.setItem(THEME_LS_KEY, theme);
    }, [theme]);

    const nextTheme = useMemo(
        () => (theme === "light" ? "dark" : "light"),
        [theme],
    );

    return (
        <Styled.Wrapper>
            <Styled.Main>
                <div className="leftSide">
                    <div className="logoNameWrapper">
                        <div className="logoWrapper">
                            <img
                                src={import.meta.env.BASE_URL + "logo.png"}
                                alt="Software testing core notes"
                            />
                        </div>

                        <div className="nameWrapper">
                            <div className="title">
                                software-testing-core-notes
                            </div>
                            <div className="subTitle">
                                Unit testing, integration, API testing, TDD,
                                mocking, and coverage
                            </div>
                        </div>

                        <div className="pillRow">
                            <div className="stat">
                                <span className="sIcon">
                                    <FiCheckCircle />
                                </span>
                                <span>Tests</span>
                            </div>
                            <div className="stat">
                                <span className="sIcon">
                                    <FiShield />
                                </span>
                                <span>Quality</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="rightSide">
                    <button
                        type="button"
                        className="themeToggleBtn"
                        onClick={() =>
                            setTheme((currentTheme) =>
                                currentTheme === "light" ? "dark" : "light",
                            )
                        }
                        aria-label={"Switch to " + nextTheme + " theme"}
                        title={"Switch to " + nextTheme}
                    >
                        <span className="icon">
                            {theme === "light" ? <FiMoon /> : <FiSun />}
                        </span>
                        <span className="label">
                            {theme === "light" ? "Light" : "Dark"}
                        </span>
                    </button>
                </div>
            </Styled.Main>
        </Styled.Wrapper>
    );
};

export default Header;