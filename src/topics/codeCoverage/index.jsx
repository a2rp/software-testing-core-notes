// src/topics/codeCoverage/index.jsx
import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiPieChart,
    FiCheckCircle,
    FiGitBranch,
    FiLayers,
    FiAlertTriangle,
    FiCode,
    FiTarget,
    FiTrendingUp,
    FiShield,
} from "react-icons/fi";

const CodeCoverage = () => {
    const [open, setOpen] = useState(false);

    const meta = useMemo(() => {
        return {
            title: "Code Coverage",
            subTitle:
                "Measure how much of your code runs during tests. Useful signal to find untested areas, not a guarantee of correctness.",
            chips: [
                { icon: <FiPieChart />, label: "Coverage metrics" },
                { icon: <FiTrendingUp />, label: "Visibility" },
                { icon: <FiShield />, label: "Safer changes" },
            ],
        };
    }, []);

    return (
        <Styled.Wrapper id="code-coverage">
            <Styled.HeaderRow>
                <div className="left">
                    <div className="kicker">
                        <span className="kIcon">
                            <FiPieChart />
                        </span>
                        <span>Testing and Quality</span>
                    </div>

                    <h2 className="title">{meta.title}</h2>
                    <p className="subTitle">{meta.subTitle}</p>

                    <div className="chipRow">
                        {meta.chips.map((c) => (
                            <div className="chip" key={c.label}>
                                <span className="cIcon">{c.icon}</span>
                                <span className="cText">{c.label}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <button
                    type="button"
                    className="toggleBtn"
                    onClick={() => setOpen((v) => !v)}
                    aria-expanded={open}
                    aria-controls="code-coverage-panel"
                    title={open ? "Collapse" : "Expand"}
                >
                    <span className="tLabel">
                        {open ? "Collapse" : "Expand"}
                    </span>
                    <span className={`tIcon ${open ? "rot" : ""}`}>
                        <FiChevronDown />
                    </span>
                </button>
            </Styled.HeaderRow>

            <Styled.Panel
                id="code-coverage-panel"
                data-open={open ? "true" : "false"}
            >
                <div className="grid">
                    <div className="card">
                        <div className="cardTitle">
                            <span className="i">
                                <FiTarget />
                            </span>
                            <span>What is code coverage</span>
                        </div>

                        <div className="text">
                            Code coverage tells you which parts of your code
                            were executed when tests ran. If a line never runs,
                            it is not being tested.
                        </div>

                        <div className="note">
                            Coverage is a signal. High coverage does not mean
                            bug free code.
                        </div>
                    </div>

                    <div className="card">
                        <div className="cardTitle">
                            <span className="i">
                                <FiLayers />
                            </span>
                            <span>Common coverage types</span>
                        </div>

                        <ul className="list">
                            <li>- line coverage - which lines executed</li>
                            <li>
                                - function coverage - which functions executed
                            </li>
                            <li>
                                - branch coverage - which paths of if and switch
                                executed
                            </li>
                            <li>
                                - statement coverage - which statements executed
                            </li>
                        </ul>
                    </div>

                    <div className="card wide">
                        <div className="cardTitle">
                            <span className="i">
                                <FiCode />
                            </span>
                            <span>Example - branch coverage matters</span>
                        </div>

                        <div className="text">
                            You can have 100 percent line coverage but still
                            miss a branch. Example:
                        </div>

                        <pre className="code">
                            {`// file: shipping.js
export const shippingFee = (total) => {
    if (total >= 999) return 0;
    return 49;
};

// file: shipping.test.js (bad coverage)
test("shippingFee returns 0 for big total", () => {
    expect(shippingFee(1200)).toBe(0);
});

// This hits only the true branch.
// The else path is untested.`}
                        </pre>

                        <div className="text">
                            Better test adds the other branch:
                        </div>

                        <pre className="code">
                            {`test("shippingFee returns 49 for small total", () => {
    expect(shippingFee(100)).toBe(49);
});`}
                        </pre>

                        <div className="note">
                            Branch coverage protects if and switch logic from
                            hidden bugs.
                        </div>
                    </div>

                    <div className="card wide">
                        <div className="cardTitle">
                            <span className="i">
                                <FiPieChart />
                            </span>
                            <span>How coverage tools work</span>
                        </div>

                        <div className="text">
                            Coverage tools instrument your code (add tracking)
                            and record which lines and branches ran during
                            tests. Then they generate a report.
                        </div>

                        <div className="compare">
                            <div className="row">
                                <div className="k">Local</div>
                                <div className="v">
                                    run tests with coverage and view HTML or
                                    text report
                                </div>
                            </div>
                            <div className="row">
                                <div className="k">CI</div>
                                <div className="v">
                                    upload coverage to a service or fail build
                                    if below threshold
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="cardTitle">
                            <span className="i">
                                <FiAlertTriangle />
                            </span>
                            <span>Coverage traps</span>
                        </div>

                        <ul className="list">
                            <li>- chasing 100 percent coverage blindly</li>
                            <li>
                                - writing useless tests that only execute code
                            </li>
                            <li>- mocking too much and losing real behavior</li>
                            <li>- ignoring critical paths and edge cases</li>
                        </ul>

                        <div className="note">
                            Do not optimize for the number. Optimize for
                            confidence.
                        </div>
                    </div>

                    <div className="card">
                        <div className="cardTitle">
                            <span className="i">
                                <FiCheckCircle />
                            </span>
                            <span>Good coverage targets</span>
                        </div>

                        <ul className="list">
                            <li>- focus on business logic and risky code</li>
                            <li>- ensure error paths are tested</li>
                            <li>- prioritize auth, payments, permissions</li>
                            <li>
                                - cover boundaries: input validation and parsing
                            </li>
                        </ul>

                        <div className="note">
                            A small set of good tests is better than many
                            shallow tests.
                        </div>
                    </div>

                    <div className="card wide">
                        <div className="cardTitle">
                            <span className="i">
                                <FiGitBranch />
                            </span>
                            <span>Thresholds in CI - how teams use it</span>
                        </div>

                        <div className="text">
                            Many teams set minimum thresholds like 70 to 85
                            percent. If coverage drops below threshold, CI
                            fails. This prevents coverage decay.
                        </div>

                        <ul className="list">
                            <li>
                                - do not block early projects with strict
                                thresholds
                            </li>
                            <li>
                                - raise thresholds gradually as repo matures
                            </li>
                            <li>
                                - allow exceptions for tool output and third
                                party code
                            </li>
                        </ul>

                        <div className="note">
                            Use thresholds as guardrails, not as the main goal.
                        </div>
                    </div>
                </div>

                <div className="footerHint">
                    <span className="hIcon">
                        <FiPieChart />
                    </span>
                    <span>
                        Coverage answers: what ran. Tests answer: what is
                        correct. Use both to build confidence.
                    </span>
                </div>
            </Styled.Panel>
        </Styled.Wrapper>
    );
};

export default CodeCoverage;
