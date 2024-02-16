interface IconProps {
    className: string
}

export const IconSpinner: React.FC<IconProps> = ({ className }) => {
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><circle className="stroke-gray-100" cx="12" cy="12" r="10" strokeWidth="4"></circle><path className="fill-primary-600" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
    )
}

export const IconHeart: React.FC<IconProps> = ({ className }) => {
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M3.343 7.778a4.5 4.5 0 0 1 7.339-1.46L12 7.636l1.318-1.318a4.5 4.5 0 1 1 6.364 6.364L12 20.364l-7.682-7.682a4.501 4.501 0 0 1-.975-4.904Z"></path></svg>
    )
}

export const IconQuote: React.FC<IconProps> = ({ className }) => {
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path></svg>
    )
}

export const IconMessageSquare: React.FC<IconProps> = ({ className }) => {
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
    )
}

export const IconMenuRightAlt: React.FC<IconProps> = ({ className }) => {
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M4 6a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1Z"></path><path d="M4 18a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1Z"></path><path d="M11 11a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2h-8Z"></path></svg>
    )
}

export const IconTimes: React.FC<IconProps> = ({ className }) => {
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
    )
}

export const IconCheck: React.FC<IconProps> = ({ className }) => {
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1  1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"clipRule="evenodd"></path></svg>
    )
}

export const IconMail: React.FC<IconProps> = ({ className }) => {
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19.875 3.75H4.125A2.628 2.628 0 0 0 1.5 6.375v11.25a2.628 2.628 0 0 0 2.625 2.625h15.75a2.627 2.627 0 0 0 2.625-2.625V6.375a2.627 2.627 0 0 0-2.625-2.625Zm-.665 4.342-6.75 5.25a.75.75 0 0 1-.92 0l-6.75-5.25a.75.75 0 1 1 .92-1.184L12 11.8l6.29-4.892a.75.75 0 0 1 .92 1.184Z"></path></svg>
    )
}

export const IconGithub: React.FC<IconProps> = ({ className }) => {
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 1.5C6.202 1.5 1.5 6.323 1.5 12.267c0 4.758 3.01 8.79 7.181 10.214a.82.82 0 0 0 .178.019c.39 0 .54-.286.54-.534 0-.258-.01-.933-.015-1.833a4.802 4.802 0 0 1-1.059.126c-2.02 0-2.48-1.57-2.48-1.57-.478-1.242-1.167-1.575-1.167-1.575-.914-.642-.005-.66.066-.66h.004c1.055.093 1.608 1.115 1.608 1.115.525.919 1.228 1.176 1.857 1.176a2.953 2.953 0 0 0 1.2-.28c.093-.695.365-1.168.665-1.44-2.33-.272-4.781-1.195-4.781-5.32 0-1.177.408-2.138 1.078-2.888-.108-.272-.469-1.369.103-2.85a.874.874 0 0 1 .235-.023c.38 0 1.237.145 2.653 1.13a9.76 9.76 0 0 1 5.259 0c1.416-.985 2.273-1.13 2.653-1.13a.873.873 0 0 1 .235.023c.571 1.481.21 2.578.103 2.85.67.755 1.078 1.716 1.078 2.888 0 4.134-2.456 5.043-4.796 5.31.375.333.713.99.713 1.993 0 1.439-.014 2.601-.014 2.953 0 .253.145.539.534.539a.9.9 0 0 0 .188-.019c4.176-1.425 7.181-5.46 7.181-10.214C22.5 6.323 17.798 1.5 12 1.5Z"></path></svg>
    )
}

export const IconLinkedIn: React.FC<IconProps> = ({ className }) => {
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.82 1.5H3.294c-.957 0-1.794.69-1.794 1.635v17.566c0 .951.837 1.799 1.794 1.799h17.521c.963 0 1.685-.854 1.685-1.8V3.136c.006-.946-.722-1.635-1.68-1.635ZM8.01 19.005H5V9.65h3.01v9.354ZM6.61 8.228h-.022c-.963 0-1.586-.716-1.586-1.613C5.002 5.7 5.642 5 6.626 5c.984 0 1.587.695 1.608 1.614 0 .897-.624 1.613-1.625 1.613Zm12.395 10.777h-3.009V13.89c0-1.225-.438-2.063-1.526-2.063-.832 0-1.324.563-1.543 1.111-.082.197-.104.465-.104.739v5.328H9.815V9.65h3.008v1.301c.438-.623 1.122-1.52 2.713-1.52 1.975 0 3.469 1.301 3.469 4.108v5.465Z"></path></svg>
    )
}