import { Module } from '@nestjs/common';
import { AutenticacaoService } from './autenticacao.service';
import { UsuarioModule } from 'src/usuario/usuario.module';
import { LocalStrategy } from 'src/autenticacao/local.strategy';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from 'src/autenticacao/constants';
import { JwtStrategy } from 'src/autenticacao/jwt.strategy';
import { AutenticacaoController } from './autenticacao.controller';

@Module({
  imports: [
    UsuarioModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '2 days' },
    })
  ],
  providers: [AutenticacaoService, LocalStrategy, JwtStrategy],
  exports: [AutenticacaoService],
  controllers: [AutenticacaoController]
})
export class AutenticacaoModule {}
