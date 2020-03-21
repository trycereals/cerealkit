import React from 'react'
/** @jsx jsx */
import { jsx } from "theme-ui";
import { useThemeUI } from 'theme-ui'

import { Flex as ThemeFlex } from 'theme-ui'

// import { applyPropertyControls } from "property-controls";

import { applyPropertyControls, BlockControls } from './controls'

import styled from "@emotion/styled";

export const Flex = styled(ThemeFlex)({
  flexDirection: 'column',
  // margin: '2em auto auto',
  height: `calc(640px - 24px)`,
  width: `calc(360px - 24px)`,
  overflow: 'hidden',
  overflowY: 'auto',
  padding: '32px 16px',
  overflowY: 'auto',
  position: 'relative',
})

const defaultSpace =
  [0, 4, 8, 16, 32, 64, 128, 256, 512]

const Block = ({
  blockRef,
  active,
  children,
  p = 0,
  bg = "muted",
  justifyContent = BlockControls.justifyContent.defaultValue
}) => {

  const space = defaultSpace
  // const context = useThemeUI()
  // const { space = defaultSpace } = context.theme

  return (
    <div
      className="wrapper"
      style={{
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
        overflow: "auto",
        display: active || active === null ? "flex" : "none"
      }}
    >
      {/* <div className="my-story-div" /> */}
      <Flex
        id="flex1"
        ref={blockRef}
        p={p}
        bg={bg}
        sx={{
          width: `calc(360px - ${space[p] * 2}px)`,
          height: `calc(640px - ${space[p] * 2}px)`,
          justifyContent,
          borderRadius: "4px",
          position: 'fixed'
        }}
      >
        {children}
      </Flex>
    </div>
  );
}

applyPropertyControls(Block);

console.log(Block.usage, 'Block!')
// Controls.addPropertyControls(BlockBlock, {
//   children: {
//     type: Controls.String,
//     required: true,
//     placeholder: "What did someone say?"
//   },
//   sx: {
//     type: Controls.Style.Typography
//   }
// });


Block.propTypes = {
  onClick: PropTypes.func,
  /** Disable the button */
  disabled: PropTypes.bool,
  className: PropTypes.string,
  /** Text of the button */
  text: PropTypes.string
};

Block.defaultProps = {
  onClick: () => {},
  disabled: false,
  className: null,
  text: "Click Me"
};

export default Block;
