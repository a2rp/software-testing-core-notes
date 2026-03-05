// src/topics/integrationTesting/index.jsx
import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiLayers,
    FiLink2,
    FiServer,
    FiDatabase,
    FiGitMerge,
    FiAlertTriangle,
    FiCheckCircle,
    FiCode,
    FiShield,
} from "react-icons/fi";

const IntegrationTesting = () => {
    const [open, setOpen] = useState(false);

    const meta = useMemo(() => {
        return {
            title: "Integration Testing",
            subTitle:
                "Test how multiple units work together - services, modules, database layers, and APIs - to catch interface bugs.",
            chips: [
                { icon: <FiGitMerge />, label: "Works together" },
                { icon: <FiServer />, label: "Real-ish deps" },
                { icon: <FiShield />, label: "Confidence" },
            ],
        };
    }, []);

    return (
        <Styled.Wrapper id="integration-testing">
            <Styled.HeaderRow>
                <div className="left">
                    <div className="kicker">
                        <span className="kIcon">
                            <FiLayers />
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
                    aria-controls="integration-testing-panel"
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
                id="integration-testing-panel"
                data-open={open ? "true" : "false"}
            >
                <div className="grid">
                    <div className="card">
                        <div className="cardTitle">
                            <span className="i">
                                <FiLink2 />
                            </span>
                            <span>What is integration testing</span>
                        </div>

                        <div className="text">
                            Integration testing verifies that multiple parts of
                            a system work correctly together. The goal is to
                            catch bugs that happen at boundaries:
                        </div>

                        <ul className="list">
                            <li>- API layer to service layer</li>
                            <li>- service layer to database layer</li>
                            <li>- one module to another module</li>
                            <li>- service to external dependency adapters</li>
                        </ul>
                    </div>

                    <div className="card">
                        <div className="cardTitle">
                            <span className="i">
                                <FiCheckCircle />
                            </span>
                            <span>When to prefer integration tests</span>
                        </div>

                        <ul className="list">
                            <li>
                                - when bugs often happen in wiring and config
                            </li>
                            <li>- when API contracts can break</li>
                            <li>- when data mapping and validation matter</li>
                            <li>
                                - when multiple layers combine to produce
                                behavior
                            </li>
                        </ul>

                        <div className="note">
                            Unit tests check correctness of small logic.
                            Integration tests check correctness of
                            collaboration.
                        </div>
                    </div>

                    <div className="card wide">
                        <div className="cardTitle">
                            <span className="i">
                                <FiGitMerge />
                            </span>
                            <span>Unit vs integration - quick compare</span>
                        </div>

                        <div className="compare">
                            <div className="row">
                                <div className="k">Scope</div>
                                <div className="v">
                                    Unit - one function or class method -
                                    Integration - multiple modules working
                                    together
                                </div>
                            </div>
                            <div className="row">
                                <div className="k">Dependencies</div>
                                <div className="v">
                                    Unit - mocked - Integration - real-ish (in
                                    memory db, test containers, stub servers)
                                </div>
                            </div>
                            <div className="row">
                                <div className="k">Speed</div>
                                <div className="v">
                                    Unit - fastest - Integration - slower but
                                    higher confidence
                                </div>
                            </div>
                            <div className="row">
                                <div className="k">Bugs caught</div>
                                <div className="v">
                                    Unit - logic bugs - Integration - wiring,
                                    schema, serialization, config bugs
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card wide">
                        <div className="cardTitle">
                            <span className="i">
                                <FiCode />
                            </span>
                            <span>Example 1 - API route + service</span>
                        </div>

                        <div className="text">
                            Suppose you have an API route that calls a service.
                            An integration test can spin up the app and call the
                            route to verify the whole flow.
                        </div>

                        <pre className="code">
                            {`// file: app.js (pseudo)
import express from "express";
import { makeUserService } from "./userService.js";

export const makeApp = ({ userService }) => {
    const app = express();
    app.use(express.json());

    app.get("/users/:id", async (req, res) => {
        const user = await userService.getById(Number(req.params.id));
        if (!user) return res.status(404).json({ message: "Not found" });
        return res.json({ id: user.id, name: user.name });
    });

    return app;
};

// integration test (pseudo)
test("GET /users/:id returns user data", async () => {
    const fakeUsers = [{ id: 1, name: "Neha" }];
    const userService = {
        getById: async (id) => fakeUsers.find((u) => u.id === id) || null
    };

    const app = makeApp({ userService });

    // supertest-like call (pseudo)
    const res = await request(app).get("/users/1");
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ id: 1, name: "Neha" });
});`}
                        </pre>

                        <div className="note">
                            This test checks routing, parameter parsing, status
                            codes, JSON shape, and service integration.
                        </div>
                    </div>

                    <div className="card wide">
                        <div className="cardTitle">
                            <span className="i">
                                <FiDatabase />
                            </span>
                            <span>
                                Example 2 - service + database (in memory)
                            </span>
                        </div>

                        <div className="text">
                            For integration tests, you can use an in memory
                            database or a test database. The key idea is: verify
                            real queries and schema behavior.
                        </div>

                        <pre className="code">
                            {`// file: repo.js (pseudo)
export const makeUserRepo = ({ db }) => {
    const create = async ({ name }) => {
        const id = await db.insertUser({ name });
        return { id, name };
    };

    const getById = async (id) => db.findUserById(id);

    return { create, getById };
};

// integration test (pseudo)
test("create then read user", async () => {
    const db = makeInMemoryDb(); // fake db with real constraints simulated
    const repo = makeUserRepo({ db });

    const created = await repo.create({ name: "Niraj" });
    const found = await repo.getById(created.id);

    expect(found).toEqual({ id: created.id, name: "Niraj" });
});`}
                        </pre>

                        <div className="note">
                            If you replace makeInMemoryDb with a real dockerized
                            database in CI, this becomes an even stronger
                            integration test.
                        </div>
                    </div>

                    <div className="card">
                        <div className="cardTitle">
                            <span className="i">
                                <FiAlertTriangle />
                            </span>
                            <span>Common pain points</span>
                        </div>

                        <ul className="list">
                            <li>
                                - tests become slow if too many layers are
                                included
                            </li>
                            <li>- flaky failures due to timing or network</li>
                            <li>
                                - shared test database state causing collisions
                            </li>
                            <li>- hard to debug if logs are not captured</li>
                        </ul>
                    </div>

                    <div className="card">
                        <div className="cardTitle">
                            <span className="i">
                                <FiShield />
                            </span>
                            <span>Best practices</span>
                        </div>

                        <ul className="list">
                            <li>
                                - use a fresh database per test or per test
                                suite
                            </li>
                            <li>- clean up state (transactions or reset)</li>
                            <li>- keep test data small and readable</li>
                            <li>- assert on behavior and contract</li>
                            <li>- run integration tests in CI pipeline</li>
                        </ul>

                        <div className="note">
                            Keep integration tests fewer than unit tests. They
                            are heavier but more valuable per test.
                        </div>
                    </div>

                    <div className="card wide">
                        <div className="cardTitle">
                            <span className="i">
                                <FiServer />
                            </span>
                            <span>Test pyramid in practice</span>
                        </div>

                        <div className="text">
                            A common guideline is the test pyramid:
                        </div>

                        <ul className="list">
                            <li>- many unit tests</li>
                            <li>- some integration tests</li>
                            <li>- few end to end tests</li>
                        </ul>

                        <div className="note">
                            Integration tests sit in the middle. They are slower
                            than unit tests but much faster than full browser
                            based end to end tests.
                        </div>
                    </div>
                </div>

                <div className="footerHint">
                    <span className="hIcon">
                        <FiLayers />
                    </span>
                    <span>
                        Integration tests protect the seams of your system -
                        routing, serialization, schema, configuration, and
                        module boundaries.
                    </span>
                </div>
            </Styled.Panel>
        </Styled.Wrapper>
    );
};

export default IntegrationTesting;
