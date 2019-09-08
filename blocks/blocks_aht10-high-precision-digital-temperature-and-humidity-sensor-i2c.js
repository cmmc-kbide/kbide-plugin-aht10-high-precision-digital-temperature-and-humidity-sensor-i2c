Blockly.Blocks['aht10'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("AHT101", null,["Plugin.AHT10"], ["Plugin.AHT10"]), "AHT101")
        .appendField("begin");
    this.appendValueInput("AHT10ADD")
        .setCheck(["uint8_t", "Number"])
        .appendField("ADD 0x");
    this.appendValueInput("AHT10SDA")
        .setCheck("Number")
        .appendField("SDA PIN");
    this.appendValueInput("AHT10SCL")
        .setCheck("Number")
        .appendField("SCL PIN");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['gethumidity'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("AHT101", null,["Plugin.AHT10"], ["Plugin.AHT10"]), "AHT101")
        .appendField("GetHumidity");
    this.setInputsInline(true);
    this.setOutput(true, ["float", "Number"]);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['gettemperature'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("AHT101", null,["Plugin.AHT10"], ["Plugin.AHT10"]), "AHT101")
        .appendField("GetTemperature");
    this.setInputsInline(true);
    this.setOutput(true, ["float", "Number"]);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};