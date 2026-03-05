// src/topics/mocking/index.jsx
import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiCopy,
    FiCpu,
    FiServer,
    FiDatabase,
    FiShield,
    FiAlertTriangle,
    FiCheckCircle,
    FiCode,
    FiLayers,
    FiZap,
    FiRepeat,
} from "react-icons/fi";

const Mocking = () => {
    const [open, setOpen] = useState(false);

    const meta = useMemo(() => {
        return {
            title: "Mocking",
            subTitle:
                "Replace real dependencies with controlled fakes so tests stay fast, predictable, and focused on behavior.",
            chips: [
                { icon: <FiCpu />, label: "Isolation" },
                { icon: <FiZap />, label: "Deterministic" },
                { icon: <FiShield />, label: "Stable tests" },
            ],
        };
    }, []);

    return (
        <Styled.Wrapper id="mocking">
            <Styled.HeaderRow>
                <div className="left">
                    <div className="kicker">
                        <span className="kIcon">
                            <FiCopy />
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
                    aria-controls="mocking-panel"
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
                id="mocking-panel"
                data-open={open ? "true" : "false"}
            >
                <div className="grid">
                    <div className="card">
                        <div className="cardTitle">
                            <span className="i">
                                <FiLayers />
                            </span>
                            <span>What is mocking</span>
                        </div>

                        <div className="text">
                            Mocking means replacing a real dependency with a
                            fake one during a test. This helps you test one unit
                            in isolation.
                        </div>

                        <ul className="list">
                            <li>
                                - replace real HTTP calls with a fake client
                            </li>
                            <li>
                                - replace real database with an in memory store
                            </li>
                            <li>
                                - replace time and randomness with fixed values
                            </li>
                        </ul>

                        <div className="note">
                            Goal: keep tests fast and predictable.
                        </div>
                    </div>

                    <div className="card">
                        <div className="cardTitle">
                            <span className="i">
                                <FiAlertTriangle />
                            </span>
                            <span>When mocking is necessary</span>
                        </div>

                        <ul className="list">
                            <li>
                                - dependency is slow or expensive (db, network)
                            </li>
                            <li>- dependency is unstable (external API)</li>
                            <li>
                                - dependency is non deterministic (time, random)
                            </li>
                            <li>
                                - dependency causes side effects (email,
                                payments)
                            </li>
                        </ul>

                        <div className="note">
                            If the test calls the real world, the real world
                            will eventually fail you.
                        </div>
                    </div>

                    <div className="card wide">
                        <div className="cardTitle">
                            <span className="i">
                                <FiCode />
                            </span>
                            <span>Example 1 - mock an HTTP client</span>
                        </div>

                        <div className="text">
                            Instead of calling a real API, inject a dependency
                            and mock it.
                        </div>

                        <pre className="code">
                            {`// file: weatherService.js
export const makeWeatherService = ({ http }) => {
    const getTempC = async (city) => {
        const res = await http.get(\`/weather?city=\${city}\`);
        return res.data.tempC;
    };

    return { getTempC };
};

// file: weatherService.test.js (pseudo)
test("getTempC returns temperature from API response", async () => {
    const httpMock = {
        get: async () => ({ data: { tempC: 28 } })
    };

    const svc = makeWeatherService({ http: httpMock });
    await expect(svc.getTempC("Bangalore")).resolves.toBe(28);
});`}
                        </pre>

                        <div className="note">
                            This test is fast because it does not call a real
                            network.
                        </div>
                    </div>

                    <div className="card wide">
                        <div className="cardTitle">
                            <span className="i">
                                <FiRepeat />
                            </span>
                            <span>Mock vs stub vs fake - simple meaning</span>
                        </div>

                        <div className="compare">
                            <div className="row">
                                <div className="k">Stub</div>
                                <div className="v">
                                    returns fixed data, no behavior tracking -
                                    example: a function that always returns 10
                                </div>
                            </div>
                            <div className="row">
                                <div className="k">Mock</div>
                                <div className="v">
                                    returns data and tracks how it was called -
                                    example: verify it was called with correct
                                    args
                                </div>
                            </div>
                            <div className="row">
                                <div className="k">Fake</div>
                                <div className="v">
                                    a working lightweight implementation -
                                    example: in memory database
                                </div>
                            </div>
                        </div>

                        <div className="note">
                            In real teams, people often say "mock" for all
                            three. Context matters.
                        </div>
                    </div>

                    <div className="card wide">
                        <div className="cardTitle">
                            <span className="i">
                                <FiDatabase />
                            </span>
                            <span>
                                Example 2 - fake database instead of real DB
                            </span>
                        </div>

                        <div className="text">
                            Unit tests should avoid real databases. A fake can
                            simulate storage behavior.
                        </div>

                        <pre className="code">
                            {`// file: userRepo.js
export const makeUserRepo = ({ store }) => {
    const create = async ({ id, name }) => {
        store.set(id, { id, name });
        return { id, name };
    };

    const getById = async (id) => {
        return store.get(id) || null;
    };

    return { create, getById };
};

// test (pseudo)
test("create then read user using fake store", async () => {
    const store = new Map();
    const repo = makeUserRepo({ store });

    await repo.create({ id: 1, name: "Neha" });
    await expect(repo.getById(1)).resolves.toEqual({ id: 1, name: "Neha" });
});`}
                        </pre>

                        <div className="note">
                            This is a fake that behaves like storage without
                            requiring DB setup.
                        </div>
                    </div>

                    <div className="card">
                        <div className="cardTitle">
                            <span className="i">
                                <FiShield />
                            </span>
                            <span>Good mocking practices</span>
                        </div>

                        <ul className="list">
                            <li>
                                - mock only what you do not own (network, db,
                                time)
                            </li>
                            <li>- keep mock behavior minimal and readable</li>
                            <li>- assert on behavior, not internal calls</li>
                            <li>
                                - prefer dependency injection over global
                                mocking
                            </li>
                            <li>- reset mocks between tests</li>
                        </ul>
                    </div>

                    <div className="card">
                        <div className="cardTitle">
                            <span className="i">
                                <FiAlertTriangle />
                            </span>
                            <span>Mocking pitfalls</span>
                        </div>

                        <ul className="list">
                            <li>- over mocking makes tests meaningless</li>
                            <li>
                                - mocking implementation details causes brittle
                                tests
                            </li>
                            <li>
                                - mock returns unrealistic data that never
                                happens in production
                            </li>
                            <li>- tests pass but integration fails</li>
                        </ul>

                        <div className="note">
                            If you mock too much, you stop testing reality and
                            start testing your imagination.
                        </div>
                    </div>

                    <div className="card wide">
                        <div className="cardTitle">
                            <span className="i">
                                <FiCheckCircle />
                            </span>
                            <span>Rule of thumb</span>
                        </div>

                        <div className="text">
                            Use mocking to isolate the unit, but keep at least
                            some integration tests to ensure real dependencies
                            still work together.
                        </div>

                        <ul className="list">
                            <li>- unit tests: lots, fast, heavily isolated</li>
                            <li>- integration tests: fewer, more realistic</li>
                            <li>- end to end tests: fewest, slowest</li>
                        </ul>
                    </div>
                </div>

                <div className="footerHint">
                    <span className="hIcon">
                        <FiCopy />
                    </span>
                    <span>
                        Mocking gives you control. Use it to remove randomness
                        and slowness, but do not replace reality completely.
                    </span>
                </div>
            </Styled.Panel>
        </Styled.Wrapper>
    );
};

export default Mocking;
