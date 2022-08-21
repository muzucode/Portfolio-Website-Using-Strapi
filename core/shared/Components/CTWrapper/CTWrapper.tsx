import React from 'react'
import { skewer } from '../../../utility/TagsParser'

/**
 * This component should only be styled when you are dealing with
 * multiple layouts on a single page or are dealing with a page that
 * consists of a layout with children as well as extra elements that do not
 * fit within the layout.
 */

interface ICTWrapper {
	contentType: string, // content-type title
	children: JSX.Element
}
export default function CTWrapper(props: ICTWrapper) {
	// Create classname
	const cn = 'ctwrapper ' + 'ctwrapper__' + props.contentType;

  return (
    <div className={cn}>
			{props.children}
		</div>
  )
}
