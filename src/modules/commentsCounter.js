function plusPlus(counter) {
  counter += 1;
  return counter;
}

export default function commentsCounter(comments) {
  const counter = 0;
  if (comments.length === undefined) return undefined;
  comments.forEach(() => plusPlus(counter));
  if (counter === 0) return undefined;
  return counter;
}
