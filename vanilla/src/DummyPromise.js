export function dummyAction(delay = 1500) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ message: "I have loaded" });
    }, delay);
  });
}
