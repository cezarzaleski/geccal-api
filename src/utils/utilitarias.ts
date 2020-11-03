import { SituacaoEnum } from 'src/enums/situacao.enum';
import { AbstractParams } from 'src/params/abstract.params';


export function formatarParams(params: AbstractParams): AbstractParams {
    if (params.situacao && params.situacao === SituacaoEnum.ativo) params.stAtivo = 1;
    if (params.situacao && params.situacao === SituacaoEnum.inativo) params.stAtivo = 0;
    delete params.situacao;
    return params;
}
