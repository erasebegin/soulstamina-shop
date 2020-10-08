const generateSlug = (string) => {
    return string.replace(/\W+/g, '-')
}

export default generateSlug