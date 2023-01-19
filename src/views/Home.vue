<template>
<head>
    
</head>
    <main class="home-page">
        <h1>Sistema  de Inspeção Geográfica Agrícola</h1>
        
        <section class="container">
      <header>Informações do Produtor</header>
      <form action="#" class="form">
        <div class="input-box">
          <label>Nome Completo</label>
          <input type="text" placeholder="Insira o Nome Completo" required />
        </div>

        <div class="input-box">
          <label>CPF do Produtor</label>
          <input type="text" placeholder="Insira o Nome Completo" required />
        </div>

        <div class="input-box">
          <label>Email</label>
          <input type="text" placeholder="exemplo@email.com" required />
        </div>

        <div class="column">
          <div class="input-box">
            <label>Telefone Celular</label>
            <input type="text" placeholder="000 00000 0000" required />
          </div>
          <div class="input-box">
            <label>Data de Nascimento</label>
            <input type="date" placeholder="Enter birth date" required />
          </div>
        </div>
        <div class="gender-box">
          <h3>Genero</h3>
          <div class="gender-option">
            <div class="gender">
              <input type="radio" id="check-male" name="gender" checked />
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

        <button>Submit</button>
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
  max-width: 700px;
  width: 100%;
  background: #fff;
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
  margin-top: 20px;
}
.input-box label {
  color: #333;
}
.form :where(.input-box input, .select-box) {
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
  color: #707070;
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
  width: 100%;
  color: #fff;
  font-size: 1rem;
  font-weight: 400;
  margin-top: 30px;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  background: var(--primary-color);
}
.form button:hover {
  background: rgb(88, 56, 250);
}
/*Responsive*/
@media screen and (max-width: 500px) {
  .form .column {
    flex-wrap: wrap;
  }
  .form :where(.gender-option, .gender) {
    row-gap: 15px;
  }
}




</style>
