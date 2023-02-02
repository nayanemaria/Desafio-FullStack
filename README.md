## Este projeto foi desenvolvido em Laravel, PostgreSQL, Boostrap e JavaScript.

Abaixo, temos as principais tecnologias por detrás desta aplicação:

## FRONTEND:

HTML
CSS
Boostrap
JAVASCRIPT

## BACKEND:

LARAVEL
PHP
PostgreSQL

## 🚀 Como começar

## Geral:

Use o Visual Studio Code e instale os plugins eslint, prettier e editor config em sua IDE.
Instale o https://brew.sh.

## Instalando o Laravel:

Para instalar o Laravel, é necessário ter o Composer já instalado. Se você não possuir o Composer em seu computador, poderá ver como realizar sua instalação através desse link: https://getcomposer.org/

É necessário possuir o PHP configurado em seu computador. 

Neste projeto, é usada a versão PHP 7.3.29.

Depois de instalar o PHP e o Composer, você pode criar novos projetos Laravel instalando globalmente o instalador do Laravel via Composer:

"composer global require laravel/installer".

Para mais informações sobre a instalação do Laravel, acesse sua documentação em: https://laravel.com/docs/9.x

## Configurando o arquivo .env do aplicativo e conectando ao Banco de Dados do PostgreSQL:

O PostgreSQL é usado neste projeto para armazenar alguns dados em um banco de dados. Por padrão, o ".env", arquivo de configuração do seu aplicativo, especifica que o Laravel estará interagindo com um banco de dados PostgreSQL e acessará o banco de dados em 127.0.0.1.

Cada instalação, em um novo ambiente, exige um arquivo de ambiente personalizado para definir coisas como as configurações de conexão com o banco de dados, as opções de depuração, a URL do aplicativo, entre outros itens que possam variar, dependendo do ambiente em que o aplicativo esteja funcionando.

Edite o arquivo .env na raiz de nosso projeto, informando as credenciais de nosso Banco. Ele ficará assim:

DB_CONNECTION=pgsql
DB_HOST=127.0.0.1
DB_PORT=5432
DB_DATABASE=data_validation
DB_USERNAME=root
DB_PASSWORD=

Além disso, verifique se o PHP possui as DLLs deste Banco de Dados definidos no arquivo de configuração. Se você estiver usando XAMPP, poderá verificar essa configuração no arquivo xampp/php/php.ini. As duas linhas a seguir devem estar sem comentários:

extension=pdo_pgsql
extension=pgsql

Agora, que toda a configuração inicial está realizada, inicie o servidor da API. Para isso, execute o comando "php artisan serve" no Terminal. 

## Executando a migração:

As migrações são um tipo de controle de versão para seu banco de dados. Eles permitem que uma equipe modifique o esquema do banco de dados e se mantenha atualizado sobre o estado atual do esquema.

Para executar a migração do projeto, use o comando:
"php artisan migrate"
