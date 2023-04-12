/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import { FaDiscord, FaGithub } from "react-icons/fa";
import { Container, Row, Col } from "react-bootstrap";
import { ImageHolder, ProfileButton } from "../../components";
import { BrandLogo, HomeBackground } from "../../assets";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <Container
      fluid
      className={styles.container}
      style={{ background: `url(${HomeBackground})` }}
    >
      <Row>
        <ImageHolder
          primarySource={BrandLogo}
          alt="skyscraper logo"
          className={styles.brandLogo}
        />
      </Row>
      <Row>
        <Col>
          <span className={`${styles.textWhite} ${styles.headingOne}`}>
            SkyScraper Weather Bot
          </span>
        </Col>
      </Row>
      <Row>
        <Col>
          <ProfileButton
            logo={<FaDiscord className={styles.iconSmall} />}
            href="https://discord.com/api/oauth2/authorize?client_id=1070498284591923200&permissions=380104660992&scope=bot"
          >
            Add to Discord
          </ProfileButton>
        </Col>
      </Row>
      <Row>
        <Col>
          <a
            href="https://github.com/skyscraperbot/skyscraper"
            target="_blank_"
          >
            <FaGithub className={styles.icon} />
          </a>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
