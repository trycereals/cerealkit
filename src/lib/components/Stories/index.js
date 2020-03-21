import React from 'react'

export default ({ children }) => {
  const c = React.Children.map(children, (child, i) => {
    return {
      ...child,
      props: {
        ...child.props,
        display: i === 0,
        className: 'my-class-name',
        onClick: (props) => {
          if (child.props.onClick) {
            child.props.onClick(props)
          }
        }
      }
    }
  })
  return (
    <div className="pls-find-me">
      {c}
    </div>
  ) 
}