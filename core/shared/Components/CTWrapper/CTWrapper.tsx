import React from 'react'
import { skewer } from '../../../utility/TagsParser'


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
