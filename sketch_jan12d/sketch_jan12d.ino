
const int buttonPin = 2;
int buttonState = 0;

void setup() {
  // put your setup code here, to run once:
Serial.begin(115200);

    pinMode(buttonPin, INPUT);
}

void loop() {
  // put your main code here, to run repeatedly:



  buttonState = digitalRead(buttonPin);
    if (buttonState == HIGH) {
   Serial.println("hallo");
   delay(500);
  }else {
  
  }
}
