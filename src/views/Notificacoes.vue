<template>
    <main class="notificacoes-page">
        <div class="container">
        <h1>Notificações</h1>
        <p class="text-notificacao">Caro usuário, 
            <br>
Gostaríamos de informar que o sistema pwa foi atualizado para a versão 2.0.0. Esta atualização inclui melhorias de desempenho, correções de bugs e novos recursos para aprimorar a sua experiência de uso.
                <br>
                <br>
Entre as novidades desta atualização, destacam-se:
                        <br>
                        <br>
    Melhorias na velocidade de carregamento das páginas;
    <br>
    Correção de erros na visualização de imagens;
    <br>
    Adição de geoprocessamento remoto e visualizaçao referencial mais avançados;
    <br>
    Implementação de novas opções de personalização de ambiente.
                            <br>
                            <br>
Pedimos que, caso encontre algum problema durante o uso do sistema, entre em contato conosco imediatamente para que possamos solucionar a questão o mais rápido possível.
                            <br>
                            <br>
Agradecemos pela sua compreensão e esperamos que aproveite as novas funcionalidades do sistema.
                            <br>
                            <br>
Atenciosamente,
<br>
Equipe de Desenvolvimento do Sistema.</p>
</div>
    </main>
</template>


<style scoped>
 @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
    
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
        text-align: center;
        color:var(--text-color);
        
        
        }
    
    .container {
      position: relative;
      max-width: 700px;
      width: 100%;
      background:var(--box-color);
      padding: 40px;
      border-radius: 8px;
      box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
      margin: 2% auto auto auto;
    }
    .container header {
      font-size: 1.5rem;
      color: #333;
      font-weight: 500;
      text-align: center;
    }
    .text-notificacao{
        text-align: left;
    }
</style>