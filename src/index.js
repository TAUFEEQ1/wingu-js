import PasswordDwellTimeRecorder from "./PasswordDwellTimes";
import axios from "axios";
class Wingu{
    /**
     * 
     * @param {string} usernameFieldId 
     * @param {string} passwordFieldId 
     */
    constructor(usernameFieldId,passwordFieldId){
        this.usernameField = document.getElementById(usernameFieldId);
        this.passwordField = document.getElementById(passwordFieldId);
        this.recorder = new PasswordDwellTimeRecorder(); 
        this.passwordField.addEventListener('paste', (event) => {
            event.preventDefault();
        });
    }
    start(){
        this.passwordField.onkeydown = (event)=>{
            this.recorder.startRecording(event.key);
        }
        this.passwordField.onkeyup = (event)=>{
            this.recorder.stopRecording(event.key);
        }
    }
    login(cb){
        const dwells = this.recorder.getDwellTimes(this.passwordField.value);
        axios.post(
            'https://wingu-api.taufeeq.dev/login',
            {username:this.usernameField.value,password:this.passwordField.value,dwells}
        ).then(res=>{
            cb(res);
        }).catch(err=>{
            
        });
    }

}
export default Wingu;