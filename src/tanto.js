export const x = (element = document, name) => {
    if (name.charAt(0) === '.')
        return element.getElementsByClassName(name.substring(1))
    else if (name.charAt(0) === '#')
        return element.getElementById(name.substring(1))
    else
        return element.getElementsByName(name.substring(1))
}