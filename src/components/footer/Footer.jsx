import React from "react";
import { Container } from "react-bootstrap";
import { FooterArea } from "./index.style";

const Footer = () => {
  return (
    <>
      <FooterArea>
        <Container>
          <div>
            <span style={{ color: "var(--Gray)" }}>
              Copyright © 2022 SpaceDex
              <br />
              All rights reserved | Privacy | Terms
            </span>
          </div>
          <div className="image">
            <img src="/images/footer-logo.svg" alt="click here" />
          </div>
          <div className="socialLinks">
            <a href="#">
              <img src="/images/twitter-icon.svg" alt="click here" />
            </a>
            <a href="#" className="mx-3">
              <img src="/images/discord-icon.svg" alt="click here" />
            </a>
            <a href="#">
              <img src="/images/wand-icon.svg" alt="click here" />
            </a>
          </div>
        </Container>
      </FooterArea>
    </>
  );
};

export default Footer;
