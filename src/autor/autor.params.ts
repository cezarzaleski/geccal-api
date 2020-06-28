import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';

export class AutorParams {
  @ApiModelProperty({default: 0, required: false})
  page: number;

  @ApiModelProperty({default: 10, required: false})
  count: number;

  @ApiModelProperty({required: false})
  noAutor: string;
}