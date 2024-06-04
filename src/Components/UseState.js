import React, { useState, useEffect } from 'react';
import { Button, View } from 'react-native';

import Clock from './Clock';

function UseState() {
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <View>
      <Clock currentTime={currentTime} />
      {/* <Button title="Actualiser l'heure" onPress={() => setCurrentTime(new Date().toLocaleTimeString())} /> */}
    </View>
  );
}

export default UseState;
