import { validateParams } from "./validateParams"

const objContent = {
  title: 'Walber (w2k)',
  description: 'FullStack Web Developer',
  url: 'https://media0.giphy.com/media/1iNIkQBAwEkUuTpikf/giphy.gif?cid=790b7611116f6b6298f8e00987081551b9ee5af80b4f6bde&rid=giphy.gif&ct=g',
  sum(a, b) {
    validateParams(a, b)
    return a + b
  },
  arryLang: ['JavaScript', 'Python', 'Java', 'Go', 'TypeScript']
}

export {
  objContent
}
