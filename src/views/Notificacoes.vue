<template>
    <main class="about-page">
        <div class="container">
        <h1>Notificações</h1>
        <p>Caro usuário,

Gostaríamos de informar que o sistema pwa foi atualizado para a versão 2.0.0. Esta atualização inclui melhorias de desempenho, correções de bugs e novos recursos para aprimorar a sua experiência de uso.

Entre as novidades desta atualização, destacam-se:

    Melhorias na velocidade de carregamento das páginas;
    Correção de erros na visualização de imagens;
    Adição de geoprocessamento remoto e visualizaçao referencial mais avançados;
    Implementação de novas opções de personalização de perfil.

Pedimos que, caso encontre algum problema durante o uso do sistema, entre em contato conosco imediatamente para que possamos solucionar a questão o mais rápido possível.

Agradecemos pela sua compreensão e esperamos que aproveite as novas funcionalidades do sistema.

Atenciosamente,
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
      margin: 25% auto auto auto;
    }
    .container header {
      font-size: 1.5rem;
      color: #333;
      font-weight: 500;
      text-align: center;
    }
</style>