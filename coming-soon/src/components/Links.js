import React from "react"
import "../styles/Links.css"

export const Links = ({links}) => {
    return (
        <div className="social-links">
            {links.map(link => {
                return (
                    <a className="social-link"   target="_blank" rel="noopener noreferrer" href={link.url} >
                       
                        <object className="social-logo" type="image/svg+xml" data={link.logo}>
                            {link.text}
                            </object>
                            <span className="social-text">{link.text}</span>
                    </a>
                ) 
                })}
        </div>
    )
}