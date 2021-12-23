export default function commentsCounter(comments) {
    let counter = 0
    if (comments.length == undefined) return undefined;
    comments.forEach((commnet) => counter++);
    if (counter == 0) return undefined;
    return counter;
}