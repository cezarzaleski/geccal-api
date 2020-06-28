import { Module } from '@nestjs/common';
import { AutenticacaoService } from './autenticacao.service';
import { UsuarioModule } from 'src/usuario/usuario.module';
import { LocalStrategy } from 'src/autenticacao/local.strategy';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from 'src/autenticacao/constants';
import { JwtStrategy } from 'src/autenticacao/jwt.strategy';

@Module({
  imports: [
    UsuarioModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    })
  ],
  providers: [AutenticacaoService, LocalStrategy, JwtStrategy],
  exports: [AutenticacaoService]
})
export class AutenticacaoModule {}
