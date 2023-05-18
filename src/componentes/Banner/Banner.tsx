import './Banner.css'
import React from 'react';

interface BannerProps{
    srcImage: string;
    altImage?: string;
}

const Banner = ({srcImage, altImage}: BannerProps) => {
    // JSX
    return (
        <header className="banner">
            <img src={srcImage} alt={altImage} />
        </header>
    )
}

export {Banner}