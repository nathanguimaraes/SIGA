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
                  <label class="txt">Data da Vistoria</label>
                  <input type="date" placeholder="" required />
              </div>
    
              <div class="input-box">
                  <label for="cultura" class="txt">Cultura:</label>
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
                  <label class="txt">Data Inicio do Plantio</label>
                  <input type="date" placeholder="" required />
              </div>

              <div class="input-box">
                <label class="txt">Data Final do Platio</label>
                <input type="date" placeholder="" required />
              </div>
              
            </div>

            <div class="column">
                  <div class="input-box">
                    <label for="nome" class="txt"><b>Nome da Variedade:</b></label>
                    <input id="nome" name="Nome" type="text" class="form-control" placeholder="Nome da Variedade">
                  </div>

                  <div class="input-box">
                    <label for="estandepopulacao" class="txt"><b>Estande/População:</b></label>
                    <textarea id="estandepopulacao" name="estande_populacao" rows="4" cols="50" class="form-control"></textarea>
                  </div>
            </div>

                  <div class="input-box">
                    <label for="fasecultura" class="txt"><b>Fase da Cultura:</b></label>
                    <textarea id="faseCultura" name="fase_cultura" rows="4" cols="50" class="form-control" placeholder="Em qual fase a cultura se encontra"></textarea>
                  </div>
            

            

                  <label for="pragas" class="txt"><b>Pragas:</b></label>
                  <textarea id="pragas" name="pragas" rows="4" cols="50" class="form-control" placeholder="Informações de pragas na lavoura"></textarea>

              

                  <label for="doencas" class="txt"><b>Doenças:</b></label>
               <textarea id="doencas" name="doencas" rows="4" cols="50" class="form-control" placeholder="Informações de doenças na lavoura"></textarea>
            
              

             <label for="PlantasDaninha" class="txt"><b>Plantas Daninhas:</b></label>
                            <textarea id="plantasdaninha" name="plantas_daninha" rows="4" cols="50" class="form-control" placeholder="Informações de plantas da ninha na lavoura"></textarea>

                            
                         
                            <br>

                            <label for="outrasinformacoes" class="txt"><b>Outras Informações:</b></label>
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
            
            
            <br>
            <div class="add-img-box">
              <label id="teste" for="camera" class="add-img ">Adicionar Imagem</label>
                            <input id="camera" type="file" for="camera" accept="image/*" style="display: none;">
            </div>
           
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
        font-weight: normal;
     
        
        
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


    .form :where(.input-box input, .select-box, .cultura, .form-control) {
      position: relative;
      height: 50px;
      width: 100%;
      outline: none;
      font-size: 1rem;
      color: #424242;
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
 
    .form :where(.gender-option, .gender) {
      display: flex;
      align-items: center;
      column-gap: 60px;
      flex-wrap: wrap;
    }
    .form .gender {
      column-gap: 5px;
    }

    .form :where(.gender input, .gender label) {
      cursor: pointer;
    }



    .form button {
      height: 55px;
      width: 35%;
      color: #fff;
      font-size: 1rem;
      font-weight: 400;
      margin-top: 30px;
      border: none;
      cursor: pointer;
      transition: all 0.2s ease;
      border-radius: 10px;
    }

    .add-img-box{
      height: 35px;
      width: 50%;
      color: #fff;
      font-size: 20px;

      margin-left: 26%;
      border: none;
      cursor: pointer;
      transition: all 0.2s ease;
      border-radius: 10px;

    }
    #teste.add-img{
      margin-left: 0%;

    }


    .form button.clean {

      background: #ac2020;
    }

    .add-img-box{
      background: #ffbb00;
    }
    .add-img-box:hover {
      background: #0039d6;
      height: 40px;

    }

    .form button.save {
      margin-left: 5%;
      background: var(--primary-color);
    }
    .form button:hover {
      background: rgb(12, 11, 12);
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

    @media screen and (max-width: 604px) {
      .add-img-box{
        height: 30px;
        font-size: 15px;
  
      }


    }
    
    
    
    
    </style>
    