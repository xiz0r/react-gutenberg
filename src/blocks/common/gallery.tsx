import { IWPGBlock } from '../../types'
import * as React from 'react'

const WPGGalleryBlock:React.FunctionComponent<IWPGBlock> = (props) => {
  const {
    // attrs,
    // innerBlocks,
    innerHTML
  } = props

  return (
    <div className="wpg-block wpg-b_gallery" dangerouslySetInnerHTML={{ __html: innerHTML }}/>
  )
}

export default WPGGalleryBlock