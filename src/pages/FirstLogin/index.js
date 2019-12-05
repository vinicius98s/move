import React, {createRef, useState} from 'react';
import {Dimensions, TouchableOpacity} from 'react-native';
import {withNavigation} from 'react-navigation';
import Carousel from 'react-native-snap-carousel';

import Background from '../../assets/Background';
import theme from '../../assets/theme';

import {
  Card,
  CardTitle,
  CardDescription,
  Container,
  ActionsIndicator,
  CardIndicatorWrapper,
  CardIndicator,
  ButtonText,
  CardIndicatorBullet,
  CardIndicatorBulletWrapper,
  TitleAndDescriptionWrapper,
} from './styles';
import {carouselItems} from './constants';

function Button({title, onPress, disable, color}) {
  return (
    <TouchableOpacity onPress={!disable ? onPress : null}>
      <ButtonText color={color || disable ? 'lightGrey' : 'darkBlue'}>
        {title}
      </ButtonText>
    </TouchableOpacity>
  );
}

function FirstLogin({navigation}) {
  const [currentCard, setCurrentCard] = useState(1);
  const {width} = Dimensions.get('window');
  const carouselRef = createRef();

  const navigateHome = () => navigation.navigate('Home');

  const lastCard = currentCard === 6;

  return (
    <>
      <Background color={theme.colors.green} logoDetail={false} />
      <CardIndicatorWrapper>
        <CardIndicator>{`Passo ${currentCard}`}</CardIndicator>
        <Button title="Pular" onPress={navigateHome} color="white" />
      </CardIndicatorWrapper>
      <Carousel
        data={carouselItems}
        itemWidth={width - 60}
        sliderWidth={width}
        layout="stack"
        inactiveSlideOpacity={0.8}
        ref={carouselRef}
        onSnapToItem={slideIndex => setCurrentCard(slideIndex + 1)}
        renderItem={({item}) => (
          <Container>
            <Card>
              {item.illustration}
              <TitleAndDescriptionWrapper>
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </TitleAndDescriptionWrapper>
            </Card>
          </Container>
        )}
      />

      <ActionsIndicator>
        <Button
          disable={currentCard === 1}
          title="Anterior"
          onPress={() => carouselRef.current.snapToPrev()}
        />
        <CardIndicatorBulletWrapper>
          <CardIndicatorBullet active={currentCard === 1} />
          <CardIndicatorBullet active={currentCard === 2} />
          <CardIndicatorBullet active={currentCard === 3} />
          <CardIndicatorBullet active={currentCard === 4} />
          <CardIndicatorBullet active={currentCard === 5} />
          <CardIndicatorBullet active={currentCard === 6} />
        </CardIndicatorBulletWrapper>
        <Button
          title={lastCard ? 'Finalizar' : 'Próximo'}
          onPress={() =>
            lastCard ? navigateHome() : carouselRef.current.snapToNext()
          }
        />
      </ActionsIndicator>
    </>
  );
}

export default withNavigation(FirstLogin);
