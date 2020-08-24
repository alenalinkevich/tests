import { Injectable } from '@angular/core';

import Unsplash from 'unsplash-js';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  constructor() { }

  buildAutentificationString(): string {
    const unsplash: Unsplash = new Unsplash({
      accessKey: "X1flNWcz9VUdOtGaWrciagqZO1_tiYb9eaWGal_xNU0",
      secretKey: "955ENv1kxwsTBc4t1D4yebhYnxcj9bqzebnvgajDl7E",
      callbackUrl: "http%3A%2F%2Flocalhost%3A4200%2F",
      timeout: 10000
    });

    const authenticationUrl = unsplash.auth.getAuthenticationUrl([
      "public",
      "read_user",
      "read_photos",
      "write_collections",
      "read_collections"
    ])

    return authenticationUrl;
  }
}

