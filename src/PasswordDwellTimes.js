// passwordDwellTime.js

class PasswordDwellTimeRecorder {
    constructor() {
      this.dwellTimes = {};
      this.keyStartTime = {};
    }
  
    startRecording(key) {
  
      this.keyStartTime[key] = new Date();
      console.log(`Recording started for key '${key}'.`);
    }
  
    stopRecording(key) {

      const startTime = this.keyStartTime[key];
      const endTime = new Date();
      const dwellTime = endTime - startTime;
  
      if (!this.dwellTimes[key]) {
        this.dwellTimes[key] = [];
      }
      this.dwellTimes[key].push(dwellTime);
  
      delete this.keyStartTime[key];
  
    }
  
    getDwellTimes(keys) {
      const dwells = [];
      for (const key in keys) {
        const dwellTimesForKey = this.dwellTimes[key];
        dwells.push(dwellTimesForKey);
      }
      return dwells;
    }
  }
  
  export default PasswordDwellTimeRecorder;
  