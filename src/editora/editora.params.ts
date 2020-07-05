import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';

export class EditoraParams {
  @ApiModelProperty({default: 0, required: false})
  page: number;

  @ApiModelProperty({default: 10, required: false})
  count: number;

  @ApiModelProperty({required: false})
  noEditora: string;

  @ApiModelProperty({default: 1, required: false})
  stAtivo: number;
}