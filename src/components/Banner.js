import React from 'react'

export default function Banner({ children, title, subtitlle }) {
    return (
        <div className="banner">
            <h1>{title}</h1>
            <div />
            <p>{subtitlle}</p>
            {children}
        </div>
    )
}
