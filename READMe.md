# Wingu

Wingu is an npm package that provides functionality for handling login processes, recording password dwell times, and making requests to a login API.

## Installation

Install the package using npm:

```shell
npm install wingu

```
## Usage
```
    import Wingu from "wingu";    
```
### Getting Started
- Create an instance of the Wingu class, passing the IDs of the username and password fields as arguments to the constructor:
```
    const wingu = new Wingu("usernameFieldId", "passwordFieldId");
```
- Start recording password dwell times by calling the start() method:
```
    wingu.start();
```
- Implement the login functionality and specify a callback function to handle the response:

```
wingu.login((res) => {
  // Handle the response
});

```
Make sure to replace "usernameField" and "passwordField" with the actual IDs of your username and password fields.

### License
This project is licensed under the MIT License.