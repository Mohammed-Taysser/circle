import millify from 'millify';

function formateNumber(number: number) {
  return millify(number, { precision: 2 });
}

function formateUnit(number: number) {
  return millify(number, {
    precision: 2,
    units: ['B', 'KB', 'MB', 'GB', 'TB'],
  });
}

export { formateNumber, formateUnit };
