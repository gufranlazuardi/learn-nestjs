/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";

@Injectable({})
export class AuthService {

    login() {

    }

    signup() {
        return {message : "hello, i am signed up on 2024"}
    }
}

