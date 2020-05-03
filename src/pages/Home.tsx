import React from 'react';
import {
  Icon,
  IIconStyles,
  Persona,
  Stack,
  Text,
  FontWeights,
  DefaultButton
} from 'office-ui-fabric-react';
import { Card, ICardTokens } from '@uifabric/react-cards';
import { useHistory } from 'react-router-dom';

const headerIconStyles: IIconStyles = {
  root: {
    color: '#0078D4',
    fontSize: 40,
    fontWeight: FontWeights.regular,
  },
};

const cardTokens: ICardTokens = { childrenMargin: 12 };

const Home: React.FunctionComponent = () => {
  const history = useHistory();
  const handleClick = () => {
    history.push('/dashboard')
  };
  return (
    <Stack
      horizontalAlign="center"
      verticalAlign="center"
      verticalFill
      styles={{
        root: {
          margin: '0 auto',
          color: '#605e5c',
          backgroundImage: 'url("https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FI1U6-Qogf14%2Fmaxresdefault.jpg&f=1&nofb=1")'
        }
      }}
      gap={15}
    >
      <Stack horizontal gap={15} horizontalAlign="center">
        <Card
          aria-label="Clickable vertical card with image bleeding at the center of the card"
          tokens={cardTokens}
          styles={{
            root: {
              maxWidth: 'unset',
              minWidth: 'unset',
              width: '400px',
              backgroundColor: '#fff'
            }
          }}
        >
          <Card.Section>
            <Icon iconName="OutlookLogo" styles={headerIconStyles}></Icon>
            <Text variant={"xLarge"}>Sign in</Text>
          </Card.Section>
          <Card.Section horizontal>
            <Persona text="Kevin Jameson" secondaryText="Feb 2, 2019" onClick={handleClick} />
          </Card.Section>
          <Card.Section horizontal>
            <Persona text="Jason Bourne" secondaryText="Feb 2, 2019" onClick={handleClick} />
          </Card.Section>
          <Card.Section horizontal>
            <Stack.Item grow={1}>
              <span />
            </Stack.Item>
            <DefaultButton text="Back"></DefaultButton>
          </Card.Section>
        </Card>
      </Stack>
    </Stack>
  );
};

export default Home;