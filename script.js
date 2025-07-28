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

// Add event listeners to number/operator buttons
for (let id in buttons) {
  document.getElementById(id).addEventListener('click', () => {
    display.value += buttons[id];
  });
}

// Handle calculation
document.getElementById('calc').addEventListener('click', () => {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = 'Error';
  }
});

// Clear display
document.getElementById('clear').addEventListener('click', () => {
  display.value = '';
});

