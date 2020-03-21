import React, { useState, useEffect } from 'react';

import { action } from '@storybook/addon-actions';
import Block from './';
import Button from '../Button'
import Text from '../Text'
import Image from '../Image'
import GlobalPlayer from '../GlobalPlayer'
import Progress from '../Progress'
import Video from '../Video'
import { boxProps } from '../../../theme/boxProps';

export default {
  title: 'Block',
  component: Block,
};

export const WithText = () =>  {
  const [player, setPlayer] = useState({ playing: false, global: false, i: -1 })

  useEffect(() => {
    console.log('playing :: ', player)
  }, [player])

  return (
  <div style={{ overflow: 'hidden', position: 'relative', display: 'flex', justifyContent: 'center' }}>
    <Block justifyContent="center" active>
      <Progress />
      <Text.Title>Hello Story. I am about to state something. That matters. For real.</Text.Title>
      <Video
        {...player}
        global
        setPlaying={(state, global) => setPlayer({ playing: state, i: 0, global })}
      />
      {/* <Image {...boxProps} /> */}
      <Text.P {...boxProps}>I am about to tell you a lorem ipsum story. Something that will make you think: yes, why not?</Text.P>
      <Text.P {...boxProps}>I am about to tell you a lorem ipsum story. Something that will make you think: yes, why not?</Text.P>
      <Text.P {...boxProps}>I am about to tell you a lorem ipsum story. Something that will make you think: yes, why not?</Text.P>
      <Text.P {...boxProps}>I am about to tell you a lorem ipsum story. Something that will make you think: yes, why not?</Text.P>
      <Text.P {...boxProps}>I am about to tell you a lorem ipsum story. Something that will make you think: yes, why not?</Text.P>
      <Text.P {...boxProps}>I am about to tell you a lorem ipsum story. Something that will make you think: yes, why not?</Text.P>
      <Text.P {...boxProps}>I am about to tell you a lorem ipsum story. Something that will make you think: yes, why not?</Text.P>
      <Text.P {...boxProps}>I am about to tell you a lorem ipsum story. Something that will make you think: yes, why not?</Text.P>
      <Button {...boxProps}>My button!</Button>
    </Block>
    <Block justifyContent="center" onClick={action('clicked')}>
      <Progress />
      <Text.Title>Hello Story.<br/><span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span></Text.Title>
      {/* <Image {...boxProps} /> */}
      <Video
        {...player}
        global={false}
        src="https://www.youtube.com/watch?v=5rOy2OEZSQk&ab_channel=VUFranceTV"
        setPlaying={(state, global) => setPlayer({ playing: state, i: 0, global })}
      />
      <Text.P textAlign="right" {...boxProps}>I am about to tell you a lorem ipsum story. Something that will make you think: yes, why not?</Text.P>
      <Button {...boxProps} alignSelf="flex-end">My button!</Button>
    </Block>
    {
      player.global ? (
        <GlobalPlayer
          onClose={() => setPlayer({ ...player, playing: false, global: false })}
        />
      ) : null
    }
  </div>
);
}

export const Emoji = () => (
  <Block onClick={action('clicked')}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Block>
);

Emoji.story = {
  name: 'with emoji',
};
