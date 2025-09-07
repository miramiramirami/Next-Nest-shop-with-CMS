import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { Profile, Strategy } from 'passport-yandex';

@Injectable()
export class YandexStrategy extends PassportStrategy(Strategy, 'yandex') {
  constructor(private configService: ConfigService) {
    super({
      clientID: configService.getOrThrow('YANDEX_CLIENT_ID'),
      clientSecret: configService.getOrThrow('YANDEX_CLIENT_SECRET'),
      callbackURL:
        configService.getOrThrow('SERVER_URL') + '/auth/yandex/callback',
    });
  }

  async validate(
    _accessToken: string,
    _refreshToken: string,
    profile: Profile,
    done: any,
  ) {
    const { userName, emails, photos } = profile;

    if (!emails || emails.length === 0) {
      return done(new Error('Email not provided by Yandex'), false);
    }

    const user = {
      email: emails[0].value,
      name: userName,
      picture: photos?.[0]?.value || '',
    };

    done(false, user);
  }
}
