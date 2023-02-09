<template>
<body>
	
		<nav class="sidebar ">
        <header>
            <div class="image-text">
                <span class="image">
                    <img src="../assets/sigalogo.jpeg" alt="">
                </span>

                <div class="text logo-text">
                    <span class="name">SIGA</span>
                    <span class="profession"></span>
                </div>
            </div>

            <i class='bx bx-chevron-right toggle'  onclick="openNav"></i>
        </header>

        <div class="menu-bar">
            <div class="menu">

                <li class="search-box">
                    <i class='bx bx-search icon'></i>
                    <input type="text" placeholder="Search...">
                </li>

                <ul class="menu-links">
                    <li class="nav-link">
                        <router-link to="/" class="button">
                            <i class='bx bx-home-alt icon' ></i>
                            <span class="text nav-text">Pagina Inicial</span>
                        </router-link>
                    </li>

                    <li class="nav-link">
                        <router-link to="/produtor" class="button">
                            <i class='bx bx-user icon' ></i>
                            <span class="text nav-text">Produtor</span>
                        </router-link>
                    </li>

                    <li class="nav-link">
                        <router-link to="/imagens" class="button">
                            <i class='bx bx-images icon' ></i>
                            <span class="text nav-text">Visualizador</span>
                        </router-link>
                    </li>



                    <li class="nav-link">
                        <router-link to="/relatorio" class="button">
                            <i class='bx bx-bar-chart-alt-2 icon' ></i>
                            <span class="text nav-text">Relatorio</span>
						</router-link>
                    </li>

                    <li class="nav-link">
                        <router-link to="/notificacoes" class="button">
                            <i class='bx bx-bell icon'></i>
                            <span class="text nav-text">Notificações</span>
						</router-link>
                    </li>

                    <li class="nav-link">
                        <router-link to="/analises" class="button">
                            <i class='bx bx-pie-chart-alt icon' ></i>
                            <span class="text nav-text">Análises</span>
						</router-link>
                    </li>

                    <li class="nav-link">
                        <router-link to="/configuracoes" class="button">
                            <i class='bx bx-cog icon' ></i>
                            <span class="text nav-text">Configurações</span>
						</router-link>
                    </li>

                    <li class="nav-link">
                        <router-link to="/about" class="button">
							<i class='bx bx-group icon'></i>
                            <span class="text nav-text">Sobre Nós</span>
						</router-link>
                    </li>

                </ul>
            </div>

            <div class="bottom-content">
                <li class="">
                    <router-link to="" class="button">
                        <i class='bx bx-log-out icon' ></i>
                        <span class="text nav-text">Logout</span>
					</router-link>
                </li>

                <li class="mode">
                    <div class="sun-moon">
                        <i class='bx bx-moon icon moon'></i>
                        <i class='bx bx-sun icon sun'></i>
                    </div>
                    <span class="mode-text text">Dark mode</span>

                    <div class="toggle-switch">
                        <span class="switch"></span>
                    </div>
                </li>
                
            </div>
        </div>

    </nav>

	
</body>
</template>




