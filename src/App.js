import React from 'react';

import Layout from './components/Layout';
import Card from './components/Card';
import Image from './components/Image';
import Heading from './components/Heading';
import Paragraph from './components/Paragraph';

import imageURL from './cs-header-logo.png';

import './App.scss';

const App = () =>
  <Layout>
    <Card>
      <Image src={imageURL} alt="Code Summoner Corp's logo" />
      <Heading priority="1" cssClass="color__prime">Code Summoner Corp.</Heading>
      <Heading priority="2" cssClass="color__alt">Provider of Web and mobile application services</Heading>
      <Paragraph>Code Summoner has the experience and know-how to turn your vision into a sustainable and fully-realized web site or web app solution.</Paragraph>
      <Paragraph>contact@codesummoner.com</Paragraph>
    </Card>
  </Layout>;

export default App;
