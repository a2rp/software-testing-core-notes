// App.jsx
import React, { useRef } from "react";
import { Styled } from "./App.styled";
import Header from "./components/header";
import Footer from "./components/footer";
import About from "./components/about";
import GoToTop from "./components/goToTop";
import UnitTesting from "./topics/unitTesting";
import IntegrationTesting from "./topics/integrationTesting";
import ApiTesting from "./topics/apiTesting";
import Tdd from "./topics/tdd";
import Mocking from "./topics/mocking";
import CodeCoverage from "./topics/codeCoverage";

const App = () => {
    const scrollerRef = useRef(null);

    return (
        <Styled.Wrapper>
            <Styled.Header>
                <Header />
            </Styled.Header>

            <Styled.Main ref={scrollerRef}>
                <div className="contentWrapper">
                    <About />

                    <UnitTesting />
                    <IntegrationTesting />
                    <ApiTesting />
                    <Tdd />
                    <Mocking />
                    <CodeCoverage />
                </div>

                <div className="footerWrapper">
                    <Footer />
                </div>
            </Styled.Main>

            <GoToTop scrollerRef={scrollerRef} />
        </Styled.Wrapper>
    );
};

export default App;
