<template>
    <head>
        
    </head>
        <main class="relatorio-page">
            
           
              <h1>Sistema  de Inspeção Geográfica Agrícola</h1>
            <br>
            <section class="container">
          <header>Informações do Produtor</header>
          <form action="#" class="form">
            <div class="input-box">
              <label>Nome Completo</label>
              <input type="text"  id="Nome" v-model="nome" placeholder="Insira o Nome Completo" required />
            </div>
    
            <div class="input-box">
              <label>CPF do Produtor</label>
              <input type="text"  id="cpf" v-model="cpf" placeholder="Insira o Nome Completo" required />
            </div>
    
            <div class="input-box">
              <label>Email</label>
              <input type="text" id="email" v-model="email" placeholder="exemplo@email.com" required />
            </div>
    
            <div class="column">
              <div class="input-box">
                <label>Telefone Celular</label>
                <input type="text" id="telefone" v-model="telefone" placeholder="000 00000 0000" required />
              </div>
              <div class="input-box">
                <label>Data de Nascimento</label>
                <input type="date" id="dtnascimento" v-model="dtnascimento" placeholder="Enter birth date" required />
              </div>
            </div>
            <div class="gender-box">
              <h3>Genero</h3>
              <div class="gender-option">
                <div class="gender">
                  <input type="radio" id="check-male"  name="gender" checked />
                  <label for="check-male">Masculino</label>
                </div>
                <div class="gender">
                  <input type="radio" id="check-female" name="gender" />
                  <label for="check-female">Feminino</label>
                </div>
                <div class="gender">
                  <input type="radio" id="check-other" name="gender" />
                  <label for="check-other">Outro</label>
                </div>
                <div class="gender">
                  <input type="radio" id="check-not" name="gender" />
                  <label for="check-other">Prefiro não declarar</label>
                </div>
              </div>
            </div>    
          </form>
          <br>
          <header>Informações da Lavoura</header>
          <form action="#" class="form">
            <div class="column">
              <div class="input-box">
                  <label class="txt">Data da Vistoria</label>
                  <input id="datavist" type="date" v-model="dtvistoria" placeholder="" required />
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
                  <input id="datainiplant" v-model="dtiniplant" type="date" placeholder="" required />
              </div>

              <div class="input-box">
                <label class="txt">Data Final do Platio</label>
                <input id="datafimplant" v-model="dtfimplant" type="date" placeholder="" required />
              </div>
              
            </div>

            <div class="column">
                  <div class="input-box">
                    <label for="nome" class="txt"><b>Nome da Variedade:</b></label>
                    <input id="nome" name="Nome" type="text" class="form-control" placeholder="Nome da Variedade" v-model="nomevariedade">
                  </div>

                  <div class="input-box">
                    <label for="estandepopulacao" class="txt"><b>Estande/População:</b></label>
                    <textarea id="estandepopulacao" name="estande_populacao" rows="4" cols="50" class="form-control" v-model="estanpopulacao"></textarea>
                  </div>
            </div>

                  <div class="input-box">
                    <label for="fasecultura" class="txt"><b>Fase da Cultura:</b></label>
                    <textarea id="faseCultura" name="fase_cultura" rows="4" cols="50" class="form-control" placeholder="Em qual fase a cultura se encontra" v-model="fasecultura"></textarea>
                  </div>
            

            

                  <label for="pragas" class="txt"><b>Pragas:</b></label>
                  <textarea id="pragas" name="pragas" rows="4" cols="50" class="form-control" placeholder="Informações de pragas na lavoura" v-model="infopraga"></textarea>

              

                  <label for="doencas" class="txt"><b>Doenças:</b></label>
               <textarea id="doencas" name="doencas" rows="4" cols="50" class="form-control" placeholder="Informações de doenças na lavoura" v-model="doencas"></textarea>
            
              

             <label for="PlantasDaninha" class="txt"><b>Plantas Daninhas:</b></label>
                            <textarea id="plantasdaninha" name="plantas_daninha" rows="4" cols="50" class="form-control" placeholder="Informações de plantas daninha na lavoura" v-model="plantdaninhas"></textarea>

                            
                         
                            <br>

                            <label for="outrasinformacoes" class="txt"><b>Outras Informações:</b></label>
                            <textarea id="outrasinformacoes" name="outras_informacoes" rows="4" cols="50" class="form-control" placeholder="Informações adicionais" v-model="outrasinfo"></textarea>

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
            </div>

                          
           
            <div class="input-box button-down">
              
              
            <button class="clean">Limpar</button>

           
      
            <button @click="printPage()" type="button" class="save">Imprimir</button>


            <div id="preview" class="input-box">
<form @submit.prevent="handleSubmit">
      <div>
        <input id="camera" capture="camera" type="file" accept="image/*"  multiple @change="handleFileUpload" style="display: none;">
      </div>
      <div v-for="(image, index) in images" :key="index" class="images-min">
        <img :src="image.url" >
        <p>{{ image.description }}</p>
        <p>Latitude: {{ image.location.latitude }}</p>
        <p>Longitude: {{ image.location.longitude }}</p>
        <p>Data e hora atuais: {{ currentDateTime }}</p>
        <textarea type="text" class="form-control" id="description-img-text" placeholder="Ex: PLantações de milho 400m2"   v-model="description"></textarea>
      </div>

    </form>


            </div>
          </div>
          </form>
        </section>

        </main>
    </template>
 <script>
 export default{
      data() {
        return {
          images: [],
          description: '',
          latitude: '',
          longitude: '',
          data: '',
          latitude: '',
          longitude: '',
        };
      },
      mounted() {
    this.getCurrentDateTime();
    this.getGeoLocation();
     },
      methods: {


    limparFormulario() {
        this.nome = "";
        this.email = "";
        this.mensagem = "";
    },


        printPage() {
        window.print();
      },

        getCurrentDateTime() {
      const today = new Date();
      const date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
      const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      this.currentDateTime = date+' '+time;
      
    },
    getGeoLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
          this.latitude = position.coords.latitude.toFixed(4);
          this.longitude = position.coords.longitude.toFixed(4);
        }, error => {
          console.error(error);
        });
      } else {
        console.error("Geolocation is not supported by this browser.");
      }
    },
        handleFileUpload(event) {
          const files = event.target.files;
          for (let i = 0; i < files.length; i++) {
            const file = files[i];
            const reader = new FileReader();
            reader.onload = () => {
              this.images.push({
                url: reader.result,
                description: this.description,
                location: {
                  latitude: this.latitude,
                  longitude: this.longitude,
                  currentDateTime: this.currentDateTime
                },
              });
            };
            reader.readAsDataURL(file);
          }
        },
        handleSubmit() {
          // aqui você pode enviar os dados para o servidor ou fazer outra ação
          // como limpar o formulário
          this.description = '';
          this.latitude = '';
          this.longitude = '';
        },
      },
    } 
 </script>



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

     /*Preview Image*/
    #preview img{
      width: 100%;
      height: 400px;
      z-index: 1;
      position: relative;
    }
    #description-img-text{
      width: 70%;
      height: 100px;
      resize: vertical;
    }
    .images-min{
      width: 100%;
      height: 200px;
      position: relative;
      display: inline-table;
      justify-content: space-between;
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
      resize: vertical;
    }
    .input-box input:focus {
      box-shadow: 0 1px 0 rgba(0, 0, 0, 0.1);
    }
    .button-down{
      position: relative;
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
     
      @media screen and (max-width: 479px) {
      .add-img-box{
        height: 60px;
        font-size: 15px;
  
      } 
    }


    }
    
    
    
    
    </style>
    