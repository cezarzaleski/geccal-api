import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';
import { AbstractParams } from 'src/params/abstract.params';

export class EditoraParams extends AbstractParams {

  @ApiModelProperty({required: false})
  noEditora: string;
}
