
## VASchedules to vAMSYS Converter

Created by Plasma for Emirates Virtual (discord.gg/YqhZ4CHNc8 | ekvirtual.net)

**Compatible with vAMSYS v5**

This converts **schedules** from virtualairlineschedules.net to a valid **routes** file for use with vAMSYS importers.

### How to use?

Currently, this converter will only convert **schedules** from VASchedules and **not** fleets or airports. If this is something you want, let me know.
 
1. Download [NodeJS LTS](https://nodejs.org/en). I have created this using NodeJS v22.9.0
2. Download the repository. You can clone it using git clone, or just download it as a .zip file.
3. Extract the folder if you downloaded a .zip file.
4. Open a terminal window inside the repository folder.
5. Run `npm i`. This will install any and all dependencies requires for the program to run. Keep this window open for later.
6. Take your route file from VASchedules and rename it to **before.csv**. Place it inside the repository. This file should be in the same place as `index.js`
7. Run `node index.js` using the same terminal window you opened earlier.
8. The output file will be created named **after.csv**. Edit it accordingly before uploading and importing it to vAMSYS. 

Remember to read the docs -- there should be **no** "MANUAL ROUTE PLANNING REQUIRED" and also fill in the **Type** of route it is. Every route is automatically set as visible.

### The fleets column still uses ICAO codes! vAMSYS needs IDs now!

Use this [formula](https://discord.com/channels/398186537952477196/1283867174548537354/1291835331217457202) to automatically convert the fleet ICAO codes to vAMSYS IDs. This has been tested with Google Sheets. Compatibility with Excel is unknown.

*Note: Access to the vAMSYS discord is required to view this.*

Contact ImPlasma on discord or create an issue if you need help.
