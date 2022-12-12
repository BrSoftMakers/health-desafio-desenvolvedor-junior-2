// Source: https://stackoverflow.com/questions/55988065/react-how-to-format-phone-number-as-user-types
const normalizePhone = (value, previousValue) => {
  if (value) {
    const currentValue = value.replace(/[^\d]/g, '');
    const cvLength = currentValue.length;

    if (!previousValue || value.length > previousValue.length) {
      if (cvLength < 2) return `(${currentValue}`;
      if (cvLength < 7) return `(${currentValue.slice(0, 2)}) ${currentValue.slice(2)}`;
      if (cvLength < 11) {
        return (
          `(${currentValue.slice(0, 2)}) ${currentValue.slice(2, 6)}-${currentValue.slice(6)}`
        );
      }
      return (
        `(${currentValue.slice(0, 2)}) ${currentValue.slice(2, 3)} ${currentValue.slice(3, 7)}-${currentValue.slice(7, 11)}`
      );
    }
  }

  return value;
};

export default normalizePhone;
