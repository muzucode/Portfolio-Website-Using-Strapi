// skewer converts a string to all lower-cased, with dashes for spaces
export function skewer(str: string) {
  return str.replace(/ /g,"-").toLowerCase();
}

// classchain creates a chain of classnames and returns it
export function classchain(names: string[]): string {
  var classNames = [];
  classNames[0] = names[0];

  if(names.length > 1) {
    for(let i = 1; i < names.length; i++) {
      classNames[i] = classNames[i-1] + `__${names[i]}`;
    }
  } else {
    return classNames[0]
  }

  return classNames.join(' ');

}