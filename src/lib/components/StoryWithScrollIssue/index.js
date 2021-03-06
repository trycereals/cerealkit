import React, { useEffect, useState, useMemo, useCallback } from "react";
/** @jsx jsx */
import { jsx } from "theme-ui";

import Block from '../Block'
import Button from '../Button'

import useDimensions from "react-use-dimensions";
import { ControlType, applyPropertyControls } from "property-controls";

import { useScroll } from './useScroll'

import styled from "@emotion/styled";
const color = "white";

const StoryBlock = styled.div`
  margin: 0;
  // height: 100vh;
  // display: flex;
  // align-items: center;
  // justify-content: center;
`;

const Hid = styled.div`
  position: absolute;
  z-index: 1;
  height: 12%;

  pointer-events: none;
  display: flex;
  left: 0;
  right: 0;
  margin: auto;
  background: var(--theme-ui-colors-background, hsl(230, 25%, 18%));
`

const Mask = styled.div`
  position: absolute;
  height: 100%;
  width: 360px;
  left: 0;
  right: 0;
  margin: auto;
  overflow: hidden;
`

const Scroller = styled.div`
  position: absolute;
  pointer-events: none;
  height: ${props => (props.height ? `${props.height}px` : "2010px")};
  width: 100vw;
  background: transparent;
`;

const StoryControls = {
  isTomato: {
    type: ControlType.Boolean,
      title: "Tomato"
  },
  justifyContent: {
    title: "Justification",
    type: ControlType.Enum,
    defaultValue: 'space-between',
    options: ['space-between', 'start', 'space-evenly']
  }
}

function traverse(child, i) {
  if (child.props && child.props.children) {
    const children = child.props.children
    // children.forEach(child => {
    //   console.log(i, ': block child: ', child)
    // })
  }
}

const Story = ({
  children,
  isTomato,
  justifyContent = StoryControls.justifyContent.defaultValue
}) => {

  const [state, setState] = useState(0)
  const [firstY, setFirstY] = useState(0);
  const scroll = useScroll()
  const [dimRef, data] = useDimensions();


  const cerealBlocks = useMemo(() => React.Children.map(children, (child, i) => {
    if (child && child.type === Block) {
      traverse(child, i)
      return {
        ...child,
        props: {
          ...child.props,
          active: i === state,
        }
      };
    }
  }))

  return (
    <StoryBlock
      sx={{
        bg: "dark",
      }}
    >
      {cerealBlocks}
    </StoryBlock>
  );
}

applyPropertyControls(Story, StoryControls);

Story.Button = Button

Story.usage = `
  <Story><Story.Button text="From here"/></Story>
`
// Controls.addPropertyControls(StoryBlock, {
//   children: {
//     type: Controls.String,
//     required: true,
//     placeholder: "What did someone say?"
//   },
//   sx: {
//     type: Controls.Style.Typography
//   }
// });


Story.propTypes = {
  onClick: PropTypes.func,
  /** Disable the button */
  disabled: PropTypes.bool,
  className: PropTypes.string,
  /** Text of the button */
  text: PropTypes.string
};

Story.defaultProps = {
  onClick: () => {},
  disabled: false,
  className: null,
  text: "Click Me"
};

export default Story;
