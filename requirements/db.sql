create table autor
(
    id_autor    int auto_increment
        primary key,
    dt_cadastro datetime     not null,
    no_autor    varchar(255) not null,
    st_ativo    int          not null
)
    charset = latin1;

create table ciclo
(
    id_ciclo int auto_increment
        primary key,
    no_ciclo varchar(45) not null,
    st_ativo tinyint(1)  not null
)
    charset = latin1;

create table editora
(
    id_editora  int auto_increment
        primary key,
    no_editora  varchar(45) not null,
    dt_cadastro datetime    not null,
    st_ativo    tinyint(1)  not null,
    constraint UK9j4cibmcb62p29t5obqfo3ifv
        unique (no_editora, st_ativo)
)
    charset = latin1;

create table evangelizando
(
    id_evangelizando int auto_increment
        primary key,
    no_evangelizando text        not null,
    dt_cadastro      datetime    not null,
    st_ativo         tinyint(1)  not null,
    no_sexo          varchar(45) not null,
    no_pai           text        null,
    no_mae           text        null,
    no_endereco      text        null,
    no_bairro        varchar(20) null,
    no_cidade        varchar(45) null,
    nu_cep           varchar(9)  null,
    dt_nascimento    datetime    null,
    nu_fone_res      varchar(14) null,
    nu_fone_cel      varchar(14) null,
    no_obs           text        null
)
    charset = latin1;

create table funcao_atividade
(
    id_func   int auto_increment
        primary key,
    no_funcao varchar(45) not null,
    st_ativo  tinyint(1)  not null
)
    charset = latin1;

create table colaborador
(
    id_colaborador int auto_increment
        primary key,
    no_colaborador text        not null,
    st_ativo       tinyint(1)  not null,
    no_endereco    varchar(45) null,
    no_bairro      varchar(20) null,
    no_cidade      varchar(45) null,
    nu_cep         varchar(9)  null,
    dt_cadastro    datetime    null,
    no_sexo        varchar(10) null,
    nu_fone_res    varchar(14) null,
    nu_fone_cel    varchar(14) null,
    no_email       varchar(45) null,
    id_func        int         not null,
    constraint fk_colaborador_funcao_atividade1
        foreign key (id_func) references funcao_atividade (id_func)
)
    charset = latin1;

create table hibernate_sequence
(
    next_val bigint null
);

create table modulo
(
    id_modulo   int auto_increment
        primary key,
    no_modulo   varchar(45) not null,
    no_menu     varchar(45) not null,
    st_ativo    tinyint(1)  not null,
    dt_cadastro datetime    not null,
    no_img      text        not null
)
    charset = latin1;

create table controller
(
    id_controller int auto_increment
        primary key,
    no_controller text        not null,
    no_submodulo  varchar(45) not null,
    dt_cadastro   datetime    not null,
    st_ativo      tinyint(1)  not null,
    id_modulo     int         not null,
    constraint fk_controller_modulo1
        foreign key (id_modulo) references modulo (id_modulo)
)
    charset = latin1;

create index fk_controller_modulo1_idx
    on controller (id_modulo);

create table municipio
(
    cod_municipio           bigint       not null
        primary key,
    nom_municipio_formatado varchar(255) null,
    num_lat_sede            varchar(255) null,
    num_lon_sede            varchar(255) null,
    sit_cancelado           varchar(255) null
);

create table origem_livro
(
    id_origem_livro int auto_increment
        primary key,
    no_origem       text       not null,
    st_ativo        tinyint(1) not null
)
    charset = latin1;

create table perfil
(
    id_perfil int auto_increment
        primary key,
    no_perfil varchar(45) not null,
    st_ativo  tinyint(1)  not null
)
    charset = latin1;

create table recadastramento_livro
(
    id_recadastramento_livro int auto_increment
        primary key,
    id_livro                 int  not null,
    nu_exemplar              int  not null,
    date                     date not null
)
    collate = utf8_unicode_ci;

