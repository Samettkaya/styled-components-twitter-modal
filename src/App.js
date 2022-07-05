
import { Fragment, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import './App.css';
import Button from './components/Button';
import CloseIcon from './components/CloseIcon';
import CommentIcon from './components/CommentIcon';
import { Container } from './components/Container';
import GlobalStyle from './components/GlobalStyle';
import { ModalButtonWrapper } from './components/modal/ModalButtonWrapper';
import { ModalContent } from './components/modal/ModalContent';
import { ModalParagraph } from './components/modal/ModalParagraph';
import { ModalTitle } from './components/modal/ModalTitle';
import { ModalWrapper } from './components/modal/ModalWrapper';
import { themeSettings } from './components/Theme';

function App() {
  const [theme, toggleTheme] = useState("light");

  const newTheme = theme === "light" ? "dark" : "light";

  const setTheme = () => {
    toggleTheme(newTheme);
  };
  return (
    <Fragment >
      <GlobalStyle/>
      <ThemeProvider theme={themeSettings[theme]}>
  <Container>
  <ModalWrapper>
        <CloseIcon/>
        <ModalContent>
          <CommentIcon/>
          <ModalTitle>
          Reply to join the conversation
          </ModalTitle>
          <ModalParagraph>
              Once you join Twitter, you can respond to Samet Kaya's Tweet
            </ModalParagraph>
            <ModalButtonWrapper>
              <Button type="primary">Log in</Button>
              <Button type="secondary" onClick={setTheme}>
                Set {newTheme} Theme
              </Button>
            </ModalButtonWrapper>
        </ModalContent>
        </ModalWrapper>
  </Container>
      </ThemeProvider>
   
    </Fragment>
  );
}

export default App;
