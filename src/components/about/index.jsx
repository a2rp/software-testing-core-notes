import React from "react";
import { Styled } from "./styled";
import { FiCheckCircle, FiShield, FiLayers, FiActivity } from "react-icons/fi";

const About = () => {
    return (
        <Styled.Wrapper>
            <Styled.Container>
                <Styled.Header>Software Testing Core Notes</Styled.Header>

                <Styled.SubHeader>
                    Understanding how software is verified, validated, and made
                    reliable in real production systems.
                </Styled.SubHeader>

                <Styled.Grid>
                    <Styled.Card>
                        <div className="icon">
                            <FiCheckCircle />
                        </div>
                        <div className="title">Unit Testing</div>
                        <p>
                            Unit testing verifies small pieces of code such as
                            functions, utilities, and classes. These tests run
                            fast and help detect bugs early during development.
                        </p>
                    </Styled.Card>

                    <Styled.Card>
                        <div className="icon">
                            <FiLayers />
                        </div>
                        <div className="title">Integration Testing</div>
                        <p>
                            Integration tests verify how multiple components
                            interact with each other such as APIs, databases,
                            and services working together.
                        </p>
                    </Styled.Card>

                    <Styled.Card>
                        <div className="icon">
                            <FiShield />
                        </div>
                        <div className="title">Quality Assurance</div>
                        <p>
                            Testing improves reliability and confidence in
                            software systems. It ensures that changes do not
                            break existing functionality.
                        </p>
                    </Styled.Card>

                    <Styled.Card>
                        <div className="icon">
                            <FiActivity />
                        </div>
                        <div className="title">Coverage and Monitoring</div>
                        <p>
                            Code coverage tools help identify which parts of the
                            system are tested and which parts still need
                            validation.
                        </p>
                    </Styled.Card>
                </Styled.Grid>
            </Styled.Container>
        </Styled.Wrapper>
    );
};

export default About;