create table tb_controle_livro
(
    id_livro     int  not null,
    dt_controle  date not null,
    st_encontrou char not null
)
    collate = utf8_unicode_ci;

create table tipo_funcionalidade
(
    id_tipo_funcionalidade int auto_increment
        primary key,
    no_tipo_funcionalidade varchar(45) not null,
    st_ativo               tinyint(1)  not null
)
    charset = latin1;

create table funcionalidade
(
    id_funcionalidade      int auto_increment
        primary key,
    no_funcionalidade      varchar(45) not null,
    dt_cadastro            datetime    not null,
    st_ativo               tinyint(1)  not null,
    no_menu                varchar(45) null,
    id_tipo_funcionalidade int         not null,
    id_controller          int         not null,
    constraint fk_funcionalidade_controller1
        foreign key (id_controller) references controller (id_controller),
    constraint fk_funcionalidade_tipo_funcionalidade1
        foreign key (id_tipo_funcionalidade) references tipo_funcionalidade (id_tipo_funcionalidade)
)
    charset = latin1;

create index fk_funcionalidade_controller1_idx
    on funcionalidade (id_controller);

create index fk_funcionalidade_tipo_funcionalidade1_idx
    on funcionalidade (id_tipo_funcionalidade);

create table funcionalidade_perfil
(
    id_funcionalidade int not null,
    id_perfil         int not null,
    primary key (id_funcionalidade, id_perfil),
    constraint fk_funcionalidade_has_perfil_funcionalidade1
        foreign key (id_funcionalidade) references funcionalidade (id_funcionalidade),
    constraint fk_funcionalidade_has_perfil_perfil1
        foreign key (id_perfil) references perfil (id_perfil)
)
    charset = latin1;

create table uf
(
    cod_uf           bigint       not null
        primary key,
    nom_uf_formatado varchar(255) null,
    sig_uf           varchar(255) null,
    sit_cancelado    varchar(255) null
);

create table usuario
(
    id_usuario     int auto_increment
        primary key,
    no_usuario     varchar(45) not null,
    no_senha       text        not null,
    dt_cadastro    datetime    not null,
    st_ativo       tinyint(1)  not null,
    dt_ult_visita  datetime    null,
    dt_desativacao datetime    null,
    id_perfil      int         not null,
    id_colaborador int         not null,
    constraint fk_usuario_colaborador1
        foreign key (id_colaborador) references colaborador (id_colaborador),
    constraint fk_usuario_perfil1
        foreign key (id_perfil) references perfil (id_perfil)
)
    charset = latin1;

create table emprestimo
(
    id_emprestimo          int auto_increment
        primary key,
    dt_emprestimo          datetime   not null,
    dt_prev_devolucao      datetime   not null,
    nu_ano                 int        not null,
    st_ativo               tinyint(1) not null,
    dt_devolucao           datetime   null,
    id_colaborador         int        null,
    id_evangelizando_turma int        null,
    id_usuario             int        not null,
    id_livro               int        not null,
    constraint fk_emprestimo_usuario1
        foreign key (id_usuario) references usuario (id_usuario)
)
    charset = latin1;

create index fk_emprestimo_colaborador1_idx
    on emprestimo (id_colaborador);

create index fk_emprestimo_evangelizando_turma1_idx
    on emprestimo (id_evangelizando_turma);

create index fk_emprestimo_livro1_idx
    on emprestimo (id_livro);

create index fk_emprestimo_usuario1_idx
    on emprestimo (id_usuario);

create table livro
(
    id_livro        int auto_increment
        primary key,
    no_livro        text        not null,
    nu_exemplar     varchar(10) not null,
    dt_cadastro     datetime    not null,
    st_ativo        tinyint(1)  not null,
    nu_edicao       varchar(11) null,
    nu_ano          int         null,
    no_obs          text        null,
    id_editora      int         not null,
    id_usuario      int         not null,
    id_origem_livro int         not null,
    constraint fk_livro_editora1
        foreign key (id_editora) references editora (id_editora),
    constraint fk_livro_origem_livro1
        foreign key (id_origem_livro) references origem_livro (id_origem_livro),
    constraint fk_livro_usuario1
        foreign key (id_usuario) references usuario (id_usuario)
)
    charset = latin1;

