usuarios
- id
- nome
- email
- estado
- passwordHash
- token

estados
- id
- nome

categorias
- id
- nome (terrenos ou locação)
- slug

localizacao
- id
- local (ex ninho verde II)

anuncios
- id
- usuario_id
- estado_id
- categoria_id 
- localizacao_id
- title
- descricao
- imagens [{ url: http:, default: true }]
- endereco
- valor
- views
- status
- created

