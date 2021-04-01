import React from "react";
import { Card, Media, Heading, Content, Image } from "react-bulma-components";

type CardComponentProps = {
  image_placeholder?: string;
  avatar?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  timestamp?: string;
};

const CardComponent: React.FC<CardComponentProps> = ({
  image_placeholder,
  avatar,
  title,
  subtitle,
  description,
  timestamp,
}) => {
  return (
    <Card>
      <Card.Image size="4by3" src={image_placeholder} />
      <Card.Content>
        <Media>
          <Media.Item renderAs="figure" position="left">
            <Image size={64} alt="64x64" src={avatar} />
          </Media.Item>
          <Media.Item>
            <Heading size={4}>{title}</Heading>
            <Heading subtitle size={6}>
              {subtitle}
            </Heading>
          </Media.Item>
        </Media>
        <Content>
          {description}
          <br></br>
          <br></br>
          <time>{timestamp}</time>
        </Content>
      </Card.Content>
    </Card>
  );
};

export default CardComponent;
