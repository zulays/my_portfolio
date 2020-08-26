import React, { useState } from 'react';
import '../styling/Projects.css';
import {
  Container,
  Button,
  ButtonToolbar,
  Card,
  CardTitle,
  CardText,
  CardImg,
} from 'reactstrap';

export default function Projects(props) {
  return (
    <div>
      <Container className="container" fluid="md">
        {/* project 1 */}
        <Card body outline color="info">
          <CardImg
            top
            width="100%"
            src="/assets/318x180.svg"
            alt="Card image cap"
          />
          <CardTitle>Travel Scout</CardTitle>
          <CardText>
            A travel information application built with HTML, CSS, Javascript,
            and Surge
          </CardText>
          <ButtonToolbar className="button-bar justify-content-space-between">
            <a href="http://travel-scout.surge.sh/">
              <Button color="outline-info">Visit</Button>
            </a>
            <a href="https://github.com/zulays/travel-scout">
              <Button color="outline-secondary">Code</Button>
            </a>
          </ButtonToolbar>
        </Card>
        {/* project 2 */}
        <Card body outline color="info">
          <CardImg
            top
            width="100%"
            src="/assets/318x180.svg"
            alt="Card image cap"
          />
          <CardTitle>find your center</CardTitle>
          <CardText>
            An anxiety management application built with React.js, CSS, and
            Netlify
          </CardText>
          <ButtonToolbar className="button-bar justify-content-space-between">
            <a href="https://find-your-center.netlify.app/">
              <Button color="outline-info">Visit</Button>
            </a>
            <a href="https://github.com/zulays/find-your-center">
              <Button color="outline-secondary">Code</Button>
            </a>
          </ButtonToolbar>
        </Card>
        {/* project 3 */}
        <Card body outline color="info">
          <CardImg
            top
            width="100%"
            src="/assets/318x180.svg"
            alt="Card image cap"
          />
          <CardTitle>Travel Scout</CardTitle>
          <CardText>
            A collaboration project with UX designers and co-developers on a
            study abroad assistant application built with React.js, CSS,
            Express, MongoDB, Heroku and Netlify
          </CardText>
          <ButtonToolbar className="button-bar justify-content-space-between">
            <a href="https://myalpaca.netlify.app/">
              <Button color="outline-info">Visit</Button>
            </a>
            <a href="https://github.com/zulays/myAlpaca">
              <Button color="outline-secondary">Code</Button>
            </a>
          </ButtonToolbar>
        </Card>
        {/* project 4 */}
        <Card body outline color="info">
          <CardImg
            top
            width="100%"
            src="/assets/318x180.svg"
            alt="Card image cap"
          />
          <CardTitle>Living La Vida Vegan</CardTitle>
          <CardText>
            A full-stack vegan recipe application using React.js, Ruby on Rails,
            PostgreSQL, Heroku, Surge, and Bootstrap
          </CardText>
          <ButtonToolbar className="button-bar justify-content-space-between">
            <a href="http://livinglavida-vegan.surge.sh/">
              <Button color="outline-info">Visit</Button>
            </a>
            <a href="https://github.com/zulays/living-la-vida-vegan">
              <Button color="outline-secondary">Code</Button>
            </a>
          </ButtonToolbar>
        </Card>
      </Container>
    </div>
  );
}
