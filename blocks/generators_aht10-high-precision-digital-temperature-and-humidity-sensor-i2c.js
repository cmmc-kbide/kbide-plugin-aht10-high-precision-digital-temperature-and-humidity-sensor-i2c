
Blockly.JavaScript['aht10'] = function(block) {
  var variable_aht101 = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('AHT101'), Blockly.Variables.NAME_TYPE);
  var value_aht10add = Blockly.JavaScript.valueToCode(block, 'AHT10ADD', Blockly.JavaScript.ORDER_ATOMIC);
  var value_aht10sda = Blockly.JavaScript.valueToCode(block, 'AHT10SDA', Blockly.JavaScript.ORDER_ATOMIC);
  var value_aht10scl = Blockly.JavaScript.valueToCode(block, 'AHT10SCL', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
        var code =
      `
#EXTINC#include <Wire.h>#END
#EXTINC#include <Thinary_AHT10.h>#END

#VARIABLE
AHT10Class ${variable_aht101};
#END
Wire.begin(${value_aht10sda},${value_aht10scl});\n
while(! ${variable_aht101}.begin(0x${value_aht10add})){
    delay(100);
}
\n
`;
  return code;
};
Blockly.JavaScript['gethumidity'] = function(block) {
  var variable_aht101 = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('AHT101'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble JavaScript into code variable.
  var code = `${variable_aht101}.GetHumidity()`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['gettemperature'] = function(block) {
  var variable_aht101 = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('AHT101'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble JavaScript into code variable.
  var code = `${variable_aht101}.GetTemperature()`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};