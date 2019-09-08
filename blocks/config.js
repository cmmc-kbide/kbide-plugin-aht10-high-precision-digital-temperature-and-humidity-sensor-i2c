module.exports = [
    {
        name: "AHT10",
        blocks: [
            {
                xml:
                    `<block type="aht10">
                        <value name="AHT10ADD">
                            <shadow type="math_number">
                                <field name="NUM">38</field>
                            </shadow>
                        </value>
                        <value name="AHT10SDA">
                            <shadow type="math_number">
                                <field name="NUM">21</field>
                            </shadow>
                        </value>
                        <value name="AHT10SCL">
                            <shadow type="math_number">
                                <field name="NUM">22</field>
                            </shadow>
                        </value>
                     </block>
                     <block type="gethumidity">
                     </block>
                     <block type="gettemperature">
                     </block>`
            }
        ]
    }
];