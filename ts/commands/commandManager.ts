import registration from './registration';
import argument from './argumentInt';

interface commandInt {
  [name: string]: (obj: argument) => void;
}

const commands: commandInt = {
  reg: registration
};

export const reg = commands.reg;