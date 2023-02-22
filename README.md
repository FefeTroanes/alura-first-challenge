  # Alura First Challenge: Encryptor
<img src="https://www.aluracursos.com/assets/img/home/alura-logo.1647533644.svg">

<br><br><br>

## Built with

* HTML
* CSS
* TypeScript
* Generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.4.

<p align="right">(<a href="#top">back to top</a>)</p>


## Getting started

To see the app working click [here](https://fefetroanes.github.io/alura-first-challenge/)

This application is an encryptor proposed as a challenge in the alura + oracle course.
We were asked to make it with html, css and js but I decided to make it with angular since I'm starting to learn this framework and I took the opportunity to practice a bit.

## About the encryptor

The encryption is based on replacing the vowels of the entered text with the following text strings:
- `The letter "e" is converted to "enter".`
- `The letter "i" is converted to "imes".`
- `The letter "a" is converted to "ai".`
- `The letter "o" is converted to "ober".`
- `The letter "u" is converted for "ufat".`

It should work only with lowercase letters.<br>
Letters with accents or special characters should not be used.<br>
If encrypted text is entered it should return the decrypted version of the text.

For example:
"gato" => "gaitober".
gaitober" => "gato".

The page must have fields for inserting the text to be encrypted or decrypted, the buttons for encrypting or decrypting are enabled/disabled depending on whether what is entered is already encrypted or not.

### Extras:

- A button that copies the encrypted/decrypted text for the transfer section, i.e. has the same functionality as ctrl+C or the "copy" option in the applications menu.

(It still needs a couple of minor bug fixes but I'm currently working on other things.)