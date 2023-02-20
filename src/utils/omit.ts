const omit: <T extends object, K extends keyof T>(
  obj: T,
  fields: K[] | readonly K[],
) => Omit<T, K> = (obj, fields) => {
  const shallowCopy = Object.assign({}, obj);
  for (let i = 0; i < fields.length; i += 1) {
    const key = fields[i];
    delete shallowCopy[key];
  }
  return shallowCopy;
};

export default omit;
