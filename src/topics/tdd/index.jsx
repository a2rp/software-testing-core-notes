// src/topics/tdd/index.jsx
import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiRepeat,
    FiXCircle,
    FiCheckCircle,
    FiTool,
    FiEdit3,
    FiZap,
    FiAlertTriangle,
    FiCode,
    FiTarget,
    FiLayers,
} from "react-icons/fi";

const Tdd = () => {
    const [open, setOpen] = useState(false);

    const meta = useMemo(() => {
        return {
            title: "TDD",
            subTitle:
                "Test Driven Development - write tests first, then write the simplest code to pass, then refactor safely.",
            chips: [
                { icon: <FiRepeat />, label: "Red - Green - Refactor" },
                { icon: <FiZap />, label: "Fast feedback" },
                { icon: <FiTool />, label: "Refactor safe" },
            ],
        };
    }, []);

    return (
        <Styled.Wrapper id="tdd">
            <Styled.HeaderRow>
                <div className="left">
                    <div className="kicker">
                        <span className="kIcon">
                            <FiRepeat />
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
                    aria-controls="tdd-panel"
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

            <Styled.Panel id="tdd-panel" data-open={open ? "true" : "false"}>
                <div className="grid">
                    <div className="card">
                        <div className="cardTitle">
                            <span className="i">
                                <FiTarget />
                            </span>
                            <span>What is TDD</span>
                        </div>

                        <div className="text">
                            TDD is a development workflow where you:
                        </div>

                        <ul className="list">
                            <li>- write a test for a tiny requirement</li>
                            <li>- run it and watch it fail</li>
                            <li>- write minimal code to make it pass</li>
                            <li>- refactor the code while tests stay green</li>
                        </ul>

                        <div className="note">
                            The test becomes an executable specification of the
                            behavior.
                        </div>
                    </div>

                    <div className="card">
                        <div className="cardTitle">
                            <span className="i">
                                <FiRepeat />
                            </span>
                            <span>Red - Green - Refactor</span>
                        </div>

                        <div className="flow">
                            <div className="step">
                                <div className="badge red">
                                    <FiXCircle />
                                    <span>Red</span>
                                </div>
                                <div className="desc">
                                    Write a test that fails. This proves the
                                    test can catch the missing behavior.
                                </div>
                            </div>

                            <div className="step">
                                <div className="badge green">
                                    <FiCheckCircle />
                                    <span>Green</span>
                                </div>
                                <div className="desc">
                                    Write the simplest code that passes the
                                    test. No extra features.
                                </div>
                            </div>

                            <div className="step">
                                <div className="badge refactor">
                                    <FiTool />
                                    <span>Refactor</span>
                                </div>
                                <div className="desc">
                                    Improve structure, remove duplication,
                                    rename things, keep tests passing.
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card wide">
                        <div className="cardTitle">
                            <span className="i">
                                <FiCode />
                            </span>
                            <span>
                                Example - build a tiny function using TDD
                            </span>
                        </div>

                        <div className="text">
                            Requirement: create a function{" "}
                            <span className="inlineCode">isEven(n)</span> that
                            returns true for even numbers.
                        </div>

                        <pre className="code">
                            {`// Step 1 - Red (write a failing test)
test("isEven returns true for 2", () => {
    expect(isEven(2)).toBe(true);
});

// Step 2 - Green (minimal implementation)
export const isEven = (n) => {
    return n % 2 === 0;
};

// Step 3 - Refactor (if needed)
// for this case, it's already simple, so no refactor needed`}
                        </pre>

                        <div className="note">
                            TDD encourages building features in small slices.
                            Each slice becomes safe to change later.
                        </div>
                    </div>

                    <div className="card wide">
                        <div className="cardTitle">
                            <span className="i">
                                <FiEdit3 />
                            </span>
                            <span>TDD micro loop and scope</span>
                        </div>

                        <div className="text">
                            TDD works best when you keep iterations tiny:
                        </div>

                        <ul className="list">
                            <li>- one test per behavior</li>
                            <li>- minimal code per test</li>
                            <li>- refactor after each green state</li>
                        </ul>

                        <div className="text">
                            If you write 20 tests first, you are not doing TDD.
                            You are just writing tests.
                        </div>
                    </div>

                    <div className="card">
                        <div className="cardTitle">
                            <span className="i">
                                <FiLayers />
                            </span>
                            <span>TDD vs writing tests later</span>
                        </div>

                        <div className="text">
                            Writing tests later is still useful, but TDD changes
                            how you design code.
                        </div>

                        <ul className="list">
                            <li>- forces dependency injection naturally</li>
                            <li>- reduces tight coupling</li>
                            <li>- encourages small functions</li>
                        </ul>
                    </div>

                    <div className="card">
                        <div className="cardTitle">
                            <span className="i">
                                <FiAlertTriangle />
                            </span>
                            <span>Common mistakes</span>
                        </div>

                        <ul className="list">
                            <li>- writing tests for implementation details</li>
                            <li>- writing too much code before tests</li>
                            <li>- skipping refactor step</li>
                            <li>- writing huge tests that cover everything</li>
                            <li>- using TDD for UI pixel perfect behavior</li>
                        </ul>

                        <div className="note">
                            TDD is strongest for business logic, rules, and
                            service layers.
                        </div>
                    </div>

                    <div className="card wide">
                        <div className="cardTitle">
                            <span className="i">
                                <FiTool />
                            </span>
                            <span>Where TDD shines</span>
                        </div>

                        <ul className="list">
                            <li>- complex business rules</li>
                            <li>- validators and parsers</li>
                            <li>- pricing and billing logic</li>
                            <li>- authorization and permission rules</li>
                            <li>- state machines and workflows</li>
                        </ul>

                        <div className="note">
                            TDD is not a religion. Use it where it gives you
                            value.
                        </div>
                    </div>
                </div>

                <div className="footerHint">
                    <span className="hIcon">
                        <FiRepeat />
                    </span>
                    <span>
                        TDD is a loop: define behavior with a test, make it pass
                        quickly, then refactor with confidence.
                    </span>
                </div>
            </Styled.Panel>
        </Styled.Wrapper>
    );
};

export default Tdd;
