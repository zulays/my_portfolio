import React from 'react';
import '../styling/Projects.css';
import {
  Container,
  Button,
  ButtonToolbar,
  Card,
  CardTitle,
  CardText,
  Row,
  Col,
} from 'reactstrap';
import travelScout from '../assets/travel-scout.mp4';
import findYourCenter from '../assets/find-your-center.mp4';
import myAlpaca from '../assets/myAlpaca.mp4';
import LivingLaVidaVegan from '../assets/living-la-vida-vegan.mp4';

export default function Projects(props) {
  return (
    <div className="projects" id="projects">
      <Container className="jumbotron mx-2 mb-2">
        <Row>
          <Col className="project-columns">
            {/* project 1 */}
            <Card
              outline
              className="project-cards"
              style={{ backgroundColor: 'transparent' }}
            >
              <video
                autoPlay="autoplay"
                loop="loop"
                muted
                className="video-clip"
              >
                <source src={travelScout} type="video/mp4"></source>
              </video>
              <CardTitle>Travel Scout</CardTitle>
              <CardText>
                A travel information application built with HTML, CSS,
                Javascript, and Surge
              </CardText>
              <ButtonToolbar className="button-bar justify-content-space-between">
                <a href="http://travel-scout.surge.sh/">
                  <Button color="outline-info" className="project-buttons">
                    Visit
                  </Button>
                </a>
                <a href="https://github.com/zulays/travel-scout">
                  <Button color="outline-secondary" className="project-buttons">
                    Code
                  </Button>
                </a>
              </ButtonToolbar>
            </Card>
          </Col>

          <Col className="project-columns">
            {/* project 2 */}
            <Card
              outline
              className="project-cards"
              style={{ backgroundColor: 'transparent' }}
            >
              <video
                autoPlay="autoplay"
                loop="loop"
                muted
                className="video-clip"
              >
                <source src={findYourCenter} type="video/mp4"></source>
              </video>
              <CardTitle>find your center</CardTitle>
              <CardText>
                An anxiety management aid application built with React.js, CSS,
                and Netlify
              </CardText>
              <ButtonToolbar className="button-bar justify-content-space-between">
                <a href="https://find-your-center.netlify.app/">
                  <Button color="outline-info" className="project-buttons">
                    Visit
                  </Button>
                </a>
                <a href="https://github.com/zulays/find-your-center">
                  <Button color="outline-secondary" className="project-buttons">
                    Code
                  </Button>
                </a>
              </ButtonToolbar>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col className="project-columns">
            {/* project 3 */}
            <Card
              outline
              className="project-cards"
              style={{ backgroundColor: 'transparent' }}
            >
              <video
                autoPlay="autoplay"
                loop="loop"
                muted
                className="video-clip"
              >
                <source src={myAlpaca} type="video/mp4"></source>
              </video>
              <CardTitle>myAlpaca</CardTitle>
              <CardText>
                A collaboration project with UX designers and co-developers on a
                study abroad assistant application built with React.js, CSS,
                Express, MongoDB, Heroku and Netlify
              </CardText>
              <ButtonToolbar className="button-bar justify-content-space-between">
                <a href="https://myalpaca.netlify.app/">
                  <Button color="outline-info" className="project-buttons">
                    Visit
                  </Button>
                </a>
                <a href="https://github.com/zulays/myAlpaca">
                  <Button color="outline-secondary" className="project-buttons">
                    Code
                  </Button>
                </a>
              </ButtonToolbar>
            </Card>
          </Col>

          <Col className="project-columns">
            {/* project 4 */}
            <Card
              outline
              className="project-cards"
              style={{ backgroundColor: 'transparent' }}
            >
              <video
                autoPlay="autoplay"
                loop="loop"
                muted
                className="video-clip"
              >
                <source src={LivingLaVidaVegan} type="video/mp4"></source>
              </video>
              <CardTitle>Living La Vida Vegan</CardTitle>
              <CardText>
                A full-stack vegan recipe tracker application using React.js,
                Ruby on Rails, PostgreSQL, Heroku, Surge, and Bootstrap
              </CardText>
              <ButtonToolbar className="button-bar justify-content-space-between">
                <a href="http://livinglavida-vegan.surge.sh/">
                  <Button color="outline-info" className="project-buttons">
                    Visit
                  </Button>
                </a>
                <a href="https://github.com/zulays/living-la-vida-vegan">
                  <Button color="outline-secondary" className="project-buttons">
                    Code
                  </Button>
                </a>
              </ButtonToolbar>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
