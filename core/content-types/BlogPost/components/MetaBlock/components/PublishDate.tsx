import React from 'react'

interface IPublishDate {
  content: Date
}
export default function PublishDate(props: IPublishDate) {
  return (
    <div className='publish-date'>
      Published: {new Date(props.content).toLocaleDateString()}
    </div>
  )
}
