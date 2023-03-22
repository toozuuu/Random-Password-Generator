import {AfterViewInit, ChangeDetectorRef, Component} from '@angular/core';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.scss'],
})
export class PublicComponent implements AfterViewInit {
  password: string = '';
  backgroundColor: string = '';

  passwordLength: number = 12;
  passwordLowerCase: boolean = true;
  passwordUpperCase: boolean = true;
  passwordNumbers: boolean = true;
  passwordSymbols: boolean = true;

  passwordGenerated = false;

  constructor(private cdr: ChangeDetectorRef) {
  }

  ngAfterViewInit(): void {
    this.generatePassword();
    this.cdr.detectChanges();
  }

  /**
   * Generates a random password based on specified options and sets it to the `password` property.
   * Also triggers change detection to update the view.
   *
   * @example
   * this.generatePassword();
   * console.log(this.password); // '9E%5q3&c0tS#'
   */
  generatePassword() {
    const length = this.passwordLength;
    const options = {
      lowercase: this.passwordLowerCase,
      uppercase: this.passwordUpperCase,
      numbers: this.passwordNumbers,
      symbols: this.passwordSymbols
    };
    let charset = '';
    if (options.lowercase) charset += 'abcdefghijklmnopqrstuvwxyz';
    if (options.uppercase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (options.numbers) charset += '0123456789';
    if (options.symbols) charset += '!@#$%^&*()_+-={}[]|\\:;"<>,.?/~';
    let password = '';
    for (let i = 0; i < length; i++) {
      password += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    this.password = password;
    this.passwordGenerated = true;
    this.cdr.detectChanges();
  }

  /**
   * Calculates the strength of a password based on various criteria and returns a string indicating the strength level.
   * Also sets the background color of the element to green, orange, or red depending on the password strength.
   *
   * @param password - The password string to check the strength of.
   * @returns A string indicating the strength level of the password (either 'Weak', 'Medium', or 'Strong').
   *
   * @example
   * const passwordStrength = this.getPasswordStrength('MyPassw0rd!');
   * console.log(passwordStrength); // 'Strong'
   */
  getPasswordStrength(password: string): string {
    let lengthScore: number;
    if (password?.length < 12) {
      lengthScore = password?.length < 8 ? 0 : 1;
    } else {
      lengthScore = password?.length < 8 ? 0 : 2;
    }
    const lowercaseRegex = /[a-z]/;
    const uppercaseRegex = /[A-Z]/;
    const numbersRegex = /\d/;
    const symbolsRegex = /[-\/\\^$*+?.()|[\]{}]/g;
    const lowercaseScore = lowercaseRegex.test(password) ? 1 : 0;
    const uppercaseScore = uppercaseRegex.test(password) ? 1 : 0;
    const numbersScore = numbersRegex.test(password) ? 1 : 0;
    const symbolsScore = symbolsRegex.test(password) ? 2 : 0;
    const totalScore = lengthScore + lowercaseScore + uppercaseScore + numbersScore + symbolsScore;
    if (totalScore >= 6) {
      this.backgroundColor = 'green';
      return 'Strong';
    } else if (totalScore >= 4) {
      this.backgroundColor = 'orange';
      return 'Medium';
    } else {
      this.backgroundColor = 'red';
      return 'Weak';
    }
  }

  formatLabel(value: number): string {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }
    return `${value}`;
  }


}
