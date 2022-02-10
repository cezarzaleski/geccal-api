# Registrar emprestimo de livro

> ## Caso de sucesso

1. Recebe uma requisição do tipo **POST** na rota **/api/v1/emprestimos**
2. Valida dados obrigatórios **livroId**, **matriculaId**, **dataEmprestimo**
3. **Cria** um novo registro de empréstimo
4. Retorna **201** com o emprestimo criado

> ## Exceções

1. ✅ Retorna erro **404** se a API não existir
2. ✅ Retorna erro **400** se livroId ou matriculaId ou dataEmprestimo não forem fornecidos pelo client
4. ✅ Retorna erro **500** se der erro ao tentar registrar o empréstimo
