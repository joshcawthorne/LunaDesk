import React from "react";
import styled from "styled-components";
import Link from "next/link";

import Container from "./marketingContainer";
import Logo from "../../../assets/svg/logo.svg";

import FacebookIcon from "../../../assets/svg/facebookLogo.svg";
import LinkedInIcon from "../../../assets/svg/linkedInLogo.svg";
import TwitterIcon from "../../../assets/svg/twitterLogo.svg";

const FooterContainerOuter = styled.div`
  background-color: #0a2b3e;
  padding: 15px 0;
  position: relative;
  width: 100%;
`;

const FooterContainerInner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.div`
  color: #ffffffb0;
  font-size: 12px;
  margin-top: 3px;
`;

const LogoContainer = styled.div``;

const UpperLayer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const LeftContent = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RightContent = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Divider = styled.div`
  height: 3px;
  width: 100%;
  background: linear-gradient(
    90deg,
    rgba(230, 35, 187, 0.5) 0%,
    rgba(248, 184, 79, 0.5) 39.82%
  );
  margin: 25px 0;
`;

const LowerLayer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const LowerLeftContent = styled.div``;

const LowerRightContent = styled.div``;

const FooterMenuItem = styled.div`
  font-weight: 600;
  font-size: 13px;
  letter-spacing: 0.5px;
  color: #ffffff;
  text-decoration: none;

  margin-left: 15px;
`;

const SocialItems = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SocialItem = styled.div`
  height: 18px;
  width: 18px;
  margin-right: 15px;
`;

const MadeText = styled.div`
  font-weight: 600;
  font-size: 13px;

  color: #156590;
  span {
    margin-right: 5px;
    opacity: 0.5;
  }
`;

function Footer() {
  return (
    <FooterContainerOuter>
      <Container>
        <FooterContainerInner>
          <UpperLayer>
            <LeftContent>
              <Logo></Logo>
            </LeftContent>
            <RightContent>
              <Link
                href={"mailto:hello@joshcawthorne.com?subject=LunaDesk"}
                passHref
                className="link"
              >
                <FooterMenuItem className="link">Contact</FooterMenuItem>
              </Link>
              <Link className="link" href={"/privacy-policy"} passHref>
                <FooterMenuItem className="link">Privacy Policy</FooterMenuItem>
              </Link>
            </RightContent>
          </UpperLayer>
          <Divider />
          <LowerLayer>
            <LowerLeftContent>
              <SocialItems>
                <SocialItem className="link">
                  <FacebookIcon />
                </SocialItem>
                <SocialItem className="link">
                  <LinkedInIcon />
                </SocialItem>
                <SocialItem className="link">
                  <TwitterIcon />
                </SocialItem>
              </SocialItems>
            </LowerLeftContent>
            <LowerRightContent>
              <MadeText>
                Made with <span>❤️</span> in Leeds, UK
              </MadeText>
            </LowerRightContent>
          </LowerLayer>
        </FooterContainerInner>
      </Container>
    </FooterContainerOuter>
  );
}

export default Footer;
