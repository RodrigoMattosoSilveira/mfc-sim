const fs = require('fs');

export class PppTallyCsv {
    private logger: any;
    private static instance: PppTallyCsv;

    constructor() {
       console.log(`Created new instance of PppTallyCsv`);
    }

    static getInstance(): PppTallyCsv {
        if (!PppTallyCsv.instance) {
            PppTallyCsv.instance = new PppTallyCsv();
        }
        return PppTallyCsv.instance;
    }
    open()  {
        this.logger = fs.createWriteStream('./src/io/ppp-tally.csv', {
            flags: 'w' // 'a' means appending (old data will be preserved)
        })
    }
    writeLine (pppTallyLine: string)  {
        if (!this.logger) {
           this.open()
        }
        this.logger.write(pppTallyLine) // append string to your file
    }
    close (line:string)  {
        if (this.logger) {
            this.logger.close()
        }
    }
}