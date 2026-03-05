// src/topics/apiTesting/index.jsx
import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiSend,
    FiServer,
    FiShield,
    FiLink,
    FiCheckCircle,
    FiAlertTriangle,
    FiCode,
    FiKey,
    FiFileText,
    FiClock,
} from "react-icons/fi";

const ApiTesting = () => {
    const [open, setOpen] = useState(false);

    const meta = useMemo(() => {
        return {
            title: "API Testing",
            subTitle:
                "Verify HTTP APIs by testing request and response behavior - status codes, headers, body shape, auth, and error handling.",
            chips: [
                { icon: <FiServer />, label: "HTTP contracts" },
                { icon: <FiShield />, label: "Auth + security" },
                { icon: <FiClock />, label: "Reliable responses" },
            ],
        };
    }, []);

    return (
        <Styled.Wrapper id="api-testing">
            <Styled.HeaderRow>
                <div className="left">
                    <div className="kicker">
                        <span className="kIcon">
                            <FiSend />
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
                    aria-controls="api-testing-panel"
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
                id="api-testing-panel"
                data-open={open ? "true" : "false"}
            >
                <div className="grid">
                    <div className="card">
                        <div className="cardTitle">
                            <span className="i">
                                <FiLink />
                            </span>
                            <span>What is API testing</span>
                        </div>

                        <div className="text">
                            API testing checks whether an API behaves correctly
                            from the client point of view. You send a request
                            and verify:
                        </div>

                        <ul className="list">
                            <li>
                                - status code (200, 201, 400, 401, 404, 500)
                            </li>
                            <li>
                                - response body shape (JSON fields and types)
                            </li>
                            <li>- headers (content-type, cache-control)</li>
                            <li>
                                - auth behavior (token, cookie, permissions)
                            </li>
                            <li>- error messages and validation</li>
                        </ul>
                    </div>

                    <div className="card">
                        <div className="cardTitle">
                            <span className="i">
                                <FiCheckCircle />
                            </span>
                            <span>What good API tests cover</span>
                        </div>

                        <ul className="list">
                            <li>
                                - happy path - correct request returns correct
                                data
                            </li>
                            <li>- bad input - validation errors are correct</li>
                            <li>
                                - auth - protected routes block unauthorized
                                users
                            </li>
                            <li>
                                - permissions - role based access is enforced
                            </li>
                            <li>
                                - edge cases - empty lists, large payloads,
                                missing records
                            </li>
                        </ul>

                        <div className="note">
                            Always test both success and failure behavior.
                            Production bugs usually happen in failure paths.
                        </div>
                    </div>

                    <div className="card wide">
                        <div className="cardTitle">
                            <span className="i">
                                <FiFileText />
                            </span>
                            <span>Contract mindset</span>
                        </div>

                        <div className="text">
                            Think of an API as a contract between frontend and
                            backend. If the backend changes response shape, the
                            frontend can break. API tests protect this contract.
                        </div>

                        <div className="compare">
                            <div className="row">
                                <div className="k">Request</div>
                                <div className="v">
                                    method, url, headers, query params, body
                                </div>
                            </div>
                            <div className="row">
                                <div className="k">Response</div>
                                <div className="v">
                                    status, headers, JSON schema, error format
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card wide">
                        <div className="cardTitle">
                            <span className="i">
                                <FiCode />
                            </span>
                            <span>Example 1 - test a GET endpoint</span>
                        </div>

                        <div className="text">
                            A basic API test verifies that the endpoint returns
                            correct status code and response JSON.
                        </div>

                        <pre className="code">
                            {`// pseudo example using a request helper (supertest-like)
//
// GET /health should return 200 and a predictable payload.

test("GET /health returns ok", async () => {
    const res = await request(app).get("/health");

    expect(res.status).toBe(200);

    // contract check
    expect(res.body).toEqual({
        ok: true
    });
});`}
                        </pre>

                        <div className="note">
                            This is a contract test. If the health route
                            changes, the test fails and warns you early.
                        </div>
                    </div>

                    <div className="card wide">
                        <div className="cardTitle">
                            <span className="i">
                                <FiKey />
                            </span>
                            <span>
                                Example 2 - test auth and protected routes
                            </span>
                        </div>

                        <div className="text">
                            API tests should verify correct behavior for:
                        </div>

                        <ul className="list">
                            <li>- missing auth token or cookie</li>
                            <li>- invalid token</li>
                            <li>- valid token but not enough permission</li>
                        </ul>

                        <pre className="code">
                            {`// pseudo example
//
// GET /me requires authentication.

test("GET /me without auth returns 401", async () => {
    const res = await request(app).get("/me");
    expect(res.status).toBe(401);
    expect(res.body.message).toBeDefined();
});

test("GET /me with auth returns profile", async () => {
    const token = await createTestToken({ userId: 10 });

    const res = await request(app)
        .get("/me")
        .set("Authorization", \`Bearer \${token}\`);

    expect(res.status).toBe(200);
    expect(res.body.userId).toBe(10);
});`}
                        </pre>
                    </div>

                    <div className="card">
                        <div className="cardTitle">
                            <span className="i">
                                <FiAlertTriangle />
                            </span>
                            <span>Common API testing mistakes</span>
                        </div>

                        <ul className="list">
                            <li>- only testing happy path</li>
                            <li>- asserting exact error text too strictly</li>
                            <li>- sharing test data between tests (flaky)</li>
                            <li>- not resetting database state</li>
                            <li>- ignoring headers and content type</li>
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
                            <li>- keep response shape stable and documented</li>
                            <li>
                                - use test database or isolated state per suite
                            </li>
                            <li>- use factories for creating test data</li>
                            <li>- assert key fields, not every field</li>
                            <li>- cover status codes and error formats</li>
                        </ul>

                        <div className="note">
                            Test what clients depend on - status codes, field
                            names, types, and error formats.
                        </div>
                    </div>
                </div>

                <div className="footerHint">
                    <span className="hIcon">
                        <FiSend />
                    </span>
                    <span>
                        API tests protect contracts between services and clients
                        - they prevent silent breaking changes.
                    </span>
                </div>
            </Styled.Panel>
        </Styled.Wrapper>
    );
};

export default ApiTesting;
