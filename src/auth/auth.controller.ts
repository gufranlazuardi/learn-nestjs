/* eslint-disable prettier/prettier */
import { Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";

// route will be POST /auth/signup || /auth/signin
@Controller('auth')
export class AuthController{
    constructor(private authService: AuthService) {}

    @Post('signup')
    signup() {
        return this.authService.signup()
    }

    @Post('signin')
    signin() {
        return "I am signed in"
    }
}