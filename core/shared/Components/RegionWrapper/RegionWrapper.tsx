import React from 'react'

interface IRegionWrapper {
	title: string,
	children: JSX.Element[] | JSX.Element
}
export default function RegionWrapper(props: IRegionWrapper) {
  return (
		<div className={`regionwrapper-${props.title}`}>
			{props.children}
		</div>
  )
}
