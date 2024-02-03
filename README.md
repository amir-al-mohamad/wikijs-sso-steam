# wikijs-sso-steam
 Wiki.js Steam SSO

In `docker-compose.yml`
```
    volumes:
      - ./server/modules/authentication/steam:/wiki/server/modules/authentication/steam
      - ./server/modules/authentication/steam/assets/auth-icon-steam.svg:/wiki/assets/svg/auth-icon-steam.svg
```
