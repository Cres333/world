export const convertCsv = (csvStr) => {
  const csvArray = csvStr.split('\r\n');
  const keys = csvArray[0].split(',');
  const values = csvArray.map((value, index) => {
    if (index === 0 ) return false;
    const data = {};
    const array = value.split(',');
    for (let i = 0; i < array.length; ++i) {
      data[keys[i]] = array[i];
    }
    return data;
  }).filter(Boolean);

  return values;
};

export const fetchCsv = async (path) => {
  let data = [];
  try {
    const response = await fetch(path);
    const reader = response.body.getReader();
    const result = await reader.read();
    const decoder = new TextDecoder('utf-8');
    const csv = await decoder.decode(result.value);
    data = convertCsv(csv);
  } catch (error) {
    console.error(error);
  }
  return data;
};
