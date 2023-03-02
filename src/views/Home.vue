<template>
  <main class="about-page">
    <section class="container">
      <div class="image-title-home">
        <img src="../assets/sigalogo.jpeg" alt="">
      </div>
      <h1> SIGA </h1>
      <p>Sistema de Inspeção Geográfica Agrícola  ou SIGA é uma solução tecnológica que utiliza tecnologias de georreferenciamento, sensoriamento remoto e análise de imagens para coletar e processar informações sobre áreas agrícolas. Esse sistema é capaz de realizar um monitoramento preciso e contínuo das culturas, identificar áreas com possíveis problemas, tais como pragas, doenças, falta ou excesso de água e nutrientes, além de auxiliar na tomada de decisões pelos produtores rurais. Com isso, o sistema pode aumentar a produtividade, otimizar o uso dos recursos naturais e reduzir o impacto ambiental da agricultura. </p>
    </section>
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
    .image-title-home img{
      position: relative;
      border-radius: 13%;
    }

</style>