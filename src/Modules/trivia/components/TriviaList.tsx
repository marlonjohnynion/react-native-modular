import React from 'react';
import {ScrollView, StatusBar, Text, View} from 'react-native';
import styled from 'styled-components';

type TriviaListProps = {
  trivia: Array<any>;
};

const Container = styled(ScrollView)`
  background: whitesmoke;
  padding: 20px;
`;

const Card = styled(View)`
  width: 100%;
  padding: 10px;
  background-color: #ffffff;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.28);
  border-radius: 13px;
  margin-bottom: 20px;
`;

const Heading = styled(Text)`
  font-size: 20px;
  margin-bottom: 5px;
`;

const Question = styled(Text)`
  font-size: 14px;
  font-weight: 300;
  letter-spacing: 0.2px;
  margin-bottom: 10px;
`;

const Answer = styled(Text)`
  font-size: 14px;
  font-weight: 500;
`;

export const TriviaList: React.FC<TriviaListProps> = ({trivia}) => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Container contentInsetAdjustmentBehavior="automatic">
        <View>
          {trivia &&
            trivia.map((item, key) => {
              return (
                <Card key={key}>
                  <Heading>Question</Heading>
                  <Question>{item.question}</Question>
                  <Answer>Answer: {item.answer}</Answer>
                </Card>
              );
            })}
        </View>
      </Container>
    </>
  );
};
