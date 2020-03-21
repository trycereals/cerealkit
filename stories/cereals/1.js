import React, { useState, useEffect } from 'react';

import { action } from '@storybook/addon-actions';

import Block from '../../src/lib/components/Block';

import Button from '../../src/lib/components/Button'
import Text from '../../src/lib/components/Text'
import GlobalPlayer from '../../src/lib/components/GlobalPlayer'
import Progress from '../../src/lib/components/Progress'
import Video from '../../src/lib/components/Video'

import StoryWithScrollIssue from '../../src/lib/components/StoryWithScrollIssue'

import { boxProps } from '../../src/theme/boxProps';

export default () => {
  const [player, setPlayer] = useState({ playing: false, global: false, i: -1 })

  // useEffect(() => {
  //   console.log('playing :: ', player)
  // }, [player])

  return (
    <StoryWithScrollIssue style={{ overflow: 'hidden', position: 'relative', padding: '8px' }}>
      <Block justifyContent="flex-start">
        <Text.Title>Hello Story. I am about to state smthing. That matters. For real.</Text.Title>
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
        <Button {...boxProps}>My button!</Button>
      </Block>
      {/* <Block justifyContent="center" onClick={action('clicked')}>
        <Progress />
        <Text.Title>Hello Story.<br/><span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span></Text.Title>
        <Video
          {...player}
          global={false}
          src="https://www.youtube.com/watch?v=5rOy2OEZSQk&ab_channel=VUFranceTV"
          setPlaying={(state, global) => setPlayer({ playing: state, i: 0, global })}
        />
        <Text.P textAlign="right" {...boxProps}>I am about to tell you a lorem ipsum story. Something that will make you think: yes, why not?</Text.P>
        <Button {...boxProps} alignSelf="flex-end">My button!</Button>
      </Block> */}
      {
        player.global ? (
          <GlobalPlayer
            onClose={() => setPlayer({ ...player, playing: false, global: false })}
          />
        ) : null
      }
    </StoryWithScrollIssue>
  );
}