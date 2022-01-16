/* 
# Args
list: Array<string | number>
type: "conjunction" | "disjunction"
limit: number

# Output
string
*/

export const humanizeList = (list, type, limite) => {
    const conectivo = type === 'conjunction' ? 'and' : 'or'

    if (list.length > 3) {
        const firstPart = list.slice(0, limite - 1)
        const lastPart = list[list.length - 1]

        return `${firstPart.join(', ')} ... ${conectivo} ${lastPart}`
    }

    if (list.length === 3)
        return `${list[0]}, ${list[1]} ${conectivo} ${list[2]}`

    if (list.length === 2)
        return `${list[0]} ${conectivo} ${list[1]}`

    return `${list[0]}`
};
