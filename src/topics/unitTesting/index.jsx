// src/topics/unitTesting/index.jsx
import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiCheckCircle,
    FiBox,
    FiCpu,
    FiCode,
    FiAlertTriangle,
    FiZap,
    FiHelpCircle,
} from "react-icons/fi";

const UnitTesting = () => {
    const [open, setOpen] = useState(false);

    const meta = useMemo(() => {
        return {
            title: "Unit Testing",
            subTitle:
                "Test a single unit of code (function or class method) in isolation using fast, repeatable checks.",
            chips: [
                { icon: <FiBox />, label: "Small scope" },
                { icon: <FiZap />, label: "Fast feedback" },
                { icon: <FiCpu />, label: "Runs locally" },
            ],
        };
    }, []);

    return (
        <Styled.Wrapper id="unit-testing">
            <Styled.HeaderRow>
                <div className="left">
                    <div className="kicker">
                        <span className="kIcon">
                            <FiCheckCircle />
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
                    aria-controls="unit-testing-panel"
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
                id="unit-testing-panel"
                data-open={open ? "true" : "false"}
            >
                <div className="grid">
                    <div className="card">
                        <div className="cardTitle">
                            <span className="i">
                                <FiHelpCircle />
                            </span>
                            <span>What is a unit</span>
                        </div>

                        <div className="text">
                            In unit testing, a "unit" usually means:
                        </div>

                        <ul className="list">
                            <li>- a single function</li>
                            <li>- a method of a class</li>
                            <li>- a tiny module that does one job</li>
                        </ul>

                        <div className="text">
                            Unit tests try to keep the unit isolated so the test
                            fails only when that unit is wrong.
                        </div>
                    </div>

                    <div className="card">
                        <div className="cardTitle">
                            <span className="i">
                                <FiAlertTriangle />
                            </span>
                            <span>What unit tests should not do</span>
                        </div>

                        <ul className="list">
                            <li>- do not hit real databases</li>
                            <li>- do not call real network APIs</li>
                            <li>- do not depend on system time</li>
                            <li>- do not depend on random values</li>
                        </ul>

                        <div className="note">
                            If you must use these dependencies, mock them or
                            test them in integration tests.
                        </div>
                    </div>

                    <div className="card wide">
                        <div className="cardTitle">
                            <span className="i">
                                <FiCode />
                            </span>
                            <span>Example 1 - pure function</span>
                        </div>

                        <div className="text">
                            Pure functions are easiest to unit test because they
                            only depend on inputs and return outputs.
                        </div>

                        <pre className="code">
                            {`// file: price.js
export const calcTotal = (items) => {
    // items: [{ price: number, qty: number }]
    return items.reduce((sum, it) => sum + it.price * it.qty, 0);
};

// file: price.test.js (pseudo example)
import { calcTotal } from "./price";

test("calcTotal adds price * qty for all items", () => {
    const items = [
        { price: 100, qty: 2 },
        { price: 50, qty: 3 }
    ];
    expect(calcTotal(items)).toBe(350);
});`}
                        </pre>

                        <div className="text">What we are checking:</div>

                        <ul className="list">
                            <li>- correct math for multiple items</li>
                            <li>- deterministic output for given input</li>
                        </ul>
                    </div>

                    <div className="card wide">
                        <div className="cardTitle">
                            <span className="i">
                                <FiCpu />
                            </span>
                            <span>Example 2 - function with dependency</span>
                        </div>

                        <div className="text">
                            If your function depends on something external like
                            "fetch" or a database client, mock the dependency.
                        </div>

                        <pre className="code">
                            {`// file: userService.js
export const makeUserService = ({ http }) => {
    const getUserName = async (id) => {
        const res = await http.get(\`/users/\${id}\`);
        return res.data.name;
    };

    return { getUserName };
};

// file: userService.test.js (pseudo example)
test("getUserName returns name from API response", async () => {
    const httpMock = {
        get: async () => ({ data: { name: "Neha" } })
    };

    const svc = makeUserService({ http: httpMock });
    await expect(svc.getUserName(10)).resolves.toBe("Neha");
});`}
                        </pre>

                        <div className="note">
                            Key idea: inject dependency, then replace it with a
                            mock in unit tests.
                        </div>
                    </div>

                    <div className="card">
                        <div className="cardTitle">
                            <span className="i">
                                <FiCheckCircle />
                            </span>
                            <span>AAA pattern</span>
                        </div>

                        <div className="text">Most unit tests follow AAA:</div>

                        <ul className="list">
                            <li>- Arrange - set up inputs and mocks</li>
                            <li>- Act - call the function</li>
                            <li>- Assert - check the output</li>
                        </ul>

                        <div className="text">
                            This makes tests readable and consistent.
                        </div>
                    </div>

                    <div className="card">
                        <div className="cardTitle">
                            <span className="i">
                                <FiBox />
                            </span>
                            <span>What makes a good unit test</span>
                        </div>

                        <ul className="list">
                            <li>- tests one idea, not ten</li>
                            <li>- name describes behavior</li>
                            <li>- stable, no flaky timing</li>
                            <li>- fast, runs in milliseconds</li>
                            <li>- clear failure message</li>
                        </ul>
                    </div>

                    <div className="card wide">
                        <div className="cardTitle">
                            <span className="i">
                                <FiCode />
                            </span>
                            <span>Common mistakes</span>
                        </div>

                        <ul className="list">
                            <li>
                                - testing implementation details instead of
                                behavior
                            </li>
                            <li>
                                - too much mocking until test becomes
                                meaningless
                            </li>
                            <li>
                                - coupling tests to exact UI markup (use
                                integration for that)
                            </li>
                            <li>- writing one giant test for everything</li>
                        </ul>

                        <div className="note">
                            Rule of thumb: test behavior and outcomes, not
                            internal lines of code.
                        </div>
                    </div>
                </div>

                <div className="footerHint">
                    <span className="hIcon">
                        <FiCheckCircle />
                    </span>
                    <span>
                        Unit tests are your first safety net. They keep
                        refactoring safe and development fast.
                    </span>
                </div>
            </Styled.Panel>
        </Styled.Wrapper>
    );
};

export default UnitTesting;
