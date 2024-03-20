// C++ code
//
long readUltrasonicDistance(int triggerPin, int echoPin)
{
  pinMode(triggerPin, OUTPUT);  // Clear the trigger
  digitalWrite(triggerPin, LOW);
  delayMicroseconds(2);
  // Sets the trigger pin to HIGH state for 10 microseconds
  digitalWrite(triggerPin, HIGH);
  delayMicroseconds(10);
  digitalWrite(triggerPin, LOW);
  pinMode(echoPin, INPUT);
  // Reads the echo pin, and returns the sound wave travel time in microseconds
  return pulseIn(echoPin, HIGH);
}

void setup()
{
  pinMode(A0, INPUT);
  pinMode(6, OUTPUT);
  pinMode(7, OUTPUT);
  pinMode(13, OUTPUT);
}

void loop()
{
  if (analogRead(A0) >= 600) {
    digitalWrite(6, HIGH);
    digitalWrite(7, HIGH);
    delay(1000); // Wait for 1000 millisecond(s)
    digitalWrite(6, LOW);
    digitalWrite(7, LOW);
    delay(1000); // Wait for 1000 millisecond(s)
  } else {
    digitalWrite(6, LOW);
    digitalWrite(7, LOW);
  }

  if (0.01723 * readUltrasonicDistance(10, 11) > 1 && 0.01723 * readUltrasonicDistance(10, 11) < 336) {
    digitalWrite(13, HIGH);
  } else {
    digitalWrite(13, LOW);
  }
}
