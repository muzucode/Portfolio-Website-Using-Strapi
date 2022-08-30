export function mu(content: string) {
  return {__html: content};
}

export function enableImages(body: string) {
  let regex: RegExp = /\/uploads\//g;
  return body.replace(regex, "http://localhost:3030/uploads/")
}