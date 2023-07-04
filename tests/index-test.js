import assert from 'assert';

class KeyInput {
  constructor (){
      this.keys= {};
      process.stdin.on('data', this.down.bind(this));
      process.stdin.on('keypress', this.up.bind(this));
  }
  isPressed(keyCode){
      return this.keys[keyCode] ? this.keys[keyCode] : false;
  }
  down(data){
      const key = data.toString().trim();
      if (this.keys[key]) return;
      this.keys[key] = true;
      console.log("KeyDown", key.charCodeAt(0), key);
  }
  up(data){
      const key = data.toString().trim();
      this.keys[key] = false;
      console.log("KeyUp", key.charCodeAt(0), key);
  }
}


export default KeyInput;

const keyInput = new KeyInput();

function countPressedKeys() {
  let count = 0;
  for (let keyCode in keyInput.keys) {
    if (keyInput.isPressed(keyCode)) {
      count++;
    }
  }
  return count;
}

describe('KeyInput', function() {
  describe('#isPressed()', function() {
    it('Debe devolver false cuando no se esté pulsando la tecla', function() {
      assert.equal(keyInput.isPressed(65), false);
    });
    it('Debe devolver true cuando se esté pulsando la tecla', function() {
      keyInput.keys[65] = true;
      assert.equal(keyInput.isPressed(65), true);
    });
  });
});

describe('countPressedKeys', function() {
    it('Debe devolver el numero de teclas pulsadas', function() {
    keyInput.keys[65] = true;
    keyInput.keys[66] = true;
    assert.equal(countPressedKeys(), 2);
  });
});

