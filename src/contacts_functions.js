export const generateContactId = () => {
  return Math.round(Math.random() * 100000000).toString(36);
};

generateContactId();