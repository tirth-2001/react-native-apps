/* @flow */

import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {
  Container,
  Header,
  DeckSwiper,
  Card,
  CardItem,
  Thumbnail,
  Left,
  Body,
  Icon,
} from 'native-base';

const cards = [
  {
    text: 'Card One',
    name: 'One',
    image: require('./images/w1.jpg'),
  },
  {
    text: 'Card Two',
    name: 'Two',
    image: require('./images/w2.jpg'),
  },
  {
    text: 'Card Three',
    name: 'Three',
    image: require('./images/w3.jpg'),
  },
  {
    text: 'Card Four',
    name: 'Four',
    image: require('./images/w4.jpg'),
  },
  {
    text: 'Card Five',
    name: 'Five',
    image: require('./images/w5.jpg'),
  },
  {
    text: 'Card Six',
    name: 'Six',
    image: require('./images/w6.jpg'),
  },
  {
    text: 'Card Seven',
    name: 'Seven',
    image: require('./images/w7.jpg'),
  },
  {
    text: 'Card Eight',
    name: 'Eight',
    image: require('./images/w8.jpg'),
  },
];

export default class SwipeCard extends Component {
  render() {
    return (
      //   <View>
      //     <DeckSwiper
      //       dataSource={cards}
      //       renderItem={item => (
      //         <Card style={{elevation: 3}}>
      //           <CardItem>
      //             <Left>
      //               <Thumbnail source={item.image} />
      //               <Body>
      //                 <Text>{item.text}</Text>
      //                 <Text note>Headphones</Text>
      //               </Body>
      //             </Left>
      //           </CardItem>
      //           <CardItem cardBody>
      //             <Image style={{height: 300, flex: 1}} source={item.image} />
      //           </CardItem>
      //           <CardItem>
      //             <Icon name="heart" style={{color: '#ED4A6A'}} />
      //             <Text>{item.name}</Text>
      //           </CardItem>
      //         </Card>
      //       )}
      //     />
      //   </View>

      <Container>
        <View style={{minHeight: 500}}>
          <DeckSwiper
            looping={false}
            dataSource={cards}
            renderEmpty={() => <Text>Card is empty</Text>}
            renderItem={item => (
              <Card style={{elevation: 3}}>
                <CardItem>
                  <Left>
                    <Thumbnail source={item.image} />
                    <Body>
                      <Text>{item.text}</Text>
                      <Text note>NativeBase</Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem cardBody>
                  <Image style={{height: 300, flex: 1}} source={item.image} />
                </CardItem>
                <CardItem>
                  <Icon name="heart" style={{color: '#ED4A6A'}} />
                  <Text>{item.name}</Text>
                </CardItem>
              </Card>
            )}
          />
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
