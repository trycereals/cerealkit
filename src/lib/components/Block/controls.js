import { ControlType, applyPropertyControls as apply } from 'property-controls'

export const BlockControls = {
  isTomato: {
    type: ControlType.Boolean,
    title: "Tomato"
  },
  justifyContent: {
    title: "Justification",
    type: ControlType.Enum,
    defaultValue: 'center',
    options: ['center', 'flex-start', 'space-evenly']
  }
}

export function applyPropertyControls(Block) {
  apply(Block, BlockControls)
  Block.usage = '<div>Usage!</div>'
}

/*
p = 0,
  bg = "muted",
  justifyContent = BlockControls.justifyContent.defaultValue

*/