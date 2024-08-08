import { $ } from '@wdio/globals'

class LoginPage {

    get emailAddressTextField() { return async() => await $('#input-email') }
    get passwordTextField() { return async() => await $('#input-password') }
    get loginBtn() { return async() => await $("//input[@class='btn btn-primary']") }
    get pageHeader() { return async() => await $('=Qafox.com') }
}
export default new LoginPage();