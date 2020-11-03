import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';
import { SituacaoEnum } from 'src/enums/situacao.enum';

export class AbstractParams {
  @ApiModelProperty({default: 0, required: false})
  page: number;

  @ApiModelProperty({default: 10, required: false})
  count: number;

  @ApiModelProperty({default: 'ativo', required: false, enum: ['ativo', 'inativo'],})
  situacao: SituacaoEnum = SituacaoEnum.ativo;

  public stAtivo: number = 1;
}
