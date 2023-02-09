<template>
    <head>
        
    </head>
        <main class="home-page">
            <h1>Sistema  de Inspeção Geográfica Agrícola</h1>
            
            <section class="container">
          <header>Informações da Lavoura</header>
          <form action="#" class="form">
            <div class="column">
              <div class="input-box">
                  <label>Data da Vistoria</label>
                  <input type="date" placeholder="" required />
              </div>
    
              <div class="input-box">
                  <label for="cultura">Cultura:</label>
                                    <select name="Culturas" id="cultura" class="input-box cultura">
                                        <option value="Milho">Milho</option>
                                        <option value="Soja">Soja</option>
                                        <option value="Aveia">Aveia</option>
                                        <option value="Trigo">Trigo</option>
                                    </select>
              </div>
            </div>
              <div class="colunm">
              <div class="input-box">
                  <label>Data Inicio do Plantio</label>
                  <input type="date" placeholder="" required />
              </div>

              <div class="input-box">
                <label>Data Final do Platio</label>
                <input type="date" placeholder="" required />
              </div>
              
            </div>

            <div class="column">
                  <div class="input-box">
                    <label for="nome"><b>Nome da Variedade:</b></label>
                    <input id="nome" name="Nome" type="text" class="form-control" placeholder="Nome da Variedade">
                  </div>

                  <div class="input-box">
                    <label for="estandepopulacao"><b>Estande/População:</b></label>
                    <textarea id="estandepopulacao" name="estande_populacao" rows="4" cols="50" class="form-control"></textarea>
                  </div>
            </div>

                  <div class="input-box">
                    <label for="fasecultura"><b>Fase da Cultura:</b></label>
                    <textarea id="faseCultura" name="fase_cultura" rows="4" cols="50" class="form-control" placeholder="Em qual fase a cultura se encontra"></textarea>
                  </div>
            

            

                  <label for="pragas"><b>Pragas:</b></label>
                  <textarea id="pragas" name="pragas" rows="4" cols="50" class="form-control" placeholder="Informações de pragas na lavoura"></textarea>

              

                  <label for="doencas"><b>Doenças:</b></label>
               <textarea id="doencas" name="doencas" rows="4" cols="50" class="form-control" placeholder="Informações de doenças na lavoura"></textarea>
            
              

             <label for="PlantasDaninha"><b>Plantas Daninhas:</b></label>
                            <textarea id="plantasdaninha" name="plantas_daninha" rows="4" cols="50" class="form-control" placeholder="Informações de plantas da ninha na lavoura"></textarea>

                            
                         
                            <br>

                            <label for="outrasinformacoes"><b>Outras Informações:</b></label>
                            <textarea id="outrasinformacoes" name="outras_informacoes" rows="4" cols="50" class="form-control" placeholder="Informações adicionais"></textarea>

                            <br>


            <!----        <div class="input-box address">
              <label>Endereço</label>
              <input type="text" placeholder="Insira o Endereço" required />
              <input type="text" placeholder="Complemento" required />
              <div class="column">
                <div class="select-box">
                  <select>
                    <option hidden>Estado</option>
                    <option>Amapa</option>
                    <option>Bahia</option>
                    <option>Maranhão</option>
                    <option>Paraná</option>
                  </select>
                </div>
                <input type="text" placeholder="Insira a Cidade" required />
              </div>
              <div class="column">
                <input type="text" placeholder="Distrito" />
                <input type="number" placeholder="Enter postal code" required />
              </div>
            </div>
            -->
            



            <button class="add-img" for="camera">Adicionar Imagens</button>
           
            <div class="input-box">
            <button class="clean">Limpar</button>

            <button class="save">Imprimir</button>

          </div>
          </form>
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
      max-width: 95%;
      width: 75%;
      background:var(--box-color);
      padding: 40px;
      border-radius: 8px;
      box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
      margin: 2.5% auto auto auto;
    }
    .container header {
      font-size: 1.5rem;
      color: #333;
      font-weight: 500;
      text-align: center;
    }
    .container .form {
      margin-top: 30px;
    }
    .form .input-box {
      width: 100%;
      margin-top: 8px;
    }
    .input-box label {
      color: var(--font-color);
    }

    .form :where(.input-box input, .select-box, .cultura, .form-control) {
      position: relative;
      height: 50px;
      width: 100%;
      outline: none;
      font-size: 1rem;
      color: #707070;
      margin-top: 8px;
      border: 1px solid #ddd;
      border-radius: 6px;
      padding: 0 15px;
    }
    .input-box input:focus {
      box-shadow: 0 1px 0 rgba(0, 0, 0, 0.1);
    }
    
    .form .column {
      display: flex;
      column-gap: 30px;
    }
    .form .gender-box {
      margin-top: 20px;
    }
    .gender-box h3 {
      color: #333;
      font-size: 1rem;
      font-weight: 400;
      margin-bottom: 8px;
    }
    .form :where(.gender-option, .gender) {
      display: flex;
      align-items: center;
      column-gap: 60px;
      flex-wrap: wrap;
    }
    .form .gender {
      column-gap: 5px;
    }
    .gender input {
      accent-color: rgb(29, 179, 9);
    }
    .form :where(.gender input, .gender label) {
      cursor: pointer;
    }
    .gender label {
      color: var(--font-color);
    }
    .address :where(input, .select-box) {
      margin-top: 15px;
    }
    .select-box select {
      height: 100%;
      width: 100%;
      outline: none;
      border: none;
      color: #707070;
      font-size: 1rem;
    }
    .form button {
      height: 55px;
      width: 25%;
      color: #fff;
      font-size: 1rem;
      font-weight: 400;
      margin-top: 30px;
      border: none;
      cursor: pointer;
      transition: all 0.2s ease;
      border-radius: 10px;
    }
    .form button.add-img{
      background: #eede03;
    }
    .form button.clean {

      background: #ac2020;
    }

    .form button.save {
      margin-left: 5%;
      background: var(--primary-color);
    }
    .form button:hover {
      background: rgb(88, 56, 250);
    }
    /*Responsive*/
    @media screen and (max-width: 900px) {
      .form .column {
        flex-wrap: wrap;
      }
      .form :where(.gender-option, .gender) {
        row-gap: 15px;
      }
    }
    
    
    
    
    </style>
    