if ("serial" in navigator) {
    // The Web Serial API is supported.
    console.log("api werkt");
  }

let setup = false;
addEventListener('click', async () => {
    if (!setup) {
        setup = true;

        const port = await navigator.serial.requestPort();
        const ports = await navigator.serial.getPorts();
    
        await port.open({
            baudRate: 115200,  
            dataBits: 8,
            stopBits: 1,
            parity: "none",
            bufferSize: 255,
            flowControl: "hardware",
        });
    
      
          // Prompt user to select an Arduino Uno device.
          
        const { usbProductId, usbVendorId } = port.getInfo();
    
      
    
    // Wait for the serial port to open.
    
    const textDecoder = new TextDecoderStream();
    const readableStreamClosed = port.readable.pipeTo(textDecoder.writable);
    const reader = textDecoder.readable.getReader();
        
        console.log(port);
       
        let txt = "";
        while (true) {
            const { value, done } = await reader.read();
            if (done) {
              // Allow the serial port to be closed later.
                reader.releaseLock();
                
                //console.log(txt);
                //txt = "";
              break;
            }
            // value is a string.
            txt += value;
            //console.log(txt);
    
            if (txt.includes("hallo")) {
                console.log(txt);
                txt = "";
                let picture = webcam.snap();
                console.log(picture);
               
            }
           
        }
        }
    }
  );

