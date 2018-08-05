import React, { Component } from 'react'
import { Sprite, SpriteProps } from 'utils/fiber'
import { Texture } from 'pixi.js'
import _flower1 from 'gfx/tilesets/flower/flower1.png'
import _flower2 from 'gfx/tilesets/flower/flower2.png'
import _flower3 from 'gfx/tilesets/flower/flower3.png'
import { Steps, Transition2 } from './Transition2'

// Animation goes like this
// flower1 - 700ms - flower2 - 350ms - flower3 - 350ms - flower1... and so on
// so its 1400ms total

const [flower1, flower2, flower3] = [_flower1, _flower2, _flower3].map(tx =>
  Texture.fromImage(tx.src),
)

const STEPS: Steps<Texture> = [[700, flower1], [350, flower2], [350, flower3]]

export class Flower extends Component<SpriteProps> {
  render() {
    return (
      <Transition2
        steps={STEPS}
        loop
        render={texture => {
          return <Sprite {...this.props} texture={texture} />
        }}
      />
    )
  }
}