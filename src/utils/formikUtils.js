import objectPath from 'object-path';

export function buildErrorMessageGetter(touched, errors) {
  return function (property) {
    return objectPath.get(touched, property) && objectPath.get(errors, property);
  };
}

export function buildHasError(touched, errors) {
  return function (property) {
    return objectPath.get(touched, property) && Boolean(objectPath.get(errors, property));
  };
}
