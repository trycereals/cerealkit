import {
  ControlType,
  applyPropertyControls as apply
} from 'property-controls'

 const sharedControls = {
    textAlign: {
      type: ControlType.Enum,
      title: "Text alignment",
      defaultValue: "left",
      options: ["left", "center", "right"]
    },
    text: {
      type: ControlType.String,
      title: "Text",
      defaultValue: "Hello Story. I am about to state something. That matters.",
      placeholder: "A 2-liner that catches the eye"
    }
 }

export const PControls = {
  ...sharedControls,
  text: {
    ...sharedControls.text,
    defaultValue: "I am about to tell you a lorem ipsum story."
  }
}

export const TitleControls = {
  ...sharedControls,
}

export function applyPControls(P) {
  apply(P, PControls)
  P.usage = '<Text.P>I am about to tell you a lorem ipsum story. Something that will make you think: yes, why not?</Text.P>'
}

export function applyTitleControls(T) {
  apply(T, TitleControls)
  T.usage = '<Text.Title>Hey. I am a headline.</Text.Title>'
}

/*
p = 0,
  bg = "muted",
  justifyContent = BlockControls.justifyContent.defaultValue

*/