create table autor_livro
(
    id_autor int not null,
    id_livro int not null,
    primary key (id_autor, id_livro),
    constraint fk_autor_has_livro_autor1
        foreign key (id_autor) references autor (id_autor),
    constraint fk_autor_has_livro_livro1
        foreign key (id_livro) references livro (id_livro)
)
    charset = latin1;

create index fk_autor_has_livro_autor1_idx
    on autor_livro (id_autor);

create index fk_autor_has_livro_livro1_idx
    on autor_livro (id_livro);

create table baixa_livro
(
    id_baixa_livro    int auto_increment
        primary key,
    dt_baixa          datetime   not null,
    no_motivo_baixa   text       not null,
    st_ativo          tinyint(1) not null,
    dt_retorno        datetime   null,
    no_motivo_retorno text       null,
    id_usuario        int        not null,
    id_livro          int        not null,
    constraint fk_baixa_livro_livro1
        foreign key (id_livro) references livro (id_livro),
    constraint fk_baixa_livro_usuario1
        foreign key (id_usuario) references usuario (id_usuario)
)
    charset = latin1;

create index fk_livro_origem_livro1_idx
    on livro (id_origem_livro);

create table turma
(
    id_turma        int auto_increment
        primary key,
    dt_inicio       datetime   not null,
    dt_fim          datetime   not null,
    nu_idade_minima int        not null,
    nu_idade_maxima int        not null,
    nu_ano          int        not null,
    st_ativo        tinyint(1) not null,
    no_obs          text       null,
    id_ciclo        int        not null,
    id_usuario      int        not null,
    constraint fk_turma_ciclo1
        foreign key (id_ciclo) references ciclo (id_ciclo),
    constraint fk_turma_usuario1
        foreign key (id_usuario) references usuario (id_usuario)
)
    charset = latin1;

create table colaborador_turma
(
    id_colaborador_turma int auto_increment
        primary key,
    data_cadastro        datetime   not null,
    st_ativo             tinyint(1) not null,
    id_turma             int        not null,
    id_colaborador       int        not null,
    id_usuario           int        not null,
    constraint fk_colaborador_turma_colaborador1
        foreign key (id_colaborador) references colaborador (id_colaborador),
    constraint fk_colaborador_turma_turma1
        foreign key (id_turma) references turma (id_turma),
    constraint fk_colaborador_turma_usuario1
        foreign key (id_usuario) references usuario (id_usuario)
)
    charset = latin1;

create index fk_colaborador_turma_colaborador1_idx
    on colaborador_turma (id_colaborador);

create index fk_colaborador_turma_turma1_idx
    on colaborador_turma (id_turma);

create index fk_colaborador_turma_usuario1_idx
    on colaborador_turma (id_usuario);

create table evangelizando_turma
(
    id_evangelizando_turma int auto_increment
        primary key,
    st_ativo               tinyint(1) not null,
    dt_cadastro            datetime   not null,
    id_turma               int        not null,
    id_evangelizando       int        not null,
    id_usuario             int        not null,
    constraint fk_evangelizando_turma_evangelizando1
        foreign key (id_evangelizando) references evangelizando (id_evangelizando),
    constraint fk_evangelizando_turma_turma1
        foreign key (id_turma) references turma (id_turma),
    constraint fk_evangelizando_turma_usuario1
        foreign key (id_usuario) references usuario (id_usuario)
)
    charset = latin1;

create index fk_evangelizando_turma_evangelizando1_idx
    on evangelizando_turma (id_evangelizando);

create index fk_evangelizando_turma_turma1_idx
    on evangelizando_turma (id_turma);

create index fk_evangelizando_turma_usuario1_idx
    on evangelizando_turma (id_usuario);

create index fk_turma_ciclo1_idx
    on turma (id_ciclo);

create index fk_turma_usuario1_idx
    on turma (id_usuario);

