import React, { PropsWithChildren } from 'react'

export function SectionHeadline({
  children,
  description,
  id,
}: PropsWithChildren<{ id: string; description?: React.ReactNode }>) {
  return (
    <>
      <h2
        className={`${description ? 'mt-4' : 'my-4'} text-3xl font-bold`}
        id={id}
      >
        {children}
      </h2>
      {description && (
        <h3 className="mb-6 text-lg text-gray-500">{description}</h3>
      )}
    </>
  )
}
