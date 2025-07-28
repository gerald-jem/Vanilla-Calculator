const display = document.getElementById('display');

const buttons = {
  numb0: '0',
  numb1: '1',
  numb2: '2',
  numb3: '3',
  numb4: '4',
  numb5: '5',
  numb6: '6',
  numb7: '7',
  numb8: '8',
  numb9: '9',
  add: '+',
  sub: '-',
  mul: '*',
  div: '/'
};

for (let id in buttons) {
  document.getElementById(id).addEventListener('click', () => {
    display.value += buttons[id];
  });
}

document.getElementById('calc').addEventListener('click', () => {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = 'Error';
  }
});

document.getElementById('clear').addEventListener('click', () => {
  display.value = '';
});